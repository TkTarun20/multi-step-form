function FormStep3({ period, register }) {
    return (
        <>
            <h2 className="mb-1 text-lg font-bold m-xxs:text-center text-marine-blue">
                Pick add-ons
            </h2>
            <p className="mb-6 md:mb-9 m-xxs:text-center text-gray-1">
                Add-ons help enhance your gaming experience.
            </p>
            <ul className="mb-6 grid gap-4 m-s:text-center">
                <li>
                    <label
                        htmlFor="add_on_service"
                        className="p-4 grid grid-cols-[min-content_1fr_min-content] m-s:grid-cols-1 gap-4 md:gap-6 items-center m-s:justify-items-center cursor-pointer relative border border-gray-2 rounded-lg has-[:checked]:border-purplish-blue has-[:checked]:bg-gray-4 transition-colors checkbox-label"
                    >
                        <input
                            type="checkbox"
                            id="add_on_service"
                            value={JSON.stringify({
                                name: "online service",
                                price: period === "monthly" ? 1 : 10,
                            })}
                            className="absolute appearance-none peer"
                            {...register("add_on")}
                        />
                        <div className="grid justify-center items-center w-5 aspect-square border border-gray-2 rounded peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-2 peer-checked:bg-purplish-blue">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="9"
                                viewBox="0 0 12 9"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    d="m1 4 3.433 3.433L10.866 1"
                                />
                            </svg>
                        </div>
                        <div className="grid gap-1">
                            <span className="leading-1.2 font-medium text-marine-blue">
                                Online service
                            </span>
                            <span className="text-sm font-medium leading-1 text-gray-1">
                                Access to multiplayer games
                            </span>
                        </div>
                        <strong className="text-sm text-purplish-blue font-medium">
                            {period === "monthly" ? "+$1/mo" : "+$10/yr"}
                        </strong>
                    </label>
                </li>
                <li>
                    <label
                        htmlFor="add_on_storage"
                        className="p-4 grid grid-cols-[min-content_1fr_min-content] m-s:grid-cols-1 gap-4 md:gap-6 items-center m-s:justify-items-center cursor-pointer relative border border-gray-2 rounded-lg has-[:checked]:border-purplish-blue has-[:checked]:bg-gray-4 transition-colors checkbox-label"
                    >
                        <input
                            type="checkbox"
                            id="add_on_storage"
                            value={JSON.stringify({
                                name: "larger storage",
                                price: period === "monthly" ? 2 : 20,
                            })}
                            className="absolute appearance-none peer"
                            {...register("add_on")}
                        />
                        <div className="grid justify-center items-center w-5 aspect-square border border-gray-2 rounded peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-2 peer-checked:bg-purplish-blue">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="9"
                                viewBox="0 0 12 9"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    d="m1 4 3.433 3.433L10.866 1"
                                />
                            </svg>
                        </div>
                        <div className="grid gap-1">
                            <span className="leading-1.2 font-medium text-marine-blue">
                                Larger storage
                            </span>
                            <span className="text-sm font-medium leading-1 text-gray-1">
                                Extra 1TB of cloud save
                            </span>
                        </div>
                        <strong className="text-sm text-purplish-blue font-medium">
                            {period === "monthly" ? "+$2/mo" : "+$20/yr"}
                        </strong>
                    </label>
                </li>
                <li>
                    <label
                        htmlFor="add_on_profile"
                        className="p-4 grid grid-cols-[min-content_1fr_min-content] m-s:grid-cols-1 gap-4 md:gap-6 items-center m-s:justify-items-center cursor-pointer relative border border-gray-2 rounded-lg has-[:checked]:border-purplish-blue has-[:checked]:bg-gray-4 transition-colors checkbox-label"
                    >
                        <input
                            type="checkbox"
                            id="add_on_profile"
                            value={JSON.stringify({
                                name: "customizable profile",
                                price: period === "monthly" ? 2 : 20,
                            })}
                            className="absolute appearance-none peer"
                            {...register("add_on")}
                        />
                        <div className="grid justify-center items-center w-5 aspect-square border border-gray-2 rounded peer-focus:ring-2 peer-focus-visible:ring-2 ring-purplish-blue ring-offset-2 peer-checked:bg-purplish-blue">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="9"
                                viewBox="0 0 12 9"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    d="m1 4 3.433 3.433L10.866 1"
                                />
                            </svg>
                        </div>
                        <div className="grid gap-1">
                            <span className="leading-1.2 font-medium text-marine-blue">
                                Customizable profile
                            </span>
                            <span className="text-sm font-medium leading-1 text-gray-1">
                                Custom theme on your profile
                            </span>
                        </div>
                        <strong className="text-sm text-purplish-blue font-medium">
                            {period === "monthly" ? "+$2/mo" : "+$20/yr"}
                        </strong>
                    </label>
                </li>
            </ul>
        </>
    );
}

export default FormStep3;
