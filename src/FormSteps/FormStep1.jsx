function FormStep1({ register, errors }) {
    return (
        <>
            <h2 className="mb-1 text-lg font-bold m-xxs:text-center text-marine-blue">
                Personal info
            </h2>
            <p className="mb-6 md:mb-9 m-xxs:text-center text-gray-1">
                Please provide your name, email address, and phone number.
            </p>
            <div className="grid gap-4 md:gap-6">
                <div className="grid grid-cols-[max-content_1fr] m-md:grid-cols-1 gap-x-6 items-end">
                    <label
                        htmlFor="name"
                        className="mb-1 md:mb-2 text-sm leading-1 text-marine-blue"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                        className={`px-4 py-2 col-span-2 m-md:col-span-1 order-1 m-md:order-none text-marine-blue font-medium outline-none border ${
                            errors.name
                                ? "border-strawberry-red"
                                : "border-gray-2"
                        } focus:border-purplish-blue focus-visible:border-purplish-blue rounded md:rounded-lg placeholder:text-gray-1 placeholder:font-medium`}
                        {...register("name", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            pattern: {
                                value: /^[A-Za-z ]+$/,
                                message:
                                    "Only alphabets and spaces are allowed",
                            },
                        })}
                        aria-describedby="name-message"
                        aria-invalid={errors.name ? true : false}
                    />
                    <div
                        id="name-message"
                        className="mb-1 md:mb-2 m-md:mb-0"
                        aria-live="polite"
                    >
                        {errors.name && (
                            <p className="m-md:mt-1 text-sm font-bold leading-1 text-right m-md:text-left text-strawberry-red">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-[max-content_1fr] m-md:grid-cols-1 gap-x-6 items-end">
                    <label
                        htmlFor="email"
                        className="mb-1 md:mb-2 text-sm leading-1 text-marine-blue"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        className={`px-4 py-2 col-span-2 order-1 m-md:order-none text-marine-blue font-medium outline-none border ${
                            errors.email
                                ? "border-strawberry-red"
                                : "border-gray-2"
                        } focus:border-purplish-blue focus-visible:border-purplish-blue rounded md:rounded-lg placeholder:text-gray-1 placeholder:font-medium`}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            pattern: {
                                value: /^[\w!#$%&'*+/=?`{|}~^-]+(?:\.[\w!#$%&'*+/=?`{|}~^-]+)*@(?:[A-Z0-9-]+\.)+[A-Z]{2,6}$/i,
                                message: "Invalid email format",
                            },
                        })}
                        aria-describedby="email-message"
                        aria-invalid={errors.email ? true : false}
                    />
                    <div
                        id="email-message"
                        className="mb-1 md:mb-2 m-md:mb-0"
                        aria-live="polite"
                    >
                        {errors.email && (
                            <p className="m-md:mt-1 text-sm font-bold leading-1 text-right m-md:text-left text-strawberry-red">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-[max-content_1fr] m-md:grid-cols-1 gap-x-6 items-end">
                    <label
                        htmlFor="mobile"
                        className="mb-1 md:mb-2 text-sm leading-1 text-marine-blue"
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="mobile"
                        placeholder="e.g. +1 234 567 890"
                        className={`px-4 py-2 col-span-2 order-1 m-md:order-none text-marine-blue font-medium outline-none border ${
                            errors.mobile
                                ? "border-strawberry-red"
                                : "border-gray-2"
                        } focus:border-purplish-blue focus-visible:border-purplish-blue rounded md:rounded-lg placeholder:text-gray-1 placeholder:font-medium`}
                        {...register("mobile", {
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                            pattern: {
                                value: /^\+1\s([0-9]{3}\s){2}[0-9]{3}$/,
                                message:
                                    "Invalid format, required format is +1 XXX XXX XXX",
                            },
                        })}
                        aria-describedby="mobile-message"
                        aria-invalid={errors.mobile ? true : false}
                    />
                    <div
                        id="mobile-message"
                        className="mb-1 md:mb-2 m-md:mb-0"
                        aria-live="polite"
                    >
                        {errors.mobile && (
                            <p className="m-md:mt-1 text-sm font-bold leading-1 text-right m-md:text-left text-strawberry-red">
                                {errors.mobile.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default FormStep1;
