const HomeHero = () => {
  return (
    <section className="position-relative z-index-1 padding-y-lg">
      <div className="container max-width-adaptive-lg">
        <div className="grid gap-md items-center">
          <div className="col-6@md">
            <div className="text-component">
              <p className="text-sm color-contrast-medium">Geek</p>
              <h1>Hello World</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                rem neque doloribus impedit explicabo minus laborum cupiditate
                atque esse consectetur.
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
