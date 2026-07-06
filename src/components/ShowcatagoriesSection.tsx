import { useState } from 'react';

const CategoriesSection = () => {
  const [showCategories, setShowCategories] = useState(false);

  const categories = [
    'Health and Medical',
    'Social Welfare',
    'International Development',
    'Social Enterprise',
    'Refugees and Asylum Seekers',
    'Schools and Education',
    'Environment',
    'Women and Girls',
    'Sports',
    'LGBTIQ',
    'Volunteering',
    'Politics',
    'Community',
  ];

  return (
    <div className="w-full py-6 px-4 text-center">
      {showCategories && (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="cursor-pointer bg-white text-neutral-800 font-semibold text-sm px-5 py-2 rounded-full shadow-md transition-all duration-200 border border-transparent hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500"
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/*  */}
      <button
        onClick={() => setShowCategories(!showCategories)}
        className=" hover:outline-2 hover:outline-offset-2 hover:outline-blue-800 px-6 py-2 cursor-pointer hover:outline-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
      >
        {showCategories ? 'Show Less' : `+ ${categories.length} More`}
      </button>
    </div>
  );
};

export default CategoriesSection;


