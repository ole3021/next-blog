import ProgressBar from "components/utils/progress-bar";

const Skills = () => {
  return (
    <section className="padding-bottom-xl">
      <div className="container max-width-adaptive-lg">
        <div className="grid gap-md">
          <div className="text-component line-height-lg">
            <h1>Skills</h1>
          </div>
          <div className="col-6 padding-right-xl">
            <div className="flex justify-between">
              <div className="margin-right-md">JavaScript</div>
              <div className="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">TypeScript</div>
              <div className="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">Node.js</div>
              <div className="margin-top-xxs">
                <ProgressBar value={90} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">Flutter</div>
              <div className="margin-top-xxs">
                <ProgressBar value={70} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">Rust</div>
              <div className="margin-top-xxs">
                <ProgressBar value={65} />
              </div>
            </div>
          </div>
          <div className="col-6 padding-left-xl">
            <div className="flex justify-between">
              <div className="margin-right-md">Nest.js</div>
              <div className="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">PostgreSQL</div>
              <div className="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">MongoDB</div>
              <div className="margin-top-xxs">
                <ProgressBar value={90} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">React</div>
              <div className="margin-top-xxs">
                <ProgressBar value={70} />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="margin-right-md">Flutter</div>
              <div className="margin-top-xxs">
                <ProgressBar value={65} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
