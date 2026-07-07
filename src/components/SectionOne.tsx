import { useEffect, useState } from "react";

const SectionOne = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="mx-1">
      <div className="relative w-full max-w-[1300px] aspect-[16/9] sm:aspect-auto sm:h-[400px] md:h-[500px] lg:h-[520px] rounded-3xl overflow-hidden mx-auto my-6 px-4 sm:px-6 lg:px-8 flex flex-col group">
        <img
          alt="Making the Many Mighty"
          data-testid="hero-image"
          src="https://d1c7drk47yg0al.cloudfront.net/movement-images/trending/hero-prshx2bhqy.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl scale-100 transition-transform duration-[6000ms] ease-out group-hover:scale-110 will-change-transform"
          style={{
            animation: "heroZoom 20s ease-in-out infinite alternate",
          }}
        />

        {/* Gradient overlay for text readability + depth */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/30 to-black/5 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end h-full text-white max-w-3xl px-4 sm:px-6 pb-10 sm:pb-14 lg:pb-20">
          <h1
            className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg transition-all duration-700 ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Making the Many Mighty
          </h1>

          <p
            className={`mt-3 text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md max-w-lg transition-all duration-700 ease-out delay-150 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Help power the world's social justice movements
          </p>

          <a
            href="https://chuffed.org/onboarding/category"
            className={`relative mt-8 w-max inline-flex items-center overflow-hidden bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white font-semibold rounded-full px-5 md:px-8 py-2.5 md:py-3 shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-pink-500/40 hover:shadow-xl active:scale-95 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: mounted ? "300ms" : "0ms" }}
          >
            <span className="relative z-10">Start a Campaign</span>
            {/* Shine sweep on hover */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </div>
  );
};

export default SectionOne;
