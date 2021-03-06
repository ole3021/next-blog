const Universities = () => {
  return (
    <section>
      <div className="bg container ">
        <div className="grid gap-md">
          <div className="text-component line-height-lg">
            <h1>Education</h1>
          </div>

          <div className="bg radius-md overflow-hidden">
            <div className=" container radius-md overflow-hidden">
              <div className="text-decoration-none">
                <div className="grid flex-row-reverse">
                  <div className="col-6@md overflow-hidden" aria-hidden="true">
                    <div
                      className="banner__figure width-100%"
                      style={{
                        "background-image": "url('/images/uoy-cover.jpg');",
                      }}
                    ></div>
                  </div>

                  <div className="col-6@md">
                    <div className="text-component v-space-xxs height-100% flex flex-column padding-md">
                      <h3>Master of Software Engineering</h3>
                      <h4>University of York</h4>
                      <p>York, U.K. 2012-2013</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg radius-md overflow-hidden">
            <div className="container radius-md overflow-hidden">
              <div className="grid flex-row-reverse@md">
                <div className="col-6@md overflow-hidden" aria-hidden="true">
                  <div
                    className="banner__figure width-100%"
                    style={{
                      "background-image": "url('/images/gmit-cover.jpg');",
                    }}
                  ></div>
                </div>

                <div className="col-6@md">
                  <div className="text-component v-space-xxs height-100% flex flex-column padding-md">
                    <h3>Bachelor of Software Development</h3>
                    <h4>Galway-Mayo Institute of Technology</h4>
                    <p>Galway, Ireland. 2010-2011</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg radius-md overflow-hidden">
            <div className="container radius-md overflow-hidden">
              <div className="grid flex-row-reverse@md">
                <div className="col-6@md overflow-hidden" aria-hidden="true">
                  <div
                    className="banner__figure width-100%"
                    style={{
                      "background-image": "url('/images/ncu-cover.png');",
                    }}
                  ></div>
                </div>

                <div className="col-6@md">
                  <div className="text-component v-space-xxs height-100% flex flex-column padding-md">
                    <h3>Bachelor of Software Engineering</h3>
                    <h4>Nanchang University</h4>
                    <p>Nanchang, China. 2007-2010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
