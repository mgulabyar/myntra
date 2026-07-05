const SectionOne = () => {
  return (
    <div className="mx-1">
      <div className="relative w-full max-w-[1300px] aspect-[16/9] sm:aspect-auto sm:h-[400px] md:h-[500px] lg:h-[520px] rounded-3xl overflow-hidden mx-auto my-6 px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Background Image */}
        <img
          src="https://d1c7drk47yg0al.cloudfront.net/movement-images/trending/hero.jpg"
          alt="Making the Many Mighty"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105 rounded-3xl"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end h-full text-white max-w-3xl px-4 sm:px-6 pb-10 sm:pb-14 lg:pb-20 ">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Making the Many Mighty
          </h1>
          <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-md max-w-lg">
            Help power the world's social justice movements
          </p>

          <button
            className="mt-8 w-max bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 
              text-white font-semibold rounded-full px-3 md:px-8 py-2 md:py-3 shadow-lg transition-transform transform hover:scale-105"
          >
            <a href="https://chuffed.org/onboarding/category">
            Start a Campaign
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

