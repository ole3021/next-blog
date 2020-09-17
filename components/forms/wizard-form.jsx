import { useEffect } from "react";
import { useForm } from "react-hook-form";

const WizardForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    let choiceButton = document.createElement("script");
    choiceButton.src = "/scripts/choice-buttons.js";
    choiceButton.id = "choice-buttons-js";
    document.body.appendChild(choiceButton);
    let wizardForm = document.createElement("script");
    wizardForm.src = "/scripts/wizard-form.js";
    wizardForm.id = "wizard-form-js";
    document.body.appendChild(wizardForm);

    return () => {
      document.getElementById("choice-buttons-js").remove();
      document.getElementById("wizard-form-js").remove();
    };
  });

  return (
    <form
      class="wiz-form bg height-100vh js-wiz-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div class="wiz-form__body">
        <fieldset class="wiz-form__step js-wiz-form__step">
          <div class="container max-width-xs">
            <header class="padding-top-md">
              <p class="text-sm color-contrast-medium line-height-xs">
                Step 1 <span class="hide@md">of 3</span>
              </p>
              <h1 class="text-xl">Account Info</h1>
            </header>

            <div class="padding-y-md">
              <div class="grid gap-sm">
                <div class="col-6@md">
                  <label
                    class="form-label margin-bottom-xxs"
                    htmlFor="input-name"
                  >
                    Name
                  </label>
                  <input
                    class="form-control width-100%"
                    type="text"
                    name="name"
                    ref={register}
                  />
                </div>

                <div class="col-6@md">
                  <label
                    class="form-label margin-bottom-xxs"
                    htmlFor="input-email"
                  >
                    Email
                  </label>
                  <input
                    class="form-control width-100%"
                    type="email"
                    name="email"
                    ref={register}
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset class="wiz-form__step wiz-form__step--next js-wiz-form__step">
          <div class="container max-width-xs">
            <header class="padding-top-md">
              <p class="text-sm color-contrast-medium line-height-xs">
                Step 2 <span class="hide@md">of 3</span>
              </p>
              <h1 class="text-xl">Product</h1>
            </header>
            <div class="padding-y-md">fdsfds</div>
          </div>
        </fieldset>

        <fieldset class="wiz-form__step wiz-form__step--next js-wiz-form__step">
          <div class="container max-width-xs">
            <header class="padding-top-md">
              <p class="text-sm color-contrast-medium line-height-xs">
                Step 3 <span class="hide@md">of 3</span>
              </p>
              <h1 class="text-xl">Contact</h1>
            </header>

            <div class="padding-y-md">
              <p class="margin-bottom-sm">Select a contact method:</p>

              <div class="choice-btns gap-xxs js-choice-btns">
                <div class="choice-btn padding-sm js-choice-btn">
                  <div class="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-1"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-1">
                      Phone call
                    </label>
                  </div>

                  <div class="choice-btn__grid" aria-hidden="true">
                    <div class="choice-btn__input choice-btn__input--checkbox">
                      <svg class="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p class="color-contrast-higher font-bold">Phone call</p>
                  </div>
                </div>

                <div class="choice-btn padding-sm js-choice-btn">
                  <div class="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-2"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-2">
                      Video call
                    </label>
                  </div>

                  <div class="choice-btn__grid" aria-hidden="true">
                    <div class="choice-btn__input choice-btn__input--checkbox">
                      <svg class="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p class="color-contrast-higher font-bold">Video call</p>
                  </div>
                </div>

                <div class="choice-btn padding-sm js-choice-btn">
                  <div class="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-3"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-3">Email</label>
                  </div>

                  <div class="choice-btn__grid" aria-hidden="true">
                    <div class="choice-btn__input choice-btn__input--checkbox">
                      <svg class="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p class="color-contrast-higher font-bold">Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <footer class="wiz-form__footer bg padding-y-sm shadow-md">
        <div class="container">
          <div class="grid gap-sm items-center">
            <div class="flex col col-3@md">
              <a
                class="btn btn--subtle flex-grow flex-grow-0@md js-wiz-form__prev"
                href="#0"
              >
                &larr; Back
              </a>
            </div>

            <div class="display@md col-6@md">
              <div
                class="steps-v2 max-width-xs margin-x-auto js-wiz-form__step-indicator"
                style={{
                  "--step-v2-current-step": 1,
                }}
              >
                <p class="text-sm color-contrast-medium margin-bottom-xs">
                  Step <span class="js-steps-v2__current-step">1</span> of{" "}
                  <span class="js-steps-v2__tot-steps">3</span>
                </p>

                <div class="steps-v2__indicator" aria-hidden="true"></div>
              </div>
            </div>

            <div class="flex justify-end@md col col-3@md">
              <a
                class="btn btn--primary flex-grow flex-grow-0@md js-wiz-form__next"
                href="#0"
              >
                Next &rarr;
              </a>

              <button
                type="submit"
                class="btn btn--primary flex-grow flex-grow-0@md js-wiz-form__submit"
              >
                <svg class="icon icon--xs margin-right-xxs" viewBox="0 0 12 12">
                  <title>check</title>
                  <polyline
                    points="0.5 7.5 3.5 10.5 11.5 1.5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></polyline>
                </svg>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </form>
  );
};

export default WizardForm;
