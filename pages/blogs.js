import { NextSeo } from "next-seo";

import { getAllPosts } from "libs/posts";

import PostPreview from "components/PostPreview";
import PostListItem from "components/PostListItem";

export default function Home({ allPosts }) {
  return (
    <div>
      <>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <div className=" padding-lg">
          <PostPreview post={allPosts[0]} />
          {allPosts.slice(1).map((post, index) => (
            <PostListItem post={post} key={index} />
          ))}
        </div>
      </>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "meta",
    "category",
    "tags",
    "cover",
    "date",
  ]);

  return {
    props: { allPosts },
  };
}
