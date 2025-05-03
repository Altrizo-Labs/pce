import Image from "next/image";
import RippleButton from "../RippleButton"; // Assuming RippleButton is in the components directory
import recruitmentDashboard from "../../../public/images/recruitment-dashboard.png"; // Adjust the path as needed

const SmartRecruitment = () => {
    return (
        <section className="max-h-screen flex flex-col md:flex-row justify-center min-h-screen bg-white text-gray-800 px-4 md:px-8 lg:px-16 py-12">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left mb-10 md:mb-0 md:pr-10 lg:pr-20 lg:space-y-12">
                <h1 className="text-4xl lg:text-5xl font-bold font-lato mb-6 leading-tight">
                    Smarter Recruitment, Seamless Engagement
                </h1>
                <p className="text-base text-[16px] text-[#535862] font-ibm mb-6">
                    EduSight.ai offers an intelligent AI recruitment chatbot integrated seamlessly
                    with university websites to answer prospective student queries accurately and
                    effectively, coupled with a powerful analytics dashboard for staff.
                    <br/>
                    <br/>
                    Flexible pricing options designed to support institutions at every stage of their
                    recruitment journey, making it easier to scale and succeed.
                </p>
                <p className="text-base lg:text-lg text-gray-600 mb-8">
                    
                </p>
                <RippleButton
                    text="View Pricing Plans"
                    className="bg-white border border-primary rounded-full text-primary font-bold font-lato w-full lg:w-auto py-2 lg:py-3 md:px-6 lg:px-6 whitespace-nowrap text-black text-sm md:text-base z-50"
                    url=""
                    yellowIcon
                />
            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-end"> {/* Increased height and aligned items to the bottom */}
                <Image
                    src={recruitmentDashboard}
                    alt="EduSight AI Recruitment Dashboard"
                    width={700}
                    height={500}
                    className="object-contain"
                    priority
                />
            </div>
        </section>
    );
};

export default SmartRecruitment;