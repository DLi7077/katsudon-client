import React, { useEffect, useState } from "react";
import { get } from "lodash";
import UserAPI from "../../Api/UserAPI";
import { PROBLEM_DIFFICULTY } from "../../Constants/colors";
import { Avatar, CircularProgress } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import currentUser from "../../Utils/UserTools";
import postGenerator from "./postGenerator";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Activity(props) {
  const [weeklySolutions, setWeeklySolutions] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function setPosts() {
    setLoading(true);
    await UserAPI.getWeeklySolutions(currentUser("auth_token"))
      .then((solutions) => {
        setWeeklySolutions(postGenerator(solutions.rows));
      })
      .catch(console.error)
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 200)
      );
  }

  useEffect(() => {
    setPosts();
  }, []);

  const header = (
    <div
      className="align-down"
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        marginBottom: "1.5rem",
        color: props.text,
        gap: "0.5rem",
      }}
    >
      <span style={{ fontSize: "2.5rem" }}>Weekly Progress</span>
      <span style={{ fontSize: "1.25rem", color: props.color }}>
        See how others are progressing this week, and try out problems they've
        solved!
      </span>
      <div
        style={{
          backgroundColor: props.color,
          marginTop: "1rem",
          height: "2px",
          width: "90%",
        }}
      />
    </div>
  );
  const legend = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        marginBottom: "1.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <TaskAltIcon style={{ fontSize: "1.5rem" }} />
        Complete
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
        <PanoramaFishEyeIcon
          style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.3)" }}
        />
        Incomplete
      </div>
    </div>
  );

  const solvedStatusIcon = (completed) => {
    const iconStyle = {
      fontSize: "1.5rem",
      marginRight: "0.25rem",
    };
    return completed ? (
      <TaskAltIcon style={{ ...iconStyle }} />
    ) : (
      <PanoramaFishEyeIcon
        style={{ ...iconStyle, color: "rgba(255,255,255,0.3)" }}
      />
    );
  };

  return (
    <div
      className="content-container"
      style={{ backgroundColor: props.backgroundColor }}
    >
      {header}
      {legend}
      {isLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <CircularProgress
            style={{
              color: props.color,
              width: "4rem",
              height: "4rem",
            }}
          />
        </div>
      )}
      {!isLoading && (
        <>
          <div
            className="align-down"
            style={{ alignItems: "center", gap: "3rem" }}
          >
            {weeklySolutions.map((post, idx) => {
              return (
                <div
                  key={idx}
                  className="align-down progress-post container"
                  style={{ backgroundColor: props.section }}
                >
                  <Link
                    className="user-wrapper hover-link"
                    style={{ color: "white" }}
                    to={`/profile?user_id=${post.user_id}`}
                  >
                    <Avatar
                      src={post.profile_picture_url ?? null}
                      style={{ height: "2.5rem", width: "2.5rem" }}
                    />
                    <span className="hover-link">{post.username}</span>
                  </Link>
                  <div
                    className="align-down"
                    style={{ justifyContent: "flex-start", gap: ".25rem" }}
                  >
                    {post.solved.length && (
                      <>
                        <span style={{ fontSize: "1.25rem" }}>
                          Solved {post.solved.length} problem
                          {post.solved.length > 1 ? "s" : ""}
                        </span>
                        {post.solved.map((solution, idx) => {
                          return (
                            <div className="problem-item" key={idx}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                {solvedStatusIcon(
                                  get(solution, "problem.solved_by").includes(
                                    currentUser("user-id")
                                  )
                                )}
                                <a
                                  href={solution.problem.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="hover-link"
                                  style={{
                                    color:
                                      PROBLEM_DIFFICULTY[
                                        solution.problem.difficulty
                                      ],
                                  }}
                                >
                                  {solution.problem.title}
                                </a>
                              </div>
                              {solution.solution_language}
                            </div>
                          );
                        })}
                      </>
                    )}
                  </div>

                  {!!post.attempted.length && (
                    <div
                      className="align-down"
                      style={{ justifyContent: "flex-start", gap: ".25rem" }}
                    >
                      <span style={{ fontSize: "1.25rem" }}>
                        Attempted {post.attempted.length} problem
                        {post.attempted.length > 1 ? "s" : ""}
                      </span>
                      {post.attempted.map((solution, idx) => {
                        return (
                          <div className="problem-item" key={idx}>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              {solvedStatusIcon(
                                get(solution, "problem.solved_by").includes(
                                  currentUser("user-id")
                                )
                              )}
                              <a
                                href={solution.problem.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover-link"
                                style={{
                                  color:
                                    PROBLEM_DIFFICULTY[
                                      solution.problem.difficulty
                                    ],
                                }}
                              >
                                {solution.problem.title}
                              </a>
                            </div>
                            {solution.solution_language}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}