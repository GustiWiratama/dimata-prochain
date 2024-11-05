import Image from "next/image";

const About = () => {
  return (
    <section className="about flex p-28 justify-between">
      <div className="about flex  justify-center">
        <div className="w-[400px] h-[400px] mr-28 overflow-hidden">
          <Image
            src="/home/handshake.jpg"
            alt="service Image"
            width={300}
            height={300}
            quality={100}
            className="w-[400px] h-[400px] object-cover"
            priority
          />
        </div>
      </div>
      <div className="about-text">
        <h2 className="font-bold text-[3em] ">Enhancing Operational Synergy</h2>
        <p className="mt-3 mb-12">
          ProChain is a platform where centralized and distributed systems come
          together to drive efficiency and growth. Designed specifically for the
          retail industry, small-scale manufacturing, distribution, and
          handicrafts, ProChain provides tailored, high-performance solutions to
          streamline every aspect of your business operations, ensuring seamless
          connectivity and control.
        </p>
        <a
          href="#consultation"
          className="bg-amber-500 text-white py-3 px-6 hover:bg-orange-600 transition"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
