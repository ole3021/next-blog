import { NextSeo } from "next-seo";

import ArticlePreview3 from "components/articles/article-preview-3.jsx";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Ole3021 Blog"
        description="The blog site of Oliver.W know as ole3021"
      />
      <ArticlePreview3 />
    </div>
  );
}
