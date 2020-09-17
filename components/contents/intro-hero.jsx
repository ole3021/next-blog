const IntroHero = () => {
  return (
    <section
      class="diagonal-section-bottom bg-contrast-lower"
      style={{
        "background-image":
          "url('https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=800&q=80')",
      }}
    >
      <div class="container max-width-adaptive-sm padding-y-xxl">
        <div class="text-center">
          <div class="text-sm opacity-60% margin-bottom-xxs">
            This is a Label
          </div>

          <div class="text-component margin-bottom-sm">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              vero aliquam, natus quae architecto hic quod!
            </p>
          </div>

          <div class="flex flex-wrap flex-center gap-sm">
            <a href="#0" class="btn btn--primary">
              Download
            </a>
            <a href="#0" class="color-inherit">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroHero;
