import Image from "next/image";
import { useEffect, useState } from "react";
const Team = () => {
  const profile = [
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
    {
      name: "John Doe",
      potition: "Director",
      image: "/about/person.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNext = () => {
    if (currentIndex < profile.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <section>
      <div className="text-left m-48">
        <div className="flex justify-between">
          <div>
            <hr className="w-24 bg-amber-500 h-1 mb-2" />
            <p className="text-xl text-amber-500">OUR TEAM</p>
            <br />
            <p className="text-5xl font-normal">
              <b>The Minds Behind ProChain</b>
            </p>
            <br />
            <p>
              ProChain’s success is powered by a passionate team committed to
              innovation, collaboration, and delivering impactful solutions to
              our clients.
            </p>
            <br />
          </div>
          {isClient && (
            <div className="flex mt-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-2 ${
                  currentIndex === 0 ? "opacity-50" : "opacity-100"
                }`}
              >
                <Image
                  src="/about/prev.png"
                  alt="prev"
                  width={30}
                  height={30}
                />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= profile.length - 4}
                className={`p-2 ${
                  currentIndex >= profile.length - 4
                    ? "opacity-50"
                    : "opacity-100"
                }`}
              >
                <Image
                  src="/about/next.png"
                  alt="next"
                  width={30}
                  height={30}
                />
              </button>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {profile.map((card, index) => (
              <div key={index} className="min-w-[25%] px-2">
                <Image
                  src={card.image}
                  alt={card.name}
                  width={350}
                  height={150}
                  className="w-full h-50 object-cover"
                />
                <div className="name text-center">
                  <p className="font-bold">{card.name}</p>
                  <p>{card.potition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
