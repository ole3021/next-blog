import { useEffect } from "react";

const ResumeTimeLine = () => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/time-line.js";
    frontEnd.id = "time-line-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("time-line-js").remove();
    };
  });
  return (
    <div className="position-relative z-index-1 overflow-hidden padding-y-xl ">
      <div className="margin-bottom-lg">
        <h1 className="text-center"> Experience</h1>
      </div>

      <div className="container max-width-adaptive-lg">
        <div
          className="v-timeline v-timeline--icons js-v-timeline"
          data-animation="on"
        >
          <section className="v-timeline__section js-v-timeline__section">
            <div
              className="v-timeline__marker bg-warning border border-3 border-bg shadow-xs"
              aria-hidden="true"
            >
              <svg className="icon icon--sm color-white" viewBox="0 0 24 24">
                <g>
                  <path d="M22,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,21H3V3H21Z"></path>
                  <path d="M6,19H18a1,1,0,0,0,.895-1.447l-4-8a1,1,0,0,0-.735-.54.984.984,0,0,0-.867.28l-8,8A1,1,0,0,0,6,19Z"></path>
                  <circle cx="8" cy="8" r="2"></circle>
                </g>
              </svg>
            </div>

            <div className="v-timeline__items-group">
              <div className="v-timeline__item bg padding-md radius-md shadow-xs">
                <div className="v-timeline__date margin-bottom-sm">
                  <h4>Hilton</h4>
                  <h5>2019-Present</h5>
                </div>

                <div className="text-component">
                  <h3>BACKEND ARCHITECT</h3>

                  <p>
                    Hilton need to rebuild a new system to support the
                    customized Apps and Mini-Program for China.
                  </p>

                  <ul>
                    <li>
                      Design & Build new Hilton backend system with GraphQL for
                      China from scratch.
                    </li>
                    <li>
                      Integrate & Sync data with Hilton backend services in the
                      U.S.
                    </li>
                    <li>
                      Design & Build customized event tracking system for Hilton
                      commercial team.
                    </li>
                    <li>
                      Lead E2E test project to do automated tests when
                      dependency services updated.
                    </li>
                    <li>
                      Design & Build Hilton online restaurant reservation
                      services for China.
                    </li>
                    <li>Build internal admin panel to manage and check</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="v-timeline__section js-v-timeline__section">
            <div
              className="v-timeline__marker bg-warning border border-3 border-bg shadow-xs"
              aria-hidden="true"
            >
              <svg className="icon icon--sm color-white" viewBox="0 0 24 24">
                <g>
                  <path d="M22,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,21H3V3H21Z"></path>
                  <path d="M6,19H18a1,1,0,0,0,.895-1.447l-4-8a1,1,0,0,0-.735-.54.984.984,0,0,0-.867.28l-8,8A1,1,0,0,0,6,19Z"></path>
                  <circle cx="8" cy="8" r="2"></circle>
                </g>
              </svg>
            </div>

            <div className="v-timeline__items-group">
              <div className="v-timeline__item bg padding-md radius-md shadow-xs">
                <div className="v-timeline__date margin-bottom-sm">
                  <h4>Wiredcraft</h4>
                  <h5>2017-2019</h5>
                </div>

                <div className="text-component">
                  <h3>BACKEND ARCHITECT</h3>

                  <p>
                    Wiredcraft help top companies in China to design and
                    development customized Websites, Apps and Internal Systems.
                  </p>

                  <ul>
                    <li>
                      Design & Build scalable, maintainable and reusable backend
                      services for clients.
                    </li>
                    <li>
                      Research & Solve difficult tasks. eg: On-site Chinese
                      search with weight in results.
                    </li>
                    <li>
                      Design project boilerplate and build fundamental modules
                      for the team.
                    </li>
                    <li>
                      Lead & Help other team members to write clean code with
                      clean architecture.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="v-timeline__section js-v-timeline__section">
            <div
              className="v-timeline__marker bg-warning border border-3 border-bg shadow-xs"
              aria-hidden="true"
            >
              <svg className="icon icon--sm color-white" viewBox="0 0 24 24">
                <g>
                  <path d="M22,1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V2A1,1,0,0,0,22,1ZM21,21H3V3H21Z"></path>
                  <path d="M6,19H18a1,1,0,0,0,.895-1.447l-4-8a1,1,0,0,0-.735-.54.984.984,0,0,0-.867.28l-8,8A1,1,0,0,0,6,19Z"></path>
                  <circle cx="8" cy="8" r="2"></circle>
                </g>
              </svg>
            </div>

            <div className="v-timeline__items-group">
              <div className="v-timeline__item bg padding-md radius-md shadow-xs">
                <div className="v-timeline__date margin-bottom-sm">
                  <h4>MobileNow</h4>
                  <h5>2015-2017</h5>
                </div>

                <div className="text-component">
                  <h3>BACKEND DEVELOPER</h3>

                  <p>
                    MobileNow is a technical agency, it help companies to build
                    digital Apps, games and softwares.
                  </p>

                  <ul>
                    <li>
                      Design & Build WeChat official account content management
                      SaaS with admin panel.
                    </li>
                    <li>
                      Design & Build required backend services for client
                      projects.
                    </li>
                    <li>
                      Help improve the backend development team productivity
                      with new tech solution.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="v-timeline__section js-v-timeline__section">
            <div
              className="v-timeline__marker bg-primary border border-3 border-bg shadow-xs"
              aria-hidden="true"
            >
              <svg className="icon icon--sm color-white" viewBox="0 0 24 24">
                <title>o-warning</title>
                <g>
                  <path d="M23.707,6.736,17.263.293A1,1,0,0,0,16.556,0H7.444a1,1,0,0,0-.707.293L.293,6.736A1,1,0,0,0,0,7.443v9.114a1,1,0,0,0,.293.707l6.444,6.443A1,1,0,0,0,7.444,24h9.112a1,1,0,0,0,.707-.293l6.444-6.443A1,1,0,0,0,24,16.557V7.443A1,1,0,0,0,23.707,6.736ZM13.645,5,13,14H11l-.608-9ZM12,20a2,2,0,1,1,2-2A2,2,0,0,1,12,20Z"></path>
                </g>
              </svg>
            </div>

            <div className="v-timeline__items-group">
              <div className="v-timeline__item bg padding-md radius-md shadow-xs">
                <div className="v-timeline__date margin-bottom-sm">
                  <h4>Ubisoft Shanghai</h4>
                  <h5>2014-2015</h5>
                </div>

                <div className="text-component">
                  <h3>GAME&PLATFORM DEVELOPER</h3>
                  <p>
                    Ubisoft Shanghai is the publication department of Ubisoft
                    for China.
                  </p>

                  <ul>
                    <li>
                      Build China version game clients with Chinese content and
                      customized shop feature.
                    </li>
                    <li>
                      Build Ubisoft official online game shop and Ubisoft China
                      official website.
                    </li>
                    <li>
                      Generate daily, weekly and monthly reports about KPI of
                      the games in production.
                    </li>
                    <li>
                      Design & Build Ubisoft internal KPI management system.
                    </li>
                  </ul>
                </div>

                {/* <div className="margin-top-md">
                  <a className="btn btn--primary" href="#0">
                    Read More
                  </a>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeTimeLine;
