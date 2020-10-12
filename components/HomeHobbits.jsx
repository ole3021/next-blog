const HomeHobbits = () => {
  return (
    <section className="feature-v7 padding-bottom-xl">
      <div className="container max-width-adaptive-lg">
        <div className="grid gap-md">
          <div className="text-component line-height-lg">
            <h1>Hobbits</h1>
          </div>
          <div className="col-6@md">
            <div className="feature-v7__item flex gap-sm">
              <figure>
                <img src="/images/coding.png" alt="coding" />
              </figure>

              <div className="text-component">
                <h4>Software Development</h4>
                <p>
                  Good software should be tools that can improve efficiency and
                  loved by users. Beside this it should have strong internal
                  qualities (Reliability, Availability and Maintainability).
                </p>
              </div>
            </div>
          </div>

          <div className="col-6@md">
            <div className="feature-v7__item flex gap-sm">
              <figure>
                <img src="/images/game.png" alt="game" />
              </figure>

              <div className="text-component">
                <h4>Video Games</h4>
                <p>
                  Game are the new carrier for content like books and movies.
                  Great games should have topics and thoughs includes
                  entertaining and playability.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6@md">
            <div className="feature-v7__item flex gap-sm">
              <figure>
                <img src="/images/camera.png" alt="camera" />
              </figure>

              <div className="text-component">
                <h4>Photographing</h4>
                <p>
                  Photos shows beauty of the world, with different angle and
                  control of light, all the beauty can be record and saved.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6@md">
            <div className="feature-v7__item flex gap-sm">
              <figure>
                <img src="/images/outdoor.png" alt="outdoor" />
              </figure>

              <div className="text-component">
                <h4>Outdoors</h4>
                <p>
                  City Life is not the right way to live, Hiking, Cycling, and
                  Driving in nature is much better to improve ourself physically
                  and mentally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHobbits;
