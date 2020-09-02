import { useEffect } from "react";

const ArticlePreview3 = () => {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/article-preview-3.js"; // 👈 make sure to use the correct path
    frontEnd.id = "article-preview-3-js";
    document.body.appendChild(frontEnd);
  });

  return (
    <a
      class="story-v3 padding-y-md js-story-v3"
      href="#0"
      data-story-img-src="https://codyhouse.co/app/assets/img/article-preview-v3-img-1.jpg"
      data-story-img-align="right"
      data-story-img-offset-x="60px"
      data-story-img-width="30%"
      data-story-img-class="display@lg"
    >
      <div class="grid gap-md">
        <div class="col-3@md col-2@lg">
          <p class="text-sm position-relative z-index-2">
            <time datetime="2020-06-17">June 17, 2020</time>
          </p>
        </div>

        <div class="text-component col-6@md position-relative z-index-2">
          <h1 class="story-v3__title text-xl">
            Apparently we had reached a great height in the atmosphere
          </h1>
          <p class="text-sm color-contrast-higher opacity-50%">
            Looking down into the dark gulf below, I could see a ruddy light
            streaming through a rift in the clouds.
          </p>
        </div>

        <div class="display@md col@md flex@md justify-end" aria-hidden="true">
          <svg
            class="story-v3__icon icon position-relative z-index-2"
            viewBox="0 0 48 48"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="37" y1="14" x2="47" y2="24" />
              <line x1="47" y1="24" x2="37" y2="34" />
              <line x1="47" y1="24" x2="1.5" y2="24" />
            </g>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ArticlePreview3;
