import { useState } from "react";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import FormStep3 from "./FormSteps/FormStep3";
import FormStep4 from "./FormSteps/FormStep4";
import FormSubmitSuccess from "./FormSubmitSuccess";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

function App() {
    const [formStepNum, setFormStepNum] = useState(1);
    const [planPeriod, setPlanPeriod] = useState("monthly");

    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors, isSubmitSuccessful },
        getFieldState,
        watch,
        clearErrors,
    } = useForm({
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            plan: "",
            add_on: [],
        },
        mode: "onBlur",
    });

    const [planValue, addOnValue] = watch(["plan", "add_on"]);

    // handler to change plan period and update values accordingly
    function changePlanPeriod() {
        if (planValue) {
            const planValueAsObj = JSON.parse(planValue);
            planValueAsObj.price =
                planPeriod === "monthly"
                    ? planValueAsObj.price * 10
                    : planValueAsObj.price / 10;

            setValue("plan", JSON.stringify(planValueAsObj));
        }

        if (addOnValue.length > 0) {
            const newAddOnValue = addOnValue.map((addOn) => {
                const addOnAsObj = JSON.parse(addOn);
                addOnAsObj.price =
                    planPeriod === "monthly"
                        ? addOnAsObj.price * 10
                        : addOnAsObj.price / 10;

                return JSON.stringify(addOnAsObj);
            });

            setValue("add_on", newAddOnValue);
        }

        setPlanPeriod((prevPlanPeriod) => {
            if (prevPlanPeriod === "monthly") {
                return "yearly";
            }
            return "monthly";
        });
    }

    // handler to go to form's next step and validate current step
    async function handleFormNextStepChange() {
        const { isTouched: nameTouched } = getFieldState("name");
        const { isTouched: emailTouched } = getFieldState("email");
        const { isTouched: mobileTouched } = getFieldState("mobile");
        const { isTouched: planTouched } = getFieldState("plan");

        if (
            formStepNum === 1 &&
            (!nameTouched || !emailTouched || !mobileTouched)
        ) {
            await trigger();
            return;
        }

        if (formStepNum === 2 && !planTouched) {
            await trigger();
            return;
        }

        if (isEmpty(errors)) {
            setFormStepNum((prevStepNum) => ++prevStepNum);
        }
    }

    // handler to go to form's previous step
    function handleFormPreviousStepChange() {
        setFormStepNum((prevStepNum) => --prevStepNum);
    }

    // submit handler
    function onSubmit(data) {
        // console.log(data);
        return;
    }

    return (
        <>
            <div className="md:mb-16 md:p-4 md:min-h-[37.5rem] md:grid grid-cols-[1fr_2fr] gap-4 md:bg-white md:rounded-xl md:shadow-lg shadow-gray-2">
                <aside className="md:px-8 md:py-10 py-8 h-[10.75rem] md:h-auto bg-[url('./assets/bg-sidebar-mobile.svg')] md:bg-[url('./assets/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center md:rounded-lg">
                    <ol className="grid grid-cols-[repeat(4,_max-content)] md:grid-cols-1 justify-center gap-4 md:gap-6">
                        <li className="md:grid md:grid-cols-[max-content_1fr] md:gap-4 md:items-center">
                            <span
                                className={`grid justify-center items-center size-8 text-xs font-bold border rounded-full ${
                                    formStepNum === 1
                                        ? "border-light-blue bg-light-blue text-marine-blue"
                                        : "border-gray-3 text-gray-3"
                                }`}
                                aria-current={
                                    formStepNum === 1 ? "step" : "false"
                                }
                                aria-describedby="step-1"
                            >
                                1
                            </span>
                            <p
                                id="step-1"
                                className="hidden md:block uppercase leading-1.2"
                            >
                                <span className="mb-1 block text-xs text-gray-1">
                                    Step 1
                                </span>
                                <span className="block text-sm text-gray-3 font-medium tracking-wider">
                                    Your info
                                </span>
                            </p>
                        </li>
                        <li className="md:grid md:grid-cols-[max-content_1fr] md:gap-4 md:items-center">
                            <span
                                className={`grid justify-center items-center size-8 text-xs font-bold border rounded-full ${
                                    formStepNum === 2
                                        ? "border-light-blue bg-light-blue text-marine-blue"
                                        : "border-gray-3 text-gray-3"
                                }`}
                                aria-current={
                                    formStepNum === 2 ? "step" : "false"
                                }
                                aria-describedby="step-2"
                            >
                                2
                            </span>
                            <p
                                id="step-2"
                                className="hidden md:block uppercase leading-1.2"
                            >
                                <span className="mb-1 block text-xs text-gray-1">
                                    Step 2
                                </span>
                                <span className="block text-sm text-gray-3 font-medium tracking-wider">
                                    Select plan
                                </span>
                            </p>
                        </li>
                        <li className="md:grid md:grid-cols-[max-content_1fr] md:gap-4 md:items-center">
                            <span
                                className={`grid justify-center items-center size-8 text-xs font-bold border rounded-full ${
                                    formStepNum === 3
                                        ? "border-light-blue bg-light-blue text-marine-blue"
                                        : "border-gray-3 text-gray-3"
                                }`}
                                aria-current={
                                    formStepNum === 3 ? "step" : "false"
                                }
                                aria-describedby="step-3"
                            >
                                3
                            </span>
                            <p
                                id="step-3"
                                className="hidden md:block uppercase leading-1.2"
                            >
                                <span className="mb-1 block text-xs text-gray-1">
                                    Step 3
                                </span>
                                <span className="block text-sm text-gray-3 font-medium tracking-wider">
                                    Add-ons
                                </span>
                            </p>
                        </li>
                        <li className="md:grid md:grid-cols-[max-content_1fr] md:gap-4 md:items-center">
                            <span
                                className={`grid justify-center items-center size-8 text-xs font-bold border rounded-full ${
                                    formStepNum === 4
                                        ? "border-light-blue bg-light-blue text-marine-blue"
                                        : "border-gray-3 text-gray-3"
                                }`}
                                aria-current={
                                    formStepNum === 4 ? "step" : "false"
                                }
                                aria-describedby="step-4"
                            >
                                4
                            </span>
                            <p
                                id="step-4"
                                className="hidden md:block uppercase leading-1.2"
                            >
                                <span className="mb-1 block text-xs text-gray-1">
                                    Step 4
                                </span>
                                <span className="block text-sm text-gray-3 font-medium tracking-wider">
                                    Summary
                                </span>
                            </p>
                        </li>
                    </ol>
                </aside>
                <main className="px-4 relative">
                    {!isSubmitSuccessful && (
                        <form
                            className="h-full relative"
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                        >
                            <section className="m-auto px-6 md:px-0 py-8 max-w-[29.625rem] bg-white shadow-lg shadow-gray-2 md:shadow-none rounded-xl -translate-y-[4.625rem] md:translate-y-0">
                                {formStepNum === 1 && (
                                    <FormStep1
                                        register={register}
                                        errors={errors}
                                    />
                                )}
                                {formStepNum === 2 && (
                                    <FormStep2
                                        period={planPeriod}
                                        onPeriodChange={changePlanPeriod}
                                        register={register}
                                        errors={errors}
                                        planValue={planValue}
                                        clearErrors={clearErrors}
                                    />
                                )}
                                {formStepNum === 3 && (
                                    <FormStep3
                                        period={planPeriod}
                                        register={register}
                                        addOnValue={addOnValue}
                                    />
                                )}
                                {formStepNum === 4 && (
                                    <FormStep4
                                        period={planPeriod}
                                        goToPlan={setFormStepNum}
                                        getFormValues={getValues}
                                    />
                                )}
                            </section>

                            <section className="bg-white shadow-[0_-1px_10px_#d6d9e620] md:shadow-none fixed bottom-0 left-0 right-0 md:absolute">
                                <div
                                    className={`m-auto md:px-0 p-4 md:max-w-[29.625rem] flex m-xxs:flex-col m-xxs:gap-2 ${
                                        formStepNum === 1
                                            ? "justify-end"
                                            : "justify-between"
                                    }`}
                                >
                                    {formStepNum !== 1 && (
                                        <button
                                            type="button"
                                            className="px-3 py-1.5 text-sm font-medium leading-1.2 text-gray-1 m-xxs:self-center m-xxs:order-1 focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-purplish-blue ring-offset-2 transition-colors prev-btn"
                                            onClick={
                                                handleFormPreviousStepChange
                                            }
                                        >
                                            Go Back
                                        </button>
                                    )}
                                    {formStepNum !== 4 && (
                                        <button
                                            type="button"
                                            className="px-4 py-3 text-sm font-normal text-gray-3 leading-1.2 bg-marine-blue rounded focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-purplish-blue ring-offset-2 transition-opacity next-btn"
                                            onClick={handleFormNextStepChange}
                                        >
                                            Next Step
                                        </button>
                                    )}
                                    {formStepNum === 4 && (
                                        <button
                                            type="submit"
                                            className="px-4 py-3 text-sm font-normal text-gray-3 leading-1.2 bg-purplish-blue rounded focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-purplish-blue ring-offset-2 transition-opacity confirm-btn"
                                        >
                                            Confirm
                                        </button>
                                    )}
                                </div>
                            </section>
                        </form>
                    )}

                    {isSubmitSuccessful && <FormSubmitSuccess />}
                </main>
            </div>

            <footer className="px-4 text-sm text-center text-marine-blue">
                <p className="attribution">
                    Challenge by{" "}
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                    >
                        Frontend Mentor
                    </a>
                    . Coded by{" "}
                    <a
                        href="https://www.frontendmentor.io/profile/TkTarun20"
                        target="_blank"
                    >
                        Tarun
                    </a>
                    .
                </p>
            </footer>
        </>
    );
}

export default App;
