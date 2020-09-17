const IntroHero = () => {
  return (
    <section
      className="diagonal-section-bottom bg-contrast-lower"
      style={{
        "background-image":
          "url('https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&q=80')",
      }}
    >
      <div className="container max-width-adaptive-sm padding-y-xxl">
        <div className="text-center">
          <div className="text-sm opacity-60% margin-bottom-xxs">
            This is a Label
          </div>

          <div className="text-component margin-bottom-sm">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              vero aliquam, natus quae architecto hic quod!
            </p>
          </div>

          <div className="flex flex-wrap flex-center gap-sm">
            <a href="#0" className="btn btn--primary">
              Download
            </a>
            <a href="#0" className="color-inherit">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
