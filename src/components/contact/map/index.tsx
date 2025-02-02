const Map = () => {
  return (
    <section
      className=" flex text-center justify-center items-center p-10 lg:p-0"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-16 md:m-28">
        <div className="flex flex-col max-w-3xl place-content-center text-center items-center md:scale-100 p-6">
          <p className="text-amber-500 text-2xl">OUR OFFICE</p>
          <br />
          <p className="text-2xl md:text-4xl ">
            <b>Where Innovation Happens</b>
          </p>
          <br />
          <p className="text-sm w-full">
            A space built to drive progress and foster creativity. Our modern,
            tech-forward office reflects our commitment to cutting-edge
            solutions and provides the ideal environment for innovation and
            collaboration.
          </p>
        </div>
        <div className="flex items-center md:scale-100 justify-center ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.846030212877!2d115.23796897589622!3d-8.706167791342807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd241bfead42cb1%3A0x24c6e2d6d2d87689!2sDimata%20IT%20and%20Software!5e0!3m2!1sid!2sid!4v1730960400785!5m2!1sid!2sid"
            width="350"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:w-[600px] lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
