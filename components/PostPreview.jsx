import Link from "next/link";

const PostPreview = ({ post }) => {
  return (
    <article className="story-v4 padding-y-lg">
      <div className="container max-width-adaptive-md margin-bottom-lg">
        <div className="margin-bottom-md margin-bottom-lg@md">
          <h1 className="text-xxxl text-xxxxl@lg">
            <Link href={`/post/${post.slug}`}>
              <a className="story-v4__title">{post.title}</a>
            </Link>
          </h1>
        </div>

        <div className="grid gap-md">
          <div className="col-3@md col-4@lg">
            <dl className="text-sm">
              <dt>
                <strong>Date</strong>
              </dt>
              <dd>
                <time dateTime={post.date}>{post.date}</time>
              </dd>

              <dt className="margin-top-sm">
                <strong>Tags</strong>
              </dt>
              <dd>
                <p>{post.tags.map((tag) => tag.toUpperCase()).join(",")}</p>
              </dd>
            </dl>
          </div>

          <div className="text-component v-space-md line-height-lg col-9@md col-8@lg">
            <p>{post.meta}</p>

            <p>
              <Link href={`/post/${post.slug}`}>
                <a className="link-fx-1 color-contrast-higher">
                  <span>Read more</span>
                  <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="16" cy="16" r="15.5" />
                      <line x1="10" y1="18" x2="16" y2="12" />
                      <line x1="16" y1="12" x2="22" y2="18" />
                    </g>
                  </svg>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="container max-width-adaptive-lg">
        <Link href={`/post/${post.slug}`}>
          <a className="story-v4__img-link">
            <img src={post.cover} alt="Post Cover" />
          </a>
        </Link>
      </div>
    </article>
  );
};

export default PostPreview;
