import Card6 from "components/contents/card-6";

const RelatedArticles = () => {
  return (
    <section class="padding-y-lg">
      <div class="container max-width-adaptive-lg">
        <h1>My Latest Blogs</h1>

        <div class="grid gap-md">
          <div class="padding-y-lg col-6@md col-4@xl">
            <Card6 />
          </div>
          <div class="padding-y-lg col-6@md col-4@xl">
            <Card6 />
          </div>
          <div class="padding-y-lg col-6@md col-4@xl">
            <Card6 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
