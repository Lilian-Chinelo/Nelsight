const Services = () => {
    return (
        <div className="m-6">
            <div className="text-center ">
                <h1 className="text-3xl font-bold uppercase text-primary">
                    Our Services
                </h1>
                <p className="pt-6 text-lg text-dark font-semibold w-full px-8 md:w-full">
                    When you hire us, we do our best to ensure that your 
                    business grows through the service we offer, by offering top-notch service that is second to none...
                    Here are some of the things we do:
                </p>
            </div>

            
<div className="bg-transparent overflow-hidden relative lg:flex lg:items-center">
    <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-2xl font-bold text-primary">
            <span className="text-primary">&#8658;</span>  Data Analysis
        </h2>
        <p className="text-md mb-4 font-semibold text-dark">
            We analyse your data professionaly and give you accurate insights
            Using industry best practices
            
        </p>
        <h2 className="text-2xl font-bold text-primary">
            <span className="text-primary">&#8658;</span> Research
        </h2>
        <p className="text-md font-semibold mb-4 text-dark">
            We do all kinds of research.

        </p>
        <h2 className="text-2xl font-bold text-primary">
            <span className="text-primary">&#8658;</span> Business Consultation
        </h2>
        <p className="text-md mb-4 font-semibold text-dark">
            We give the best business advice and share best practices for maximum business growth.

        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <button type="button" className="py-2 px-4  bg-primary text-secondary  rounded-lg ">
                    Get started
                </button>
            </div>
        </div>
    </div>
    <div className="flex items-center gap-8 p-8 lg:p-24">
        <img src="/assets/images/dataAnalysis.jpg" className="rounded-lg w-1/2" alt=""/>
        <div>
            <img src="/assets/images/research.png" className="rounded-lg mb-8" alt=""/>
            <img src="/assets/images/business.jpg" className="rounded-lg" alt=""/>
        </div>
    </div>
</div>

        </div>
    );
}

export default Services;