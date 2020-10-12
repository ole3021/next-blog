import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <a className="card-v6" aria-label="Description of the link">
        <figure className="card-v6__img">
          <img src={post.cover} alt="Post Cover" />
        </figure>

        <div className="card-v6__content">
          <div className="card-v6__label">{post.category}</div>
          <div className="text-component">
            <h3>{post.title}</h3>
          </div>
        </div>

        <div className="card-v6__arrow" aria-hidden="true">
          <svg className="icon" viewBox="0 0 12 12">
            <g
              strokeWidth="1"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="11.5" y1="6" x2="0.5" y2="6"></line>
              <polyline points="7.5 2 11.5 6 7.5 10"></polyline>
            </g>
          </svg>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
