// import { useState } from 'react';

// const CategoriesSection = () => {
//   const [showCategories, setShowCategories] = useState(false);

//   const categories = [
//     'Health and Medical',
//     'Social Welfare',
//     'International Development',
//     'Social Enterprise',
//     'Refugees and Asylum Seekers',
//     'Schools and Education',
//     'Environment',
//     'Women and Girls',
//     'Sports',
//     'LGBTIQ',
//     'Volunteering',
//     'Politics',
//     'Community',
//   ];

//   return (
//     <div className="w-full py-6 px-4 text-center">
//       {showCategories && (
//         <div className="flex flex-wrap justify-center gap-4 mb-6">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className="cursor-pointer bg-white text-neutral-800 font-semibold text-sm px-5 py-2 rounded-full shadow-md transition-all duration-200 border border-transparent hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500"
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       )}

//       <button
//         onClick={() => setShowCategories(!showCategories)}
//         className=" hover:outline-offset-2 hover:outline-blue-800 px-6 py-2 cursor-pointer hover:outline-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
//       >
//         {showCategories ? 'Show Less' : `+ ${categories.length} More`}
//       </button>
//     </div>
//   );
// };

// export default CategoriesSection;



import { useState } from "react";
import { ChevronDown } from "lucide-react";

const categories = [
  "Health and Medical",
  "Social Welfare",
  "International Development",
  "Social Enterprise",
  "Refugees and Asylum Seekers",
  "Schools and Education",
  "Environment",
  "Women and Girls",
  "Sports",
  "LGBTIQ",
  "Volunteering",
  "Politics",
  "Community",
];

const CategoriesSection = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="w-full py-6 px-4 text-center">
      {/* Always rendered so    */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          showCategories ? "grid-rows-[1fr] opacity-100 mb-6" : "grid-rows-[0fr] opacity-0 mb-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-wrap justify-center gap-4 pt-1 pb-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`cursor-pointer bg-white text-neutral-800 font-semibold text-sm px-5 py-2 rounded-full shadow-md transition-all duration-300 ease-out border border-transparent hover:border-blue-400 hover:bg-blue-100 hover:text-blue-500 hover:scale-105 active:scale-95 ${
                  showCategories ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: showCategories ? `${index * 40}ms` : "0ms" }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCategories(!showCategories)}
        className="group inline-flex items-center gap-2 px-6 py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-md shadow-sm transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-[1.03] hover:shadow-md hover:shadow-blue-200 active:scale-95 hover:outline-2 hover:outline-offset-2 hover:outline-blue-800"
      >
        {showCategories ? "Show Less" : `+ ${categories.length} More`}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ease-out ${
            showCategories ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

export default CategoriesSection;