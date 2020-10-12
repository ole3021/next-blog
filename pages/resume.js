import { NextSeo } from "next-seo";

import ResumeIntro from "components/ResumeIntro";
import ResumeSkills from "components/ResumeSkills";
import ResumeUnivs from "components/ResumeUnivs";
import ResumeTimeLine from "components/ResumeTimeLine";

export default function Home() {
  return (
    <div className=" padding-lg">
      <NextSeo
        title="Ole3021 Blog"
        description="The blog site of Oliver.W know as ole3021"
      />
      <ResumeIntro />
      <ResumeSkills />
      <ResumeUnivs />
      <ResumeTimeLine />
    </div>
  );
}
