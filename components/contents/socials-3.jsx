import {
  RiGithubLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiWechat2Line,
} from "react-icons/ri";

import Tooltip from "components/utils/tooltip";

const Socials3 = () => {
  return (
    <section class="socials-v3 padding-y-xs">
      <div class="container max-width-lg">
        <ul class="socials-v3__btns">
          <li>
            <Tooltip class="socials-v3__btn" tip="ole3021">
              <a href="#" class="socials-v3__btn">
                <RiWechat2Line size="25" />
              </a>
            </Tooltip>
          </li>

          <li>
            <a
              href="https://twitter.com/ole3021"
              target="_blank"
              class="socials-v3__btn"
            >
              <RiTwitterLine size="25" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/ole3021"
              target="_blank"
              class="socials-v3__btn"
            >
              <RiGithubLine size="25" />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ole3021/"
              target="_blank"
              class="socials-v3__btn"
            >
              <RiLinkedinLine size="25" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Socials3;
