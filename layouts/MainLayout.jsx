import { useEffect } from "react";
// import { GlobalStateContext } from "context/GlobalContextProvider";

import SideNavigation2 from "components/navigations/side-navigation-2";

const MainLayout = (props) => {
  //   const state = useContext(GlobalStateContext);
  // const { navigation, meta, contact } = props;

  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/main-layout.js";
    frontEnd.id = "main-layout-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("main-layout-js").remove();
    };
  });

  return (
    <>
      <div className="padding-component hide@md no-js:is-hidden">
        <button
          className="btn btn--primary"
          aria-controls="sidebar"
          style={{
            position: "fixed",
            zIndex: 3,
          }}
        >
          Show sidebar
        </button>
      </div>

      <div className="flex@md">
        <aside
          className="sidebar sidebar--static@md js-sidebar"
          data-static-classname="position-relative z-index-2 flex-grow max-width-xxxxs border-right"
          id="sidebar"
          aria-labelledby="sidebarTitle"
          style={{
            width: 320,
          }}
        >
          <div
            className="sidebar__panel full-height flex flex-column"
            style={{
              position: "fixed",
              width: 320,
            }}
          >
            <header className="sidebar__header z-index-2">
              <h1 className="text-md text-truncate" id="sidebarTitle">
                Sidebar title
              </h1>

              <button className="reset sidebar__close-btn js-sidebar__close-btn js-tab-focus">
                <svg className="icon" viewBox="0 0 16 16">
                  <title>Close panel</title>
                  <g
                    strokeWidth="1"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  >
                    <line x1="13.5" y1="2.5" x2="2.5" y2="13.5"></line>
                    <line x1="2.5" y1="2.5" x2="13.5" y2="13.5"></line>
                  </g>
                </svg>
              </button>
            </header>

            <div className="position-relative z-index-2 full-height">
              <div className="position-relative padding-md full-height">
                <SideNavigation2 />
              </div>
            </div>
          </div>
        </aside>

        <main className="position-relative z-index-1 flex-grow height-100vh">
          {props.children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
