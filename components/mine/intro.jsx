import {
  RiCellphoneLine,
  RiWechat2Line,
  RiMailLine,
  RiMapPinLine,
} from "react-icons/ri";

const Intro = () => {
  return (
    <section class="padding-bottom-xl">
      <div class="container max-width-adaptive-xl">
        <div class="grid gap-md">
          <div class="text-component line-height-lg v-space-md col-7@md">
            <h1>Profile</h1>
            <p>
              I have been working as Software Engineering/Architect for over 5
              years in Web development. I have helped Hilton to build and
              improve the whole new API system in China, Designed and developed
              software for top companies. My strength is understanding
              requirements and solve it with good architect software. I
              passionate about solving problems efficiently with new
              technologies and methods. I love to working with people who cares
              about users experience, and internal values of software.
            </p>
          </div>
          <div class="text-component line-height-lg v-space-md col-5@md">
            <h1>Contacts</h1>
            <div class="margin-bottom-xs flex">
              <RiCellphoneLine class="margin-right-xxs" size="25" />
              <div>
                +86 &#49;&#56;&#51;&#48;&#50;&#49;&#50;&#51;&#48;&#50;&#49;
              </div>
            </div>
            <div class="margin-bottom-xs flex">
              <RiMailLine class="margin-right-xxs" size="25" />
              <div>ole&#51;&#48;&#50;&#49;@gmail.com</div>
            </div>
            <div class="margin-bottom-xs flex">
              <RiMapPinLine class="margin-right-xxs" size="25" />
              <div>Shanghai,P.R.China</div>
            </div>
            <div class="margin-bottom-xs flex">
              <RiWechat2Line class="margin-right-xxs" size="25" />
              <div>ole3021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
