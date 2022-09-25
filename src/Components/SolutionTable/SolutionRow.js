import { TableRow, TableCell, IconButton } from "@mui/material";
import { keys, map, take } from "lodash";
import { PROBLEM_DIFFICULTY } from "../../Constants/colors";
import { LANGUAGE_LOGOS } from "../../Constants/language";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import "./styles.css";

export default function SolutionRow(props) {
  const classes = {
    tableHeader: {
      color: props.headerColor,
      fontSize: "1.4rem",
    },
    tableCell: {
      textAlign: "left",
      fontSize: "1.15rem",
      color: "white",
      margin: 0,
      padding: 0,
      paddingInline: "1rem",
    },
    fileOpen: { fontSize: "2rem", color: "white" },
    languageLogo: {
      width: "2rem",
    },
    link: {
      textDecoration: "none",
    },
  };

  const SHOWN_LANGUAGES = 2;

  return (
    <TableRow>
      <TableCell
        style={{
          ...classes.tableCell,
          color: PROBLEM_DIFFICULTY[props.details.problem.difficulty],
        }}
      >
        {props.details.problem.id}
      </TableCell>
      <TableCell
        style={{
          ...classes.tableCell,
          position: "relative",
        }}
        colSpan={3}
      >
        <a
          href={props.details.problem.url}
          target="_blank"
          rel="noreferrer"
          style={{
            color: PROBLEM_DIFFICULTY[props.details.problem.difficulty],
            ...classes.link,
          }}
        >
          {props.details.problem.title}
        </a>
      </TableCell>
      <TableCell style={{ ...classes.tableCell, paddingInline: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {map(
            take(keys(props.details.solutions), SHOWN_LANGUAGES),
            (language, idx) => {
              return (
                <img
                  key={idx}
                  src={LANGUAGE_LOGOS[language]}
                  alt={language}
                  style={classes.languageLogo}
                />
              );
            }
          )}

          {keys(props.details.solutions).length > SHOWN_LANGUAGES && (
            <div>+{keys(props.details.solutions).length - SHOWN_LANGUAGES}</div>
          )}
        </div>
      </TableCell>
      <TableCell style={{ ...classes.tableCell, paddingInline: 0 }}>
        <IconButton
          onClick={() => {
            props.handleOpenSolutionModel(
              props.details.problem,
              props.details.solutions
            );
          }}
        >
          <FileOpenIcon style={classes.fileOpen} />
        </IconButton>
      </TableCell>
      <TableCell style={classes.tableCell}>
        {props.details.last_solved_at.substring(0, 10)}
      </TableCell>
    </TableRow>
  );
}
