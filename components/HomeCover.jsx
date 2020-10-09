import { useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import TextLoop from "react-text-loop";

const HomeCover = (props) => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/home-cover.js";
    frontEnd.id = "home-cover-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("home-cover-js").remove();
    };
  });

  return (
    <>
      <section className="position-relative z-index-2 bg shadow-sm">
        <div className="container max-width-xl height-100vh flex">
          <div
            className="text-component height-100vh flex flex-column"
            style={{ width: "100%" }}
          >
            <div> </div>
            <div
              className="margin-top-auto flex flex-column"
              style={{
                paddingLeft: "7em",
              }}
            >
              <h1>I'm Oliver.W</h1>
              <div className="flex">
                <h1>I do &nbsp;</h1>
                <TextLoop
                  mask={true}
                  springConfig={{ stiffness: 180, damping: 8 }}
                >
                  <h1>Software Development</h1>
                  <h1>Architect Design</h1>
                  <h1>Photograph</h1>
                  <h1>Freelancing</h1>
                </TextLoop>
              </div>
            </div>
            <div
              className="margin-top-auto flex flex-center"
              style={{ width: "100%", paddingBottom: 20 }}
            >
              <RiArrowDownSLine size="36" className="up-down" />
            </div>
          </div>
        </div>
      </section>

      <section className="revealing-section bg z-index-1 js-revealing-section">
        <div className="container max-width-xl padding-y-xl">
          {props.children}
        </div>
      </section>
    </>
  );
};

export default HomeCover;
