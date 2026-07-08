// import { useEffect, useState } from "react";

// const Start = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const id = requestAnimationFrame(() => setMounted(true));
//     return () => cancelAnimationFrame(id);
//   }, []);

//   return (
//     <div className="bg-[#f5f5f5] px-6 py-10 md:p-[48px] flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center text-center md:text-left">
//       <h1
//         className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#262626] max-w-2xl transition-all duration-700 ease-out ${
//           mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//       >
//         Fund your fight for social justice with Chuffed
//       </h1>

//       <a
//         href="https://chuffed.org/onboarding/category"
//         className={`shrink-0 cursor-pointer bg-[#e444a0] hover:bg-pink-700 text-white font-bold rounded-md px-6 py-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-pink-200 active:scale-95 hover:outline-2 hover:outline-offset-2 hover:outline-pink-800 ${
//           mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//         }`}
//         style={{ transitionDelay: mounted ? "150ms" : "0ms" }}
//       >
//         Start Your Campaign
//       </a>
//     </div>

import { useEffect, useState } from "react";

const Start = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="bg-[#f5f5f5] px-6 py-10 md:p-[48px] flex flex-col md:flex-row items-center gap-6 md:gap-10 justify-center text-center">
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#262626] max-w-2xl transition-all duration-700 ease-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Fund your fight for social justice with Chuffed
      </h1>

      <a
        href="https://chuffed.org/onboarding/category"
        className={`shrink-0 cursor-pointer bg-[#e444a0] hover:bg-pink-700 text-white font-semibold rounded-md px-6 py-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-pink-200 active:scale-95 hover:outline-2 hover:outline-offset-2 hover:outline-pink-800 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: mounted ? "150ms" : "0ms" }}
      >
        Start Your Campaign
      </a>
    </div>
  );
};

export default Start;