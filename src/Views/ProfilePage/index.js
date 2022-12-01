import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { get, omit, pick } from "lodash";
import { CircularProgress, IconButton } from "@mui/material";
import UserProfile from "../../Components/User/UserProfile";
import getSearchParams from "../../Utils/getSearchParams";
import UserAPI from "../../Api/UserAPI";
import SolutionTable from "../../Components/SolutionTable";
import useSolutionModal from "../../Hooks/useSolutionModal";
import SkillBox from "../../Components/User/Skillbox";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import { updateFollowing } from "../../Store/Reducers/user";
import { setSnackbarSuccess } from "../../Store/Reducers/snackbar";
import "./styles.css";
import {
  setLoaded,
  startLoading,
  stopLoading,
} from "../../Store/Reducers/progress";
import { useSolutionQueryParams } from "./Hooks";

const classes = {
  follow: {
    position: "absolute",
    top: "4px",
    right: "5px",
    color: "white",
  },
  loadingFollow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "350px",
    minWidth: "250px",
    backgroundColor: "black",
    border: "2px solid #FF66EB",
    borderRadius: "8px",
  },
};

export default function ProfilePage(props) {
  const currentUser = useSelector((state) => state.user);
  const progress = useSelector((state) => state.progress);

  const dispatch = useDispatch();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState(null);
  const [solutions, setSolutions] = useState({});
  const [awaitFollow, setAwaitFollow] = useState(false);
  const [tableLoading, setTableLoading] = useState(true);
  const { sortBy, sortDir, changeSortBy, changeSortDir } =
    useSolutionQueryParams("problem_id", "asc");

  const [queryParams, setQueryParams] = useState({
    user_id:
      get(getSearchParams(location), "user_id") ?? get(currentUser, "user_id"),
    sortBy: "last_solved_at",
    sortDir: "desc",
  });

  const { handleOpenSolutionModel, SolutionModalComponent } =
    useSolutionModal();

  // retrieves user's info for profile card
  async function getUserDetails() {
    if (!queryParams.user_id) {
      return;
    }

    const compliedQuery = {
      ...queryParams,
      user_id:
        get(getSearchParams(location), "user_id") ??
        get(currentUser, "user_id"),
    };

    await UserAPI.getUserProfile(compliedQuery)
      .then((res) => {
        setUserInfo(res.user);
      })
      .catch(() => {
        setUserInfo(undefined);
      });
  }

  useEffect(() => {
    console.log(sortBy);
  }, [sortBy]);

  async function getSolutions() {
    setTableLoading(true);
    const compliedQuery = {
      ...queryParams,
      user_id:
        get(getSearchParams(location), "user_id") ??
        get(currentUser, "user_id"),
    };
    await UserAPI.getUserSolutions(compliedQuery).then((res) => {
      setSolutions(res);
    });

    setTimeout(() => {
      setTableLoading(false);
    }, 100);
  }

  function updateSkillQuery(tagList) {
    setQueryParams(
      tagList.length
        ? { ...queryParams, tags: tagList }
        : omit(queryParams, "tags")
    );
  }

  async function handleFollowClick() {
    setAwaitFollow(true);

    const willUnfollow = (currentUser.following ?? []).includes(userInfo._id);

    const followFunction = willUnfollow
      ? UserAPI.unfollowUser
      : UserAPI.followUser;

    await followFunction(userInfo._id, get(currentUser, "auth_token"))
      .then((res) => {
        const updatedFollowingList = {
          following: get(res.users[0], "following"),
        };
        const otherUser = get(res.users[1], "username");
        dispatch(updateFollowing(updatedFollowingList));

        const followStatusMessage = `${
          willUnfollow ? "Unfollowed" : "Following"
        } ${otherUser}`;

        dispatch(setSnackbarSuccess(followStatusMessage));
      })
      .then(async () => {
        await UserAPI.getUserProfile(queryParams)
          .then((res) => {
            setUserInfo(res.user);
          })
          .catch(() => {
            setUserInfo(null);
          });
      })
      .catch((e) => {
        console.error("could not follow/unfollow user");
      });

    setAwaitFollow(false);
  }

  useEffect(() => {
    dispatch(startLoading());
    setQueryParams({
      ...queryParams,
      ...pick(getSearchParams(location), "user_id"),
    });
    if (!queryParams.user_id) {
      setQueryParams({
        user_id: get(currentUser, "user_id"),
      });
    }
    getUserDetails().then(() => {
      setTimeout(() => {
        dispatch(setLoaded());
        setTimeout(() => {
          dispatch(stopLoading());
        }, 600);
      }, 100);
    });
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    getSolutions();
    // eslint-disable-next-line
  }, [queryParams]);

  function LoadingProfile() {
    return (
      <div style={classes.loadingFollow}>
        <CircularProgress
          style={{
            color: props.color,
            width: "4rem",
            height: "4rem",
          }}
        />
      </div>
    );
  }

  function FollowIcon() {
    return (
      <IconButton style={classes.follow} onClick={handleFollowClick}>
        {(currentUser.following ?? []).includes(userInfo._id) ? (
          <PersonRemoveAlt1Icon
            style={{ fontSize: "2rem", color: "#FF7A7A" }}
          />
        ) : (
          <PersonAddAlt1Icon style={{ fontSize: "2rem", color: "#7AFF87" }} />
        )}
      </IconButton>
    );
  }

  return (
    <div
      className="content-container"
      style={{ backgroundColor: props.backgroundColor, paddingTop: 0 }}
    >
      {userInfo && progress.loaded && (
        <>
          <Banner
            userId={get(userInfo, "_id")}
            bannerUrl={get(userInfo, "profile_banner_url")}
          />
          <div className="profile-page-container">
            <div className="user-profile-wrapper">
              <div style={{ position: "relative", width: "fit-content" }}>
                {awaitFollow && <LoadingProfile />}
                {!awaitFollow && (
                  <>
                    <UserProfile userInfo={userInfo} borderColor="#FF66EB" />
                    {get(currentUser, "user_id") !== userInfo._id && (
                      <FollowIcon />
                    )}
                  </>
                )}
              </div>
              <SkillBox
                solved={userInfo.solved}
                updateSkillQuery={updateSkillQuery}
              />
            </div>
            <div style={{ overflow: "auto" }}>
              <SolutionTable
                solutions={solutions.rows}
                handleOpenSolutionModel={handleOpenSolutionModel}
                headerColor={props.color}
                backgroundColor={"#382E37"}
                loading={tableLoading}
                queryParams={queryParams}
                sortBy={sortBy}
                sortDir={sortDir}
              />
            </div>
            <SolutionModalComponent />
          </div>
        </>
      )}
      {userInfo === null && progress.loaded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            color: "white",
          }}
        >
          Invalid User
        </div>
      )}
    </div>
  );
}
