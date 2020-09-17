import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";
import Feature13 from "components/contents/feature-13";
import RelatedArticles from "components/articles/related-articles";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <div className=" padding-lg">
          <Feature13 />
          <RelatedArticles />
        </div>
      </MainLayout>
    </div>
  );
}
