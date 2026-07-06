const movements = [
    {
        label: 'All',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/trending/button.png',
        overlayColor: 'rgba(31, 168, 223, 0.8)',
        disabled: true,
    },
    {
        label: 'Palestine',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/palestine/button.png',
    },
    {
        label: 'Climate',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/climate/button.png',
    },
    {
        label: 'Animals',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/animals/button.png',
    },
    {
        label: 'First Nations',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/first-nations/button.png',
    },
    {
        label: 'Trans Rights',
        image: 'https://d1c7drk47yg0al.cloudfront.net/movement-images/trans-rights/button.png',
    },
];

const SectionTwo = () => {
    return (
        <div>
            <h1 className="text-4xl text-gray-800 mx-3 md:mx-10 font-bold">Featured Movements</h1>
            <div className="w-full px-4 py-6">
                <div
                    aria-label="All movements"
                    className="grid grid-cols-2 xxs:grid-cols-3 md:mx-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 lg:flex lg:flex-row lg:justify-center"
                    data-testid="movement-button-container"
                >
                    {movements.map((movement, index) => (
                        <button
                            key={index}
                            type="button"
                            disabled={movement.disabled}
                            className={`relative rounded-[20px] h-[120px] w-full max-w-[210px] group overflow-hidden flex justify-center items-center cursor-pointer  outline-4 offset-4  ${movement.disabled ? 'pointer-events-none outline-blue-500' : 'outline-transparent'
                                } duration-300 ease-in-out hover:outline-blue-500 focus:outline-blue-500 focus-visible:outline-blue-500 shadow-md shadow-black/25 bg-cover transition hover:scale-[1.03]`}
                            style={{
                                backgroundImage: `url(${movement.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                            data-testid="movement-button"
                        >
                            <div
                                aria-hidden="true"
                                className={`absolute inset-0 z-0 ${movement.disabled ? '' : 'mix-blend-multiply'
                                    }`}
                                role="presentation"
                                style={{
                                    background: movement.overlayColor || 'rgba(228, 68, 160, 0.15)',
                                    filter: movement.disabled
                                        ? ''
                                        : 'grayscale(1) contrast(1.2) brightness(0.9)',
                                }}
                            ></div>

                            <div className="z-10">
                                <p className="font-bold text-white text-2xl 3xs:text-3xl sm:text-4xl uppercase tracking-wide text-shadow p-2 text-center m-0">
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

