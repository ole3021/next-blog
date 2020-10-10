const ArticleContent = (props) => {
  const { meta, content } = props;
  //   console.log(">>> meata", meta);
  //   console.log(">>> contet", content);
  return (
    <article class="article text-component">
      <h1>{meta.title}</h1>
      {props.children}
    </article>
  );
};

export default ArticleContent;
