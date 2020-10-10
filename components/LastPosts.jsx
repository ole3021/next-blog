import PostCard from "components/PostCard";

const LastPosts = ({ posts }) => {
  return (
    <section className="padding-y-lg">
      <div className="container max-width-adaptive-lg">
        <h1>Latest Blogs</h1>

        <div className="grid gap-md">
          {posts.map((post, index) => (
            <div className="padding-y-lg col-6@md col-4@xl" key={index}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastPosts;
