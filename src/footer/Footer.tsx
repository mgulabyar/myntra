// const Footer = () => {
//   return (
//     <div className="bg-[#414141] text-white px-8 md:px-20 py-12 text-sm">
//       {/* Grid Columns */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Column 1 */}
//         <div className="flex flex-col">
//           <span className="text-md font-semibold py-5">Mission</span>
//           <a className="py-2 hover:underline" href="https://chuffed.org/about">Our Story</a>
//           <a className="py-2 hover:underline" href="https://apply.workable.com/chuffed/">Careers</a>

//           <span className="text-md font-semibold py-5">How it works</span>
//           <a className="py-1 hover:underline" href="https://chuffed.org/academy">The Crowdfunding Academy</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/how-it-works-crowdfunding/before-you-start">The Crowdfunding Guide</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/academy#video">Video Series</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/academy#events">Community Workshops</a>
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col">
//           <span className="text-md font-semibold py-5">Explore Issues</span>
//           {[
//             'All Issues',
//             'Health and Medical',
//             'First Nations',
//             'Social Welfare',
//             'International Development',
//             'Animals',
//             'Social Enterprise',
//             'Refugees and Asylum Seekers',
//             'Environment',
//             'Schools and Education',
//             'Women and Girls',
//             'Sports',
//             'LGBTIQA+',
//             'Volunteering',
//             'Politics',
//             'Community',
//           ].map((issue, index) => (
//             <a
//               key={index}
//               className="py-1 hover:underline"
//               href={`https://chuffed.org/discover${issue === 'All Issues' ? '' : `?categories[]=${encodeURIComponent(issue)}`}`}
//             >
//               {issue}
//             </a>
//           ))}
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col">
//           <span className="text-md font-semibold py-5">Features</span>
//           <a className="py-1 hover:underline" href="https://chuffed.org/features/feature-overview">Crowdfunding</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/pricing">How Much It Costs</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/compare">Compare Us</a>

//           <span className="text-md font-semibold py-5">Stay Updated</span>
//           <a className="py-1 hover:underline" href="https://chuffed.org/blog">Blog</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/press">News Stories</a>
//         </div>

//         {/* Column 4 */}
//         <div className="flex flex-col">
//           <span className="text-md font-semibold py-5">Help</span>
//           <a className="py-1 hover:underline" href="https://docs.chuffed.org/">FAQs</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/report-campaign">Report a Campaign</a>
//           <a
//             href="https://docs.chuffed.org/"
//             className="border border-white px-8 w-fit py-3 my-4 rounded-full hover:bg-gray-600 transition hover:underline text-center"
//           >
//             Ask Chuffed
//           </a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/terms-conditions">Terms & Conditions</a>
//           <a className="py-1 hover:underline" href="https://chuffed.org/privacy">Privacy Policy</a>
//         </div>
//       </div>

//       {/* Language Selector */}
     
//     <div className="flex flex-col mt-12 space-y-2">
//   <label className="font-medium">Language</label>
//   <div className="relative inline-block w-64"> {/* 👈 Wider now (w-64 = 16rem) */}
//     <select
//       className="custom-select cursor-pointer w-full px-4 py-2 border border-white text-white bg-[#434343] rounded-full appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-white"
//     >
//       <option value="english">English</option>
//       <option value="deutsch">Deutsch</option>
//       <option value="francais">Français</option>
//       <option value="italiano">Italiano</option>
//     </select>

//     {/* ⬇ Down Arrow Icon */}
//     <div className="pointer-events-none absolute inset-y-0 rotate-90 right-0 flex items-center px-3 text-white">
//       <svg className="w-4 h-4 transform rotate-90 fill-current" viewBox="0 0 20 20">
//         <path d="M7.293 14.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 10.414l-4.707 4.293z" />
//       </svg>
//     </div>
//   </div>
// </div>

    

//       {/* Divider */}
//       <hr className="w-full mt-20 border-gray-300" />

//       {/* Bottom Footer */}
//       <div className="text-white px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
//         {/* Copyright */}
//         <div className="text-sm">©2025 We are a Social Enterprise</div>

//         {/* Logo */}
//         <div className="w-10">
//           <a href="/">
//             <svg
//               className="w-full fill-white"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 162.52 131.78667"
//             >
//               {/* Path contents omitted for brevity */}
//               <path d="M.234 22.756v-.095c0-7.268 5.56-13.254 ..." />
//               <path d="M125.44 20.618c-.425-3.232-2.327 ..." />
//               <path d="M162.118 50.73c0 44.767-36.292 81.057 ..." />
//             </svg>
//           </a>
//         </div>

//         {/* Social Icons */}
//        <div className="flex gap-6 items-center mt-6">
//   {/* Email */}
//   <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
//     <svg className="w-6 h-6 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
//       <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
//     </svg>
//   </a>

//   {/* Twitter */}
//   <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//     <svg className="w-6 h-6 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
//       <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9 12.13 12.13 0 0 1-8.64-4.29 4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.96 8.59 8.59 0 0 1-5.31 1.83A8.66 8.66 0 0 1 2 19.54a12.1 12.1 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53a8.36 8.36 0 0 0 2.06-2.12z" />
//     </svg>
//   </a>

//   {/* Facebook */}
//   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//     <svg className="w-4 h-4 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
//       <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
//     </svg>
//   </a>
// </div>

       
//       </div>
//     </div>
//   );
// };

// export default Footer;




import { useEffect, useRef, useState } from "react";

const issues = [
  "All Issues",
  "Health and Medical",
  "First Nations",
  "Social Welfare",
  "International Development",
  "Animals",
  "Social Enterprise",
  "Refugees and Asylum Seekers",
  "Environment",
  "Schools and Education",
  "Women and Girls",
  "Sports",
  "LGBTIQA+",
  "Volunteering",
  "Politics",
  "Community",
];

const linkClass =
  "py-1 transition-colors duration-200 hover:text-[#ff8fce] hover:underline underline-offset-4 w-fit";

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={footerRef}
      className={`bg-[#414141] text-white px-8 md:px-20 py-12 text-sm transition-opacity duration-700 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Grid Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Mission</span>
          <a className={linkClass} href="https://chuffed.org/about">Our Story</a>
          <a className={linkClass} href="https://apply.workable.com/chuffed/">Careers</a>

          <span className="text-md font-semibold py-5">How it works</span>
          <a className={linkClass} href="https://chuffed.org/academy">The Crowdfunding Academy</a>
          <a className={linkClass} href="https://chuffed.org/how-it-works-crowdfunding/before-you-start">
            The Crowdfunding Guide
          </a>
          <a className={linkClass} href="https://chuffed.org/academy#video">Video Series</a>
          <a className={linkClass} href="https://chuffed.org/academy#events">Community Workshops</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Explore Issues</span>
          {issues.map((issue) => (
            <a
              key={issue}
              className={linkClass}
              href={`https://chuffed.org/discover${
                issue === "All Issues" ? "" : `?categories[]=${encodeURIComponent(issue)}`
              }`}
            >
              {issue}
            </a>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Features</span>
          <a className={linkClass} href="https://chuffed.org/features/feature-overview">Crowdfunding</a>
          <a className={linkClass} href="https://chuffed.org/pricing">How Much It Costs</a>
          <a className={linkClass} href="https://chuffed.org/compare">Compare Us</a>

          <span className="text-md font-semibold py-5">Stay Updated</span>
          <a className={linkClass} href="https://chuffed.org/blog">Blog</a>
          <a className={linkClass} href="https://chuffed.org/press">News Stories</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Help</span>
          <a className={linkClass} href="https://docs.chuffed.org/">FAQs</a>
          <a className={linkClass} href="https://chuffed.org/report-campaign">Report a Campaign</a>
          <a
            href="https://docs.chuffed.org/"
            className="border border-white px-8 w-fit py-3 my-4 rounded-full text-center transition-all duration-300 ease-out hover:bg-white hover:text-[#414141] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Ask Chuffed
          </a>
          <a className={linkClass} href="https://chuffed.org/terms-conditions">Terms &amp; Conditions</a>
          <a className={linkClass} href="https://chuffed.org/privacy">Privacy Policy</a>
        </div>
      </div>

      {/* Language Selector */}
      <div className="flex flex-col mt-12 space-y-2">
        <label className="font-medium">Language</label>
        <div className="relative inline-block w-64">
          <select className="custom-select cursor-pointer w-full px-4 py-2 border border-white text-white bg-[#434343] rounded-full appearance-none pr-10 transition-colors duration-200 hover:border-[#ff8fce] focus:outline-none focus:ring-1 focus:ring-white">
            <option value="english">English</option>
            <option value="deutsch">Deutsch</option>
            <option value="francais">Français</option>
            <option value="italiano">Italiano</option>
          </select>

          {/* Down arrow icon - single rotation, no double-transform */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white">
            <svg className="w-4 h-4 rotate-180 fill-current" viewBox="0 0 20 20">
              <path d="M7.293 14.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 10.414l-4.707 4.293z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full mt-20 border-gray-500/50" />

      {/* Bottom Footer */}
      <div className="text-white px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-sm">©2025 We are a Social Enterprise</div>

        {/* Logo */}
        <div className="w-10 transition-transform duration-200 hover:scale-105">
          <a href="/">
            <svg className="w-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.52 131.78667">
              <path d="M.234 22.756v-.095c0-7.268 5.56-13.254 13.352-13.254 4.8 0 7.79 1.615 10.166 4.276l-4.418 4.75c-1.616-1.71-3.23-2.8-5.796-2.8-3.61 0-6.176 3.182-6.176 6.936v.095c0 3.897 2.518 7.03 6.463 7.03 2.42 0 4.085-1.044 5.843-2.706l4.228 4.276c-2.472 2.708-5.322 4.656-10.404 4.656-7.65 0-13.258-5.892-13.258-13.162M24.797.663h7.22v12.83c1.665-2.14 3.8-4.087 7.46-4.087 5.464 0 8.646 3.61 8.646 9.455v16.486h-7.22V21.14c0-3.42-1.616-5.18-4.37-5.18-2.757 0-4.515 1.76-4.515 5.18v14.206h-7.22V.663M50.404 26.367V9.88h7.22v14.207c0 3.42 1.616 5.178 4.373 5.178 2.754 0 4.51-1.757 4.51-5.178V9.88h7.224v25.466H66.51v-3.61c-1.663 2.138-3.8 4.086-7.46 4.086-5.463 0-8.644-3.61-8.644-9.454M78.576 16.056H75.58v-5.938h2.996V8.502c0-2.802.712-4.845 2.042-6.175C81.948.995 83.898.33 86.46.33c2.282 0 3.804.286 5.134.714V7.03c-1.047-.38-2.044-.617-3.277-.617-1.666 0-2.614.854-2.614 2.755v.998h5.844v5.89h-5.75v19.29h-7.22v-19.29M96.08 16.056h-2.994v-5.938h2.993V8.502c0-2.802.713-4.845 2.044-6.175C99.454.995 101.4.33 103.968.33c2.28 0 3.8.286 5.133.714V7.03c-1.046-.38-2.044-.617-3.28-.617-1.662 0-2.613.854-2.613 2.755v.998h5.844v5.89h-5.747v19.29H96.08v-19.29" />
              <path d="M125.44 20.618c-.425-3.232-2.327-5.417-5.368-5.417-2.993 0-4.94 2.14-5.51 5.418zm-17.957 2.137v-.095c0-7.27 5.177-13.255 12.588-13.255 8.505 0 12.402 6.604 12.402 13.827 0 .568-.047 1.234-.097 1.9h-17.72c.713 3.277 2.993 4.987 6.224 4.987 2.423 0 4.18-.76 6.176-2.612l4.133 3.656c-2.375 2.947-5.8 4.752-10.405 4.752-7.653 0-13.303-5.368-13.303-13.16M153.47 22.66v-.094c0-4.23-2.804-7.032-6.176-7.032-3.373 0-6.224 2.756-6.224 7.032v.095c0 4.23 2.852 7.032 6.224 7.032 3.372 0 6.177-2.802 6.177-7.03zm-19.62 0v-.094c0-8.505 5.555-13.16 11.59-13.16 3.85 0 6.224 1.756 7.934 3.8V.66h7.223v34.683h-7.223v-3.657c-1.757 2.375-4.18 4.133-7.933 4.133-5.937 0-11.59-4.656-11.59-13.16" />
              <path
                d="M162.118 50.73c0 44.767-36.292 81.057-81.058 81.057C36.292 131.787 0 95.497 0 50.73h162.118"
                fill="#54A7DD"
              />
            </svg>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 items-center">
          <a
            href="mailto:info@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-200 hover:scale-110 hover:text-[#ff8fce]"
            aria-label="Email"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-200 hover:scale-110 hover:text-[#ff8fce]"
            aria-label="Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9 12.13 12.13 0 0 1-8.64-4.29 4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.96 8.59 8.59 0 0 1-5.31 1.83A8.66 8.66 0 0 1 2 19.54a12.1 12.1 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53a8.36 8.36 0 0 0 2.06-2.12z" />
            </svg>
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-all duration-200 hover:scale-110 hover:text-[#ff8fce]"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;