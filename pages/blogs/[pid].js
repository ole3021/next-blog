import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import MainLayout from "layouts/MainLayout";
import ArticleContent from "components/articles/article-content";

export default function BlogPost() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <ArticleContent meta={{ title: "test" }}>
          <h1>ffdsf</h1>
        </ArticleContent>
      </MainLayout>
    </div>
  );
}
