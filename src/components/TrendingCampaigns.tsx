import { useEffect, useState } from "react";

const TrendingCampaigns = () => {
  const [mounted, setMounted] = useState(false);
  const targetProgress = 54.5739;

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="px-4 md:px-5 py-6">
      <h1
        className={`text-3xl md:ml-5 md:text-4xl text-gray-800 font-bold mb-6 transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Trending Campaigns
      </h1>

      <div
        className={`group flex flex-nowrap w-full max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 ease-out hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex-1 relative aspect-video overflow-hidden">
          <img
            src="https://d1c7drk47yg0al.cloudfront.net/assets/TwQaWju1qmKBvfWCwBg6EsqxS9DaJhGyd1tN24wE.jpg?profile=campaign.header_desktop"
            alt="North Gaza Campaign"
            className="object-cover w-full h-full rounded-l-xl transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex-1 p-6 flex flex-col justify-center min-w-0">
          <div className="flex flex-col gap-2 text-neutral-800">
            <h3 className="font-bold text-lg md:text-2xl lg:text-3xl leading-snug truncate transition-colors duration-200 group-hover:text-blue-600">
              North Gaza: Food, Water &amp; Other Distributions
            </h3>
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path d="M12 21s-8-6.58-8-12A8 8 0 1 1 20 9c0 5.42-8 12-8 12z" fill="currentColor" />
                <circle cx="12" cy="9" fill="white" r="4" />
              </svg>
              <span className="font-medium text-sm md:text-base truncate">United Kingdom</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 min-w-0">
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={targetProgress}
              className="w-full bg-gray-200 rounded-full h-2 md:h-5 overflow-hidden"
            >
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-[1200ms] ease-out"
                style={{ width: mounted ? `${targetProgress}%` : "0%" }}
              />
            </div>
            <div className="flex justify-between items-end">
              <h5 className="font-bold text-neutral-900 text-sm md:text-lg lg:text-xl truncate">
                £2,728,693{" "}
                <span className="font-normal text-neutral-700 text-xs md:text-sm lg:text-base">
                  raised
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCampaigns;