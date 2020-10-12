const HomeHero = () => {
  return (
    <section className="position-relative z-index-1 padding-y-lg">
      <div className="container max-width-adaptive-lg">
        <div className="grid gap-md items-center">
          <div className="col-6@md">
            <div className="text-component">
              <h1>Hello World</h1>
              <p className="text-md">
                This is my personal blog site. This is the site i collect all my
                posts, photos, experiments etc. This site still under active
                development, more is coming...
              </p>
            </div>

            {/* <div className="margin-top-sm">
              <div className="flex flex-wrap gap-sm items-center">
                <a href="#0" className="btn btn--primary">
                  Download
                </a>
                <a href="#0" className="color-inherit">
                  Learn more
                </a>
              </div>
            </div> */}
          </div>

          <div className="col-6@md">
            <div className="diamond-grid ">
              <div className="diamond-grid__inner">
                <div className="diamond-grid__item bg-contrast-lower shadow-md">
                  <img
                    className="diamond-grid__img"
                    src="https://codyhouse.co/app/assets/img/diamond-grid-img-1.jpg"
                    alt="Image description"
                  />
                </div>

                <div className="diamond-grid__item bg-contrast-lower shadow-md">
                  <img
                    className="diamond-grid__img"
                    src="https://codyhouse.co/app/assets/img/diamond-grid-img-2.jpg"
                    alt="Image description"
                  />
                </div>

                <div className="diamond-grid__item bg-contrast-lower shadow-md">
                  <img
                    className="diamond-grid__img"
                    src="https://codyhouse.co/app/assets/img/diamond-grid-img-3.jpg"
                    alt="Image description"
                  />
                </div>

                <div className="diamond-grid__item bg-contrast-lower shadow-md">
                  <img
                    className="diamond-grid__img"
                    src="https://codyhouse.co/app/assets/img/diamond-grid-img-4.jpg"
                    alt="Image description"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
