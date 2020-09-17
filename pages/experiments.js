import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        ....
      </MainLayout>
    </div>
  );
}
