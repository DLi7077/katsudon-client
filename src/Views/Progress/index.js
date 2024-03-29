import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoaded,
  startLoading,
  stopLoading,
} from "../../Store/Reducers/progress";
import UserAPI from "../../Api/UserAPI";
import { map } from "lodash";
import { postGenerator } from "./util";
import Header from "./Header";
import useSolutionModal from "../../Hooks/useSolutionModal";
import ActivityPost from "./ActivityPost";
import "./styles.css";
import VerifyNotification from "../../Components/User/VerifyNotification";

export default function Activity(props) {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);
  const currentUser = useSelector((state) => state.user);

  const [weeklySolutions, setWeeklySolutions] = useState([]);

  const { handleOpenSolutionModel, SolutionModalComponent } =
    useSolutionModal();

  async function retrievePosts() {
    dispatch(startLoading());
    await UserAPI.getWeeklySolutions(currentUser.user_id)
      .then((solutions) => {
        // clean solutions then group by date
        setWeeklySolutions(postGenerator(solutions.rows));
        setTimeout(() => {
          dispatch(setLoaded());
        }, 100);
      })
      .catch(console.error)
      .finally(() => {
        setTimeout(() => {
          dispatch(stopLoading());
        }, 600);
      });
  }

  useEffect(() => {
    retrievePosts();
    // eslint-disable-next-line
  }, []);

  function DateDivider({ date }) {
    const whiteBarStyle = {
      height: "2px",
      width: "100%",
      backgroundColor: props.text,
    };
    return (
      <span
        className="justify-center"
        style={{
          position: "sticky",
          top: 50,
          width: "min(90vw, 640px)",
          gap: "1rem",
          marginTop: "1rem",
          backgroundColor: props.backgroundColor,
          zIndex: 2,
        }}
      >
        <span style={whiteBarStyle} />
        <span
          style={{
            fontSize: "16px",
            whiteSpace: "nowrap",
            color: "white",
          }}
        >
          {date}
        </span>
        <span style={whiteBarStyle} />
      </span>
    );
  }

  return (
    <div className="align-down">
      {currentUser.logged_in && !currentUser.verified && <VerifyNotification />}
      <div
        className="content-container"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <SolutionModalComponent />
        <Header text={props.text} color={props.color} />

        {progress.loaded && (
          <div
            className="align-down"
            style={{ alignItems: "center", gap: "2rem" }}
          >
            {map(weeklySolutions, (dailySolutions, date) => {
              return (
                <div
                  className="align-down"
                  style={{ gap: "1.5rem" }}
                  key={`${date}-posts`}
                >
                  <DateDivider key={date} date={date} />
                  {dailySolutions.map((post, idx) => {
                    return (
                      <ActivityPost
                        key={idx}
                        userId={post.user_id}
                        username={post.username}
                        profileURL={post.profile_picture_url}
                        solved={post.solved}
                        attempted={post.attempted}
                        handleOpenSolutionModel={handleOpenSolutionModel}
                        backgroundColor={props.section}
                      />
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
