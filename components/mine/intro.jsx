import {
  RiCellphoneLine,
  RiWechat2Line,
  RiMailLine,
  RiMapPinLine,
} from "react-icons/ri";

const Intro = () => {
  return (
    <section className="padding-bottom-xl">
      <div className="container max-width-adaptive-xl">
        <div className="grid gap-md">
          <div className="text-component line-height-lg v-space-md col-7@md">
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
          <div className="text-component line-height-lg v-space-md col-5@md">
            <h1>Contacts</h1>
            <div className="margin-bottom-xs flex">
              <RiCellphoneLine className="margin-right-xxs" size="25" />
              <div>
                +86 &#49;&#56;&#51;&#48;&#50;&#49;&#50;&#51;&#48;&#50;&#49;
              </div>
            </div>
            <div className="margin-bottom-xs flex">
              <RiMailLine className="margin-right-xxs" size="25" />
              <div>ole&#51;&#48;&#50;&#49;@gmail.com</div>
            </div>
            <div className="margin-bottom-xs flex">
              <RiMapPinLine className="margin-right-xxs" size="25" />
              <div>Shanghai,P.R.China</div>
            </div>
            <div className="margin-bottom-xs flex">
              <RiWechat2Line className="margin-right-xxs" size="25" />
              <div>ole3021</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
