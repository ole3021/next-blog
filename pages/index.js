import { NextSeo } from "next-seo";

import Feature12 from "components/features/feature-12";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Ole3021 Blog"
        description="The blog site of Oliver.W know as ole3021"
      />
      <Feature12 />
    </div>
  );
}
