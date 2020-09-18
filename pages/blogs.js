import { useEffect } from "react";
import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";
import ArticlePreview3 from "components/articles/article-preview-3";
import ArticlePreview4 from "components/articles/article-preview-4";

export default function Blogs() {
  useEffect(async () => {
    // console.log(">>> info", allBlogMetaInfo);
    // fetch("/api/data").then((res) => setState(res.data));
  });

  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <div className=" padding-lg">
          <ArticlePreview4 />
          <ArticlePreview3 />
          <ArticlePreview3 />
          <ArticlePreview3 />
        </div>
      </MainLayout>
    </div>
  );
}
