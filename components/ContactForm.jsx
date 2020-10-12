import { useEffect } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
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
      className="wiz-form bg height-100vh js-wiz-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="wiz-form__body">
        <fieldset className="wiz-form__step js-wiz-form__step">
          <div className="container max-width-xs">
            <header className="padding-top-md">
              <p className="text-sm color-contrast-medium line-height-xs">
                Step 1 <span className="hide@md">of 3</span>
              </p>
              <h1 className="text-xl">Account Info</h1>
            </header>

            <div className="padding-y-md">
              <div className="grid gap-sm">
                <div className="col-6@md">
                  <label
                    className="form-label margin-bottom-xxs"
                    htmlFor="input-name"
                  >
                    Name
                  </label>
                  <input
                    className="form-control width-100%"
                    type="text"
                    name="name"
                    ref={register}
                  />
                </div>

                <div className="col-6@md">
                  <label
                    className="form-label margin-bottom-xxs"
                    htmlFor="input-email"
                  >
                    Email
                  </label>
                  <input
                    className="form-control width-100%"
                    type="email"
                    name="email"
                    ref={register}
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="wiz-form__step wiz-form__step--next js-wiz-form__step">
          <div className="container max-width-xs">
            <header className="padding-top-md">
              <p className="text-sm color-contrast-medium line-height-xs">
                Step 2 <span className="hide@md">of 3</span>
              </p>
              <h1 className="text-xl">Product</h1>
            </header>
            <div className="padding-y-md">fdsfds</div>
          </div>
        </fieldset>

        <fieldset className="wiz-form__step wiz-form__step--next js-wiz-form__step">
          <div className="container max-width-xs">
            <header className="padding-top-md">
              <p className="text-sm color-contrast-medium line-height-xs">
                Step 3 <span className="hide@md">of 3</span>
              </p>
              <h1 className="text-xl">Contact</h1>
            </header>

            <div className="padding-y-md">
              <p className="margin-bottom-sm">Select a contact method:</p>

              <div className="choice-btns gap-xxs js-choice-btns">
                <div className="choice-btn padding-sm js-choice-btn">
                  <div className="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-1"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-1">
                      Phone call
                    </label>
                  </div>

                  <div className="choice-btn__grid" aria-hidden="true">
                    <div className="choice-btn__input choice-btn__input--checkbox">
                      <svg className="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p className="color-contrast-higher font-bold">
                      Phone call
                    </p>
                  </div>
                </div>

                <div className="choice-btn padding-sm js-choice-btn">
                  <div className="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-2"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-2">
                      Video call
                    </label>
                  </div>

                  <div className="choice-btn__grid" aria-hidden="true">
                    <div className="choice-btn__input choice-btn__input--checkbox">
                      <svg className="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p className="color-contrast-higher font-bold">
                      Video call
                    </p>
                  </div>
                </div>

                <div className="choice-btn padding-sm js-choice-btn">
                  <div className="choice-btn__fallback">
                    <input
                      name="wiz-contact-check-button-3"
                      type="checkbox"
                      ref={register}
                    />
                    <label htmlFor="wiz-contact-check-button-3">Email</label>
                  </div>

                  <div className="choice-btn__grid" aria-hidden="true">
                    <div className="choice-btn__input choice-btn__input--checkbox">
                      <svg className="icon" viewBox="0 0 16 16">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2 8l4 4 8-8"
                        />
                      </svg>
                    </div>

                    <p className="color-contrast-higher font-bold">Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </div>

      <footer className="wiz-form__footer bg padding-y-sm shadow-md">
        <div className="container">
          <div className="grid gap-sm items-center">
            <div className="flex col col-3@md">
              <a
                className="btn btn--subtle flex-grow flex-grow-0@md js-wiz-form__prev"
                href="#0"
              >
                &larr; Back
              </a>
            </div>

            <div className="display@md col-6@md">
              <div
                className="steps-v2 max-width-xs margin-x-auto js-wiz-form__step-indicator"
                style={{
                  "--step-v2-current-step": 1,
                }}
              >
                <p className="text-sm color-contrast-medium margin-bottom-xs">
                  Step <span className="js-steps-v2__current-step">1</span> of{" "}
                  <span className="js-steps-v2__tot-steps">3</span>
                </p>

                <div className="steps-v2__indicator" aria-hidden="true"></div>
              </div>
            </div>

            <div className="flex justify-end@md col col-3@md">
              <a
                className="btn btn--primary flex-grow flex-grow-0@md js-wiz-form__next"
                href="#0"
              >
                Next &rarr;
              </a>

              <button
                type="submit"
                className="btn btn--primary flex-grow flex-grow-0@md js-wiz-form__submit"
              >
                <svg
                  className="icon icon--xs margin-right-xxs"
                  viewBox="0 0 12 12"
                >
                  <title>check</title>
                  <polyline
                    points="0.5 7.5 3.5 10.5 11.5 1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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

export default ContactForm;
