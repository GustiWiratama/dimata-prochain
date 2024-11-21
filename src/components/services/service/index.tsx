import Image from "next/image";
const Service = () => {
  const cards = [
    {
      title: "Sales Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/sales-management.png",
    },
    {
      title: "Inventory Control & Transfer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/inventory.png",
    },
    {
      title: "Purchasing Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/purchase.png",
    },
    {
      title: "Support for Multiple Brances",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?.",
      image: "/services/connection.png",
    },
  ];
  return (
    <div className="relative">
      <div className=" relative mt-20 flex flex-col text-center items-center">
        <div className="font-bold text-4xl mb-4">
          Innovative solutions for every step forward
        </div>
        <p className="w-4/6">
          We provide software solutions for businesses, government, and public
          services. Our expertise includes integration of digital devices and
          4.0 technologies.
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto p-4 mt-20">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <div className="photo ">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={500}
                  height={300}
                  className="w-full h-50 object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
