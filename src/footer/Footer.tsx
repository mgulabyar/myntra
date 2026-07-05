const Footer = () => {
  return (
    <div className="bg-[#414141] text-white px-8 md:px-20 py-12 text-sm">
      {/* Grid Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Mission</span>
          <a className="py-2 hover:underline" href="https://chuffed.org/about">Our Story</a>
          <a className="py-2 hover:underline" href="https://apply.workable.com/chuffed/">Careers</a>

          <span className="text-md font-semibold py-5">How it works</span>
          <a className="py-1 hover:underline" href="https://chuffed.org/academy">The Crowdfunding Academy</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/how-it-works-crowdfunding/before-you-start">The Crowdfunding Guide</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/academy#video">Video Series</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/academy#events">Community Workshops</a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Explore Issues</span>
          {[
            'All Issues',
            'Health and Medical',
            'First Nations',
            'Social Welfare',
            'International Development',
            'Animals',
            'Social Enterprise',
            'Refugees and Asylum Seekers',
            'Environment',
            'Schools and Education',
            'Women and Girls',
            'Sports',
            'LGBTIQA+',
            'Volunteering',
            'Politics',
            'Community',
          ].map((issue, index) => (
            <a
              key={index}
              className="py-1 hover:underline"
              href={`https://chuffed.org/discover${issue === 'All Issues' ? '' : `?categories[]=${encodeURIComponent(issue)}`}`}
            >
              {issue}
            </a>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Features</span>
          <a className="py-1 hover:underline" href="https://chuffed.org/features/feature-overview">Crowdfunding</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/pricing">How Much It Costs</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/compare">Compare Us</a>

          <span className="text-md font-semibold py-5">Stay Updated</span>
          <a className="py-1 hover:underline" href="https://chuffed.org/blog">Blog</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/press">News Stories</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col">
          <span className="text-md font-semibold py-5">Help</span>
          <a className="py-1 hover:underline" href="https://docs.chuffed.org/">FAQs</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/report-campaign">Report a Campaign</a>
          <a
            href="https://docs.chuffed.org/"
            className="border border-white px-8 w-fit py-3 my-4 rounded-full hover:bg-gray-600 transition hover:underline text-center"
          >
            Ask Chuffed
          </a>
          <a className="py-1 hover:underline" href="https://chuffed.org/terms-conditions">Terms & Conditions</a>
          <a className="py-1 hover:underline" href="https://chuffed.org/privacy">Privacy Policy</a>
        </div>
      </div>

      {/* Language Selector */}
     
    <div className="flex flex-col mt-12 space-y-2">
  <label className="font-medium">Language</label>
  <div className="relative inline-block w-64"> {/* 👈 Wider now (w-64 = 16rem) */}
    <select
      className="custom-select cursor-pointer w-full px-4 py-2 border border-white text-white bg-[#434343] rounded-full appearance-none pr-10 focus:outline-none focus:ring-1 focus:ring-white"
    >
      <option value="english">English</option>
      <option value="deutsch">Deutsch</option>
      <option value="francais">Français</option>
      <option value="italiano">Italiano</option>
    </select>

    {/* ⬇ Down Arrow Icon */}
    <div className="pointer-events-none absolute inset-y-0 rotate-90 right-0 flex items-center px-3 text-white">
      <svg className="w-4 h-4 transform rotate-90 fill-current" viewBox="0 0 20 20">
        <path d="M7.293 14.707a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 10.414l-4.707 4.293z" />
      </svg>
    </div>
  </div>
</div>

    

      {/* Divider */}
      <hr className="w-full mt-20 border-gray-300" />

      {/* Bottom Footer */}
      <div className="text-white px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-sm">©2025 We are a Social Enterprise</div>

        {/* Logo */}
        <div className="w-10">
          <a href="/">
            <svg
              className="w-full fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162.52 131.78667"
            >
              {/* Path contents omitted for brevity */}
              <path d="M.234 22.756v-.095c0-7.268 5.56-13.254 ..." />
              <path d="M125.44 20.618c-.425-3.232-2.327 ..." />
              <path d="M162.118 50.73c0 44.767-36.292 81.057 ..." />
            </svg>
          </a>
        </div>

        {/* Social Icons */}
       <div className="flex gap-6 items-center mt-6">
  {/* Email */}
  <a href="mailto:info@example.com" target="_blank" rel="noopener noreferrer">
    <svg className="w-6 h-6 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  </a>

  {/* Twitter */}
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <svg className="w-6 h-6 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9 12.13 12.13 0 0 1-8.64-4.29 4.28 4.28 0 0 0 1.32 5.71 4.24 4.24 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.96 8.59 8.59 0 0 1-5.31 1.83A8.66 8.66 0 0 1 2 19.54a12.1 12.1 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53a8.36 8.36 0 0 0 2.06-2.12z" />
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <svg className="w-4 h-4 hover:scale-110 transition-transform duration-200" fill="white" viewBox="0 0 24 24">
      <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.495V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
    </svg>
  </a>
</div>

       
      </div>
    </div>
  );
};

export default Footer;


