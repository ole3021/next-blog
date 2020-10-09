import { NextSeo } from "next-seo";

// import Feature13 from "components/contents/feature-13";
import LastPosts from "components/LastPosts";
import HomeCover from "components/HomeCover";
import HomeHero from "components/HomeHero";
import HomeHobbits from "components/HomeHobbits";

export default function Home() {
  return (
    <div>
      <>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <HomeCover>
          <div className=" padding-lg">
            <HomeHero />
            <HomeHobbits />
            <LastPosts />
          </div>
        </HomeCover>
      </>
    </div>
  );
}
