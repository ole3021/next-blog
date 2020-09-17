import { useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import TextLoop from "react-text-loop";

import Intro from "components/mine/intro";
import Feature7 from "components/contents/feature-7";
import Skills from "components/mine/skills";

const RevealingHero = () => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/revealing-hero.js";
    frontEnd.id = "revealing-hero-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("revealing-hero-js").remove();
    };
  });

  return (
    <>
      <section class="position-relative z-index-2 bg shadow-sm">
        <div class="container max-width-xl height-100vh flex">
          <div
            class="text-component height-100vh flex flex-column"
            style={{ width: "100%" }}
          >
            <div> </div>
            <div
              class="margin-top-auto flex flex-column"
              style={{
                paddingLeft: "7em",
              }}
            >
              <h1>I'm Oliver.W</h1>
              <div class="flex">
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
              class="margin-top-auto flex flex-center"
              style={{ width: "100%", paddingBottom: 20 }}
            >
              <RiArrowDownSLine size="36" class="up-down" />
            </div>
          </div>
        </div>
      </section>

      <section class="revealing-section bg z-index-1 js-revealing-section">
        <div class="container max-width-xl padding-y-xl">
          <Intro />
          <Feature7 />
          <Skills />
        </div>
      </section>
    </>
  );
};

export default RevealingHero;
