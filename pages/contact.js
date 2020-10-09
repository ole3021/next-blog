import { NextSeo } from "next-seo";

import ContactForm from "components/ContactForm";

export default function Home() {
  return (
    <div>
      <>
        <NextSeo
          title="Ole3021 Blog"
          description="The blog site of Oliver.W know as ole3021"
        />
        <ContactForm />
      </>
    </div>
  );
}
