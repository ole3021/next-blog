const PostPreview = () => {
  return (
    <article className="story-v4 padding-y-lg">
      <div className="container max-width-adaptive-md margin-bottom-lg">
        <div className="margin-bottom-md margin-bottom-lg@md">
          <h1 className="text-xxxl text-xxxxl@lg">
            <a className="story-v4__title" href="#0">
              Apparently we had reached a great height
            </a>
          </h1>
        </div>

        <div className="grid gap-md">
          <div className="col-3@md col-4@lg">
            <dl className="text-sm">
              <dt>
                <strong>Date</strong>
              </dt>
              <dd>
                <time dateTime="2020-06-17">June 17, 2020</time>
              </dd>

              <dt className="margin-top-sm">
                <strong>Author</strong>
              </dt>
              <dd>
                <a className="color-inherit" href="#0" rel="author">
                  Olivia Gribben
                </a>
              </dd>
            </dl>
          </div>

          <div className="text-component v-space-md line-height-lg col-9@md col-8@lg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
              ullam accusamus voluptate! Accusantium aperiam totam voluptatum at
              fugiat doloribus odit dolore fuga. Eum aliquam qui beatae
              recusandae, laborum explicabo nihil neque esse sequi cumque hic
              necessitatibus? Quam quaerat esse voluptatum.
            </p>

            <p>
              <a className="link-fx-1 color-contrast-higher" href="#0">
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
            </p>
          </div>
        </div>
      </div>

      <div className="container max-width-adaptive-lg">
        <a className="story-v4__img-link" href="#0">
          <img
            src="https://codyhouse.co/app/assets/img/article-preview-v4-img-1.jpg"
            alt="Image description"
          />
        </a>
      </div>
    </article>
  );
};

export default PostPreview;
