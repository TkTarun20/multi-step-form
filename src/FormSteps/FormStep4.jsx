function FormStep4({ period, goToPlan, getFormValues }) {
    // handler to go back to form's step-2
    function handleChangePlan() {
        goToPlan(2);
    }
    
    const periodAbbr = period === 'monthly' ? 'mo': 'yr';

    let addOnsContent;
    let total = 0;

    // format form values
    const selectedPlan = JSON.parse(getFormValues("plan"));
    const selectedAddOns = getFormValues("add_on");

    total += selectedPlan.price;

    if (selectedAddOns.length > 0) {
        addOnsContent = selectedAddOns.map((addOn, i, arr) => {
            const addOnAsObj = JSON.parse(addOn);
            const transformedAddOnName = addOnAsObj.name[0].toUpperCase() + addOnAsObj.name.slice(1);

            total += addOnAsObj.price;

            return (
                <tr className="text-sm" key={addOnAsObj.name}>
                    <td className={`px-4 pb-3 ${arr.length - 1 === i ? 'rounded-bl-lg' : ''}`}>
                        <span>{transformedAddOnName}</span>
                    </td>
                    <td className={`px-4 pb-3 text-marine-blue font-normal ${arr.length - 1 === i ? 'rounded-br-lg' : ''}`}>
                        <b className="font-normal">+${addOnAsObj.price}/{periodAbbr}</b>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <h2 className="mb-1 text-lg font-bold m-xxs:text-center text-marine-blue">
                Finishing up
            </h2>
            <p className="mb-6 md:mb-9 m-xxs:text-center text-gray-1">
                Double-check everything looks OK before confirming.
            </p>
            <div className="overflow-auto">
                <table className="w-full font-medium text-gray-1">
                    <tbody className="bg-gray-3">
                        <tr className="">
                            <td className={`p-4 pb-4 text-sm rounded-tl-lg ${selectedAddOns.length === 0 ? 'rounded-bl-lg' : ''}`}>
                                <span className="font-bold capitalize text-marine-blue">
                                    {selectedPlan.name} &#40;{period}&#41;
                                </span>
                                <br />
                                <button
                                    type="button"
                                    className="text-sm underline decoration-[1.5px] focus-visible:ring-2 supports-[not_selector(:focus-visible)]:focus:ring-2 ring-purplish-blue ring-offset-2 ring-offset-gray-3 transition-colors change-btn"
                                    onClick={handleChangePlan}
                                >
                                    Change
                                </button>
                            </td>
                            <td className={`p-4 pb-4 text-sm text-marine-blue rounded-tr-lg ${selectedAddOns.length === 0 ? 'rounded-br-lg' : ''}`}>
                                <b className="font-bold">${selectedPlan.price}/{periodAbbr}</b>
                            </td>
                        </tr>
                        {addOnsContent && (
                            <>
                                <tr>
                                    <td colSpan={2} className="px-4 pb-3">
                                        <div className="w-full border-t-[0.5px] border-gray-2"></div>
                                    </td>
                                </tr>
                                {addOnsContent} 
                            </>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="pl-4 pt-6 text-sm">
                                Total &#40;per{" "}
                                {period === "monthly" ? "month" : "year"}&#41;
                            </td>
                            <td className="px-4 pt-6 text-purplish-blue">
                                <strong className="font-bold">+${total}/{periodAbbr}</strong>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default FormStep4;
