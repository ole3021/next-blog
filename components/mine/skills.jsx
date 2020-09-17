import ProgressBar from "components/utils/progress-bar";

const Skills = () => {
  return (
    <section class="padding-bottom-xl">
      <div class="container max-width-adaptive-lg">
        <div class="grid gap-md">
          <div class="text-component line-height-lg">
            <h1>Skills</h1>
          </div>
          <div class="col-6 padding-right-xl">
            <div class="flex justify-between">
              <div class="margin-right-md">JavaScript</div>
              <div class="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">TypeScript</div>
              <div class="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">Node.js</div>
              <div class="margin-top-xxs">
                <ProgressBar value={90} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">Flutter</div>
              <div class="margin-top-xxs">
                <ProgressBar value={70} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">Rust</div>
              <div class="margin-top-xxs">
                <ProgressBar value={65} />
              </div>
            </div>
          </div>
          <div class="col-6 padding-left-xl">
            <div class="flex justify-between">
              <div class="margin-right-md">Nest.js</div>
              <div class="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">PostgreSQL</div>
              <div class="margin-top-xxs">
                <ProgressBar value={85} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">MongoDB</div>
              <div class="margin-top-xxs">
                <ProgressBar value={90} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">React</div>
              <div class="margin-top-xxs">
                <ProgressBar value={70} />
              </div>
            </div>
            <div class="flex justify-between">
              <div class="margin-right-md">Flutter</div>
              <div class="margin-top-xxs">
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
