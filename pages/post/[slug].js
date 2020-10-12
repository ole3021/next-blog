import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function PostTemplate({ content, data, slug }) {
  const frontmatter = data;
  return (
    <div className="position-relative z-index-1 padding-y-md">
      <div className="container max-width-adaptive-lg">
        <article className="bg padding-md markdown-body">
          <h1>{frontmatter.title}</h1>
          <br />
          <ReactMarkdown source={content} />
        </article>
      </div>
    </div>
  );
}

{
  /* <div className=" padding-lg">
      <article className="article text-component">
        <h1>{frontmatter.title}</h1>
        
      </article>
    </div> */
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../posts/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to the component props
  return { ...data };
};
