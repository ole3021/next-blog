import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  RiVipCrownLine,
  RiBookmark3Line,
  RiCodeSSlashLine,
  RiFlaskLine,
  RiFileDownloadLine,
  RiHeartFill,
  RiMailOpenLine,
  RiImage2Line,
} from "react-icons/ri";

import Socials3 from "components/contents/socials-3";

const SideNavigation2 = ({ href }) => {
  const router = useRouter();

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
    <div className="sidenav-v2 sidenav-v2--static js-sidenav-v2 flex flex-column full-height">
      <nav className="sidenav-v2__nav font-smooth" id="sidenav-v2">
        <div className="sidenav-v2__label">
          <span>Navigation</span>
        </div>

        <ul className="sidenav-v2__list grid gap-xxxxs">
          <li>
            <Link href="/">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/" ? "page" : ""}
              >
                <RiVipCrownLine className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Home</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/blogs">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/blogs" ? "page" : ""}
              >
                <RiBookmark3Line className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Blogs</span>
                <span className="sidenav-v2__counter">
                  10 <i className="sr-only">blogs</i>
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/projects" ? "page" : ""}
              >
                <RiCodeSSlashLine className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Projects</span>
                <span className="sidenav-v2__counter">
                  12 <i className="sr-only">projects</i>
                </span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/experiments">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/experiments" ? "page" : ""}
              >
                <RiFlaskLine className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Experiments</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/photos">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/photos" ? "page" : ""}
              >
                <RiImage2Line className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Photos</span>
              </a>
            </Link>
          </li>
        </ul>

        <div className="sidenav-v2__label">
          <span>Other</span>
        </div>

        <ul className="sidenav-v2__list grid gap-xxxxs">
          <li>
            <Link href="/resume">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/resume" ? "page" : ""}
              >
                <RiFileDownloadLine className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Resume</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a
                className="sidenav-v2__link js-sidenav-v2__link js-tab-focus"
                aria-current={router.pathname === "/contact" ? "page" : ""}
              >
                <RiMailOpenLine className="margin-right-xxxs" size="25" />
                <span className="sidenav-v2__link-text">Contact</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="margin-top-auto padding-y-xs">
        <Socials3 />
        <nav
          className="offnav__subnav "
          role="navigation"
          aria-label="Secondary"
        >
          <ul className="flex flex-column gap-sm flex-row text-xs">
            <li style={{ paddingTop: 3 }}>&copy; 2020 Build with</li>
            <RiHeartFill
              size="21"
              color="red"
              className="beat"
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
