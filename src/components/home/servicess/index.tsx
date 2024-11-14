import Image from "next/image";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen mb-28">
      <div className="w-5/6 md:pr-8 flex flex-col text-center mt-10 md:mt-0 mb-20">
        <h2 className="text-sm uppercase text-amber-500">Our Services</h2>
        <h1 className="text-2xl  md:text-4xl font-bold mt-2">
          Comprehensive Business Management Solutions
        </h1>
        <p className="text-lg mt-4">
          Dimata ProChain offers comprehensive solutions to streamline business
          operations for various industries. Our expertise includes efficient
          inventory management, point-of-sale (POS) integration, and data-driven
          insights to support decision-making and operational efficiency.
        </p>
      </div>
      <div
        className="lg:w-1/2 grid grid-cols-1 gap-6 justify-center p-10 md:p-0"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex space-x-4 justify-center items-center w-full ">
          <div className="w-[200px] h-[150px] overflow-hidden">
            <Image
              src="/home/sales-management.jpg"
              alt="Sales Management"
              width={200}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-lg font-bold">Sales Management</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>

        <div
          className="flex space-x-4  justify-center items-center w-full "
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-[200px] h-[150px] overflow-hidden">
            <Image
              src="/home/bgjumbo.jpg"
              alt="Inventory Control & Transfer"
              width={200}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-lg font-bold">Inventory Control & Transfer</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>
        <div
          className="flex space-x-4  justify-center items-center w-full"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="w-[200px] h-[150px] overflow-hidden">
            <Image
              src="/home/purchase.jpg"
              alt="Purchasing Management"
              width={200}
              height={150}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            <h3 className="text-lg font-bold">Purchasing Management</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
          </div>
        </div>
      </div>
      <a
        href="/services"
        className="bg-amber-500 text-white py-3 px-6 my-8 rounded-full hover:bg-orange-600 transition"
      >
        Read More
      </a>
    </section>
  );
};

export default Services;
