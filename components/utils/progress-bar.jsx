import { useEffect } from "react";

const ProgressBar = (props) => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/progress-bar.js";
    frontEnd.id = "progress-bar-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("progress-bar-js").remove();
    };
  });

  return (
    <div className="progress-bar flex flex-column items-center js-progress-bar">
      {props.show ? (
        <>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Progress value is{" "}
            <span className="js-progress-bar__aria-value">
              {" "}
              {`${props.value}%`}
            </span>
          </p>

          <span
            className="progress-bar__value margin-bottom-xs"
            aria-hidden="true"
          >
            {`${props.value}%`}
          </span>
        </>
      ) : (
        ""
      )}

      <div className="progress-bar__bg" aria-hidden="true">
        <div
          className="progress-bar__fill color-primary"
          style={{ width: `${props.value || 0}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
