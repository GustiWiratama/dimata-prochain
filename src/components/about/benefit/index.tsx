import Image from "next/image";
const Benefit = () => {
  return (
    <div>
      <div
        className="header flex flex-col justify-center items-center mt-32"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-10 font-bold">
          Driving Innovation in Retail and Distribution
        </h1>
        <p className="text-center w-2/3">
          At ProChain, we understand the dynamic needs of the retail and
          distribution industries. Our platform integrates essential
          functionalities like sales, purchasing, inventory, and financial
          management to provide a holistic solution for your business.
        </p>
        <div className="flex flex-col scale-75 md:scale-100 md:px-64 py-10">
          <div className="flex flex-col md:flex-row">
            <div className="w-96 h-96 overflow-hidden relative">
              <Image
                src="/about/data.jpg"
                alt="Data"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex items-center p-10 md:w-2/4">
              With features such as branch support, centralized data control,
              and customizable reporting tools, ProChain enables businesses to
              adapt and grow in a competitive landscape.
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse ">
            <div className="w-96 h-96 overflow-hidden relative">
              <Image
                src="/about/team.jpg"
                alt="Team"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="md:text-right flex items-center p-10 md:w-2/4">
              Empowered by real-time data insights and advanced inventory
              tracking, ProChain helps you stay ahead and focus on what
              matters—delivering value to your customers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
