import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

function FormStep2({ period, onPeriodChange, register, errors, clearErrors, planValue }) {
    // handler to toggle plan period
    function togglePlanPeriod() {
        onPeriodChange();
    }

    return (
        <>
            <h2 className="mb-1 text-lg font-bold m-xxs:text-center text-marine-blue">
                Select your plan
            </h2>
            <p
                id="toggle-plan"
                className="mb-6 md:mb-9 m-xxs:text-center text-gray-1"
            >
                You have the option of monthly or yearly billing.
            </p>
            <div id="plan-message" aria-live="polite">
                {errors.plan && (
                    <p className="pb-1 md:pb-2 text-sm font-bold text-right text-strawberry-red">
                        {errors.plan.message}
                    </p>
                )}
            </div>
            <ul className="mb-7 md:mb-8 grid md:grid-cols-3 gap-4 md:gap-5 m-xs:text-center">
                <li className="relative">
                    <input
                        type="radio"
                        id="plan-arcade"
                        checked={
                            planValue ===
                            JSON.stringify({
                                name: "arcade",
                                price: period === "monthly" ? 9 : 90,
                            })
                        }
                        value={JSON.stringify({
                            name: "arcade",
                            price: period === "monthly" ? 9 : 90,
                        })}
                        className="absolute appearance-none peer"
                        {...register("plan", {
                            required: "Plan must be selected",
                            onChange(e) {
                                clearErrors('plan');
                            },
                        })}
                        aria-describedby="plan-message"
                        aria-invalid={errors.plan ? true : false}
                    />
                    <label
                        htmlFor="plan-arcade"
                        className="p-4 flex md:flex-col m-xs:flex-col gap-4 md:gap-10 m-xs:gap-2 items-start m-xs:items-center cursor-pointer border border-gray-2 rounded-lg peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-4 peer-checked:border-purplish-blue peer-checked:bg-gray-4 transition-colors radio-label"
                    >
                        <img src={arcadeIcon} alt="" className="inline-block w-10 aspect-square" />
                        <div className="grid">
                            <span className="text-marine-blue font-medium">
                                Arcade
                            </span>
                            <span className="text-sm text-gray-1 font-medium">
                                {period === "monthly" ? "$9/mo" : "$90/yr"}
                            </span>
                            {period !== "monthly" && (
                                <strong className="mt-1 text-xs text-marine-blue font-medium">
                                    2 months free
                                </strong>
                            )}
                        </div>
                    </label>
                </li>
                <li className="relative">
                    <input
                        type="radio"
                        id="plan-advanced"
                        checked={
                            planValue ===
                            JSON.stringify({
                                name: "advanced",
                                price: period === "monthly" ? 12 : 120,
                            })
                        }
                        value={JSON.stringify({
                            name: "advanced",
                            price: period === "monthly" ? 12 : 120,
                        })}
                        className="absolute appearance-none peer"
                        {...register("plan", {
                            required: "Plan must be selected",
                            onChange(e) {
                                clearErrors('plan');
                            },
                        })}
                        aria-describedby="plan-message"
                        aria-invalid={errors.plan ? true : false}
                    />
                    <label
                        htmlFor="plan-advanced"
                        className="p-4 flex md:flex-col m-xs:flex-col gap-4 md:gap-10 m-xs:gap-2 items-start m-xs:items-center cursor-pointer border border-gray-2 rounded-lg peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-4 peer-checked:border-purplish-blue peer-checked:bg-gray-4 transition-colors radio-label"
                    >
                        <img src={advancedIcon} alt="" className="inline-block w-10 aspect-square" />
                        <div className="grid">
                            <span className="text-marine-blue font-medium">
                                Advanced
                            </span>
                            <span className="text-sm text-gray-1 font-medium">
                                {period === "monthly" ? "$12/mo" : "$120/yr"}
                            </span>
                            {period !== "monthly" && (
                                <strong className="mt-1 text-xs text-marine-blue font-medium">
                                    2 months free
                                </strong>
                            )}
                        </div>
                    </label>
                </li>
                <li className="relative">
                    <input
                        type="radio"
                        id="plan-pro"
                        checked={
                            planValue ===
                            JSON.stringify({
                                name: "pro",
                                price: period === "monthly" ? 15 : 150,
                            })
                        }
                        value={JSON.stringify({
                            name: "pro",
                            price: period === "monthly" ? 15 : 150,
                        })}
                        className="absolute appearance-none peer"
                        {...register("plan", {
                            required: "Plan must be selected",
                            onChange(e) {
                                clearErrors('plan');
                            },
                        })}
                        aria-describedby="plan-message"
                        aria-invalid={errors.plan ? true : false}
                    />
                    <label
                        htmlFor="plan-pro"
                        className="p-4 flex md:flex-col m-xs:flex-col gap-4 md:gap-10 m-xs:gap-2 items-start m-xs:items-center cursor-pointer border border-gray-2 rounded-lg peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-4 peer-checked:border-purplish-blue peer-checked:bg-gray-4 transition-colors radio-label"
                    >
                        <img src={proIcon} alt="" className="inline-block w-10 aspect-square" />
                        <div className="grid">
                            <span className="text-marine-blue font-medium">
                                Pro
                            </span>
                            <span className="text-sm text-gray-1 font-medium">
                                {period === "monthly" ? "$15/mo" : "$150/yr"}
                            </span>
                            {period !== "monthly" && (
                                <strong className="mt-1 text-xs text-marine-blue font-medium">
                                    2 months free
                                </strong>
                            )}
                        </div>
                    </label>
                </li>
            </ul>
            <div className="p-4 grid grid-cols-[repeat(3,_min-content)] m-xs:grid-cols-1 gap-6 m-xs:gap-2 justify-center items-center m-xs:justify-items-center bg-gray-3 rounded-lg">
                <div
                    className={`text-sm font-medium ${
                        period === "monthly"
                            ? "text-marine-blue"
                            : "text-gray-1"
                    } transition-colors duration-300`}
                >
                    Monthly
                </div>
                <button
                    type="button"
                    className="p-1 w-9 h-5 m-xs:w-5 m-xs:h-9 bg-marine-blue rounded-full focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-purplish-blue ring-offset-2 ring-offset-gray-3"
                    onClick={togglePlanPeriod}
                    aria-label={period === "monthly" ? "yearly" : "monthly"}
                    aria-describedby="toggle-plan"
                >
                    <span
                        className={`block h-full m:xs:w-full m-xs:h-auto aspect-square bg-gray-4 rounded-full ${
                            period === "monthly"
                                ? "translate-x-0 m-xs:-translate-y-[0.5rem]"
                                : "translate-x-[1rem] m-xs:translate-x-0 m-xs:translate-y-[0.5rem]"
                        } transition-transform duration-300`}
                    ></span>
                </button>
                <div
                    className={`text-sm font-medium ${
                        period === "yearly" ? "text-marine-blue" : "text-gray-1"
                    } transition-colors duration-300`}
                >
                    Yearly
                </div>
            </div>
        </>
    );
}

export default FormStep2;
