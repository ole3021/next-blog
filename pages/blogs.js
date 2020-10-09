import { NextSeo } from "next-seo";

import PostListItem from "components/PostListItem";
import PostPreview from "components/PostPreview";

export default function Home() {
  return (
    <div>
      <>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <div className=" padding-lg">
          <PostPreview />
          <PostListItem />
          <PostListItem />
          <PostListItem />
        </div>
      </>
    </div>
  );
}
