import { useEffect } from "react";
import {
  RiVipCrownLine,
  RiBookmark3Line,
  RiCodeSSlashLine,
  RiFlaskLine,
  RiFileDownloadLine,
  RiHeartFill,
} from "react-icons/ri";

import Socials3 from "components/contents/socials-3";

const SideNavigation2 = () => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/side-navigation-2.js";
    frontEnd.id = "side-navigation-2-js";
    document.body.appendChild(frontEnd);

    return () => {
      document.getElementById("side-navigation-2-js").remove();
    };
  });

  return (
    <div class="sidenav-v2 sidenav-v2--static js-sidenav-v2 flex flex-column full-height">
      <nav class="sidenav-v2__nav font-smooth" id="sidenav-v2">
        <div class="sidenav-v2__label">
          <span>Navigation</span>
        </div>

        <ul class="sidenav-v2__list grid gap-xxxxs">
          <li>
            <a
              class="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
              href="#0"
            >
              <RiVipCrownLine class="margin-right-xxxs" size="25" />
              <span class="sidenav-v2__link-text">Home</span>
            </a>
          </li>

          <li>
            <a
              class="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
              href="#0"
            >
              <RiBookmark3Line class="margin-right-xxxs" size="25" />
              <span class="sidenav-v2__link-text">Blogs</span>
              <span class="sidenav-v2__counter">
                10 <i class="sr-only">blogs</i>
              </span>
            </a>
          </li>

          <li>
            <a
              class="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
              href="#0"
              aria-current="page"
            >
              <RiCodeSSlashLine class="margin-right-xxxs" size="25" />
              <span class="sidenav-v2__link-text">Projects</span>
              <span class="sidenav-v2__counter">
                12 <i class="sr-only">projects</i>
              </span>
            </a>
          </li>

          <li>
            <a
              class="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
              href="#0"
            >
              <RiFlaskLine class="margin-right-xxxs" size="25" />
              <span class="sidenav-v2__link-text">Experiments</span>
            </a>
          </li>
        </ul>

        <div class="sidenav-v2__label">
          <span>Other</span>
        </div>

        <ul class="sidenav-v2__list grid gap-xxxxs">
          <li>
            <a
              class="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
              href="#0"
            >
              <RiFileDownloadLine class="margin-right-xxxs" size="25" />
              <span class="sidenav-v2__link-text">Resume</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="margin-top-auto padding-y-xs">
        <Socials3 />
        <nav class="offnav__subnav " role="navigation" aria-label="Secondary">
          <ul class="flex flex-column gap-sm flex-row text-xs">
            <li style={{ paddingTop: 3 }}>&copy; 2020 Build with</li>
            <RiHeartFill
              size="21"
              color="red"
              class="beat"
              style={{
                marginLeft: 4,
              }}
            />
            <li style={{ paddingTop: 3, marginLeft: 4 }}>by Oliver.</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNavigation2;
