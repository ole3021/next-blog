import PostCard from "components/PostCard";

const LastPosts = () => {
  return (
    <section className="padding-y-lg">
      <div className="container max-width-adaptive-lg">
        <h1>My Latest Blogs</h1>

        <div className="grid gap-md">
          <div className="padding-y-lg col-6@md col-4@xl">
            <PostCard />
          </div>
          <div className="padding-y-lg col-6@md col-4@xl">
            <PostCard />
          </div>
          <div className="padding-y-lg col-6@md col-4@xl">
            <PostCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastPosts;
