import { NextSeo } from "next-seo";

import { getAllPosts } from "libs/posts";

import LastPosts from "components/LastPosts";
import HomeCover from "components/HomeCover";
import HomeHero from "components/HomeHero";
import HomeHobbits from "components/HomeHobbits";

export default function Home({ lastPosts }) {
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
            <LastPosts posts={lastPosts} />
          </div>
        </HomeCover>
      </>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "meta", "category", "tags", "cover"]);

  return {
    props: { lastPosts: allPosts.slice(0, 3) },
  };
}
