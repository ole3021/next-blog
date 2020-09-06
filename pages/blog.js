import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";
import ArticlePreview3 from "components/articles/article-preview-3";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <ArticlePreview3 />
      </MainLayout>
    </div>
  );
}
