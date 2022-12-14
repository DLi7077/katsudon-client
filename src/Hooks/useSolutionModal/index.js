import { Modal } from "@mui/material";
import { Markup } from "react-render-markup";
import { get, keys, without } from "lodash";
import CodeBlock from "../../Components/Codeblock";
import TabGroup from "../../Components/TabGroup";
import { LANGUAGE_COMPILE_MAPPING } from "../../Constants/language";
import { PROBLEM_DIFFICULTY } from "../../Constants/colors";
import "./styles.css";
import { useState } from "react";

/**
 * hook that provides functions and utils to display a solutionModal
 * returns
 */
export default function useSolutionModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [problem, setProblem] = useState({});
  const [solutions, setSolutions] = useState({});

  const solutionLanguages = without(keys(solutions), "failed");
  const solutionTabs = solutionLanguages.map((language) => {
    const solutionDetails = get(solutions, language);
    const runtime = get(solutionDetails, "runtime_ms");
    const memory = get(solutionDetails, "memory_usage_mb");

    const validRuntime = runtime !== null;
    const validMemeoryUsage = memory !== null;
    return {
      label: language,
      content: (
        <div className="solution-code">
          <div style={{ padding: "1rem" }}>
            {validRuntime && validMemeoryUsage && (
              <>
                Runtime: {runtime} ms <br />
                Memory Usage: {memory} MB
              </>
            )}
            {validRuntime && !validMemeoryUsage && (
              <>
                Runtime: {runtime} ms <br />
                Memory Usage: {0}B
              </>
            )}
            {!validRuntime && !validMemeoryUsage && (
              <div style={{ color: "#FF4500" }}>
                {get(solutionDetails, "error") ?? "Wrong Answer"}
              </div>
            )}
          </div>
          <CodeBlock
            code={get(solutions, `${language}.solution_code`)}
            language={LANGUAGE_COMPILE_MAPPING[language]}
          />
        </div>
      ),
    };
  });

  function handleOpenSolutionModel(problem, solutions) {
    setProblem(problem);
    setSolutions(solutions);
    setModalOpen(true);
  }

  function handleCloseSolutionModel() {
    setProblem({});
    setSolutions({});
    setModalOpen(false);
  }

  function SolutionModalComponent() {
    return (
      <Modal
        open={modalOpen}
        onClose={handleCloseSolutionModel}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="solution-container">
          <div className="problem-block">
            <div className="modal-content">
              <a
                href={problem.url}
                target="_blank"
                rel="noreferrer"
                className="leetcode-title"
                style={{ color: PROBLEM_DIFFICULTY[problem.difficulty] }}
              >
                {problem.id}. {problem.title}
              </a>
              <Markup markup={problem.description} />
            </div>
          </div>
          <div className="solution-block">
            <div className="modal-content">
              <TabGroup
                tabs={solutionTabs}
                color={PROBLEM_DIFFICULTY[problem.difficulty]}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  return {
    handleOpenSolutionModel,
    SolutionModalComponent,
  };
}
