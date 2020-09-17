import { NextSeo } from "next-seo";

import MainLayout from "layouts/MainLayout";
import WizardForm from "components/forms/wizard-form";

export default function Home() {
  return (
    <div>
      <MainLayout>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <WizardForm />
      </MainLayout>
    </div>
  );
}
