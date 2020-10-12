import { useEffect } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

import { getAllPhotoss } from "libs/photos";

export default function Home({ allPhotos }) {
  useEffect(() => {
    let frontEnd = document.createElement("script");
    frontEnd.src = "/scripts/photos.js";
    frontEnd.id = "photos-js";
    document.body.appendChild(frontEnd);
    let imageZoom = document.createElement("script");
    imageZoom.src = "/scripts/image-zoom.js";
    imageZoom.id = "image-zoom-js";
    document.body.appendChild(imageZoom);

    return () => {
      document.getElementById("photos-js").remove();
      document.getElementById("image-zoom-js").remove();
    };
  });

  return (
    <div>
      <NextSeo
        title="Ole3021 Blog"
        description="The blog site of Oliver.W know as ole3021"
      />
      <div className="container max-width-adaptive-lg">
        <div className="masonry js-masonry">
          <div className="masonry__loader" aria-hidden="true">
            <svg
              className="icon icon--md icon--is-spinning"
              viewBox="0 0 32 32"
            >
              <g
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
              >
                <circle cx="16" cy="16" r="15" opacity="0.4"></circle>
                <path d="M16,1A15,15,0,0,1,31,16" strokeLinecap="butt"></path>
              </g>
            </svg>
          </div>

          <ul className="masonry__list js-masonry__list">
            {allPhotos.map((photo, index) => (
              <figure
                className="image-zoom js-image-zoom masonry__item js-masonry__item"
                key={index}
              >
                <img
                  className="image-zoom__preview js-image-zoom__preview block width-100%"
                  src={photo.path}
                />
              </figure>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPhotos = getAllPhotoss();

  return {
    props: { allPhotos },
  };
}
