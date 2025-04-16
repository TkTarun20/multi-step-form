import thankYouIcon from "./assets/icon-thank-you.svg";

function FormSubmitSuccess() {
    return (
        <section className="px-6 py-20 bg-white shadow-lg shadow-gray-2 md:shadow-none rounded-xl md:absolute md:top-1/2 md:left-4 md:right-4 -translate-y-[4.625rem] md:-translate-y-1/2 text-center">
            <img
                src={thankYouIcon}
                alt=""
                className="mb-6 inline-block w-14 md:w-16 aspect-square"
            />
            <h2 className="mb-2 text-lg text-marine-blue font-bold">
                Thank you!
            </h2>
            <p className="sm:px-10 text-gray-1 hyphens-auto" lang="en">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@&shy;loremgaming&shy;.com.
            </p>
        </section>
    );
}

export default FormSubmitSuccess;
