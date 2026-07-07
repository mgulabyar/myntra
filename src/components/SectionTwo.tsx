import { useEffect, useState } from "react";

const movements = [
  {
    label: "All",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/trending/button.png",
    overlayColor: "rgba(31, 168, 223, 0.8)",
    disabled: true,
  },
  {
    label: "Palestine",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/palestine/button.png",
  },
  {
    label: "Climate",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/climate/button.png",
  },
  {
    label: "Animals",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/animals/button.png",
  },
  {
    label: "First Nations",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/first-nations/button.png",
  },
  {
    label: "Trans Rights",
    image: "https://d1c7drk47yg0al.cloudfront.net/movement-images/trans-rights/button.png",
  },
];

const SectionTwo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div>
      <h1
        className={`text-4xl text-gray-800 mx-3 md:mx-10 font-bold transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Featured Movements
      </h1>

      <div className="w-full px-4 py-6">
        <div
          aria-label="All movements"
          className="grid grid-cols-2 xxs:grid-cols-3 md:mx-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:flex lg:flex-row lg:justify-center"
          data-testid="movement-button-container"
        >
          {movements.map((movement, index) => (
            <button
              key={movement.label}
              type="button"
              disabled={movement.disabled}
              data-testid="movement-button"
              className={`relative rounded-[20px] h-[120px] w-full max-w-[210px] group overflow-hidden flex justify-center items-center cursor-pointer bg-cover shadow-md shadow-black/25 transition-all duration-300 ease-out
                ${movement.disabled ? "pointer-events-none ring-2 ring-blue-500" : "ring-0"}
                hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 hover:ring-2 hover:ring-blue-500
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
              style={{
                backgroundImage: `url(${movement.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transitionDelay: mounted ? `${index * 80}ms` : "0ms",
              }}
            >
              <div
                aria-hidden="true"
                role="presentation"
                className={`absolute inset-0 z-0 transition-[filter,opacity] duration-500 ease-out ${
                  movement.disabled ? "" : "mix-blend-multiply group-hover:opacity-0"
                }`}
                style={{
                  background: movement.overlayColor || "rgba(228, 68, 160, 0.15)",
                  filter: movement.disabled ? "" : "grayscale(1) contrast(1.2) brightness(0.9)",
                }}
              />

              {/* Subtle dark gradient at bottom for label legibility, visible on hover */}
              <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="z-10">
                <p className="font-bold text-white text-2xl 3xs:text-3xl sm:text-4xl uppercase tracking-wide text-shadow p-2 text-center m-0 transition-transform duration-300 ease-out group-hover:scale-105">
                  {movement.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

