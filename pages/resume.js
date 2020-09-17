import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";
import RevealingHero from "components/contents/revealing-hero";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <RevealingHero />
      </MainLayout>
    </div>
  );
}
