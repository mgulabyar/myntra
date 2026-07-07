// import React, { useState } from "react";
// import { Menu, X, Search } from "lucide-react";

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [showSuccess, setShowSuccess] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     setEmailError("");
//     setPasswordError("");
//     let hasError = false;

//     if (!email) {
//       setEmailError("Please enter your email.");
//       hasError = true;
//     } else if (!email.includes("@")) {
//       setEmailError("Please enter a valid email with '@'.");
//       hasError = true;
//     }

//     if (!password) {
//       setPasswordError("Please enter your password.");
//       hasError = true;
//     } else if (password.length < 8) {
//       setPasswordError("Password must be at least 8 characters long.");
//       hasError = true;
//     }

//     if (hasError) return;
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     0.
//     setIsLoggedIn(true);
//     setShowModal(false);
//     setShowSuccess(true);
//     setEmail("");
//     setPassword("");

//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 3000);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setIsOpen(false);
//   };

//   const navLinks = [
//     { label: "Mission", href: "#" },
//     { label: "How it works", href: "#" },
//     { label: "ChuffedAmplify", href: "#" },
//     { label: "Discover", href: "#" },
//     { label: "Feature", href: "#" },
//     { label: "Pricing", href: "#" },
//   ];

//   return (
//     <>
//       {showSuccess && (
//         <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 font-semibold px-6 py-3 rounded shadow z-[100] animate-bounce">
//            Successfully Logged In!
//         </div>
//       )}

//       <nav className="sticky top-0 bg-white shadow-md  w-full z-50">
//         <div className="max-w-7xl mx-auto px-1 py-5 flex justify-between items-center">
//           <svg className="header__svg-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.52 131.78667" height="35.787" width="45.52"><path d="M.234 22.756v-.095c0-7.268 5.56-13.254 13.352-13.254 4.8 0 7.79 1.615 10.166 4.276l-4.418 4.75c-1.616-1.71-3.23-2.8-5.796-2.8-3.61 0-6.176 3.182-6.176 6.936v.095c0 3.897 2.518 7.03 6.463 7.03 2.42 0 4.085-1.044 5.843-2.706l4.228 4.276c-2.472 2.708-5.322 4.656-10.404 4.656-7.65 0-13.258-5.892-13.258-13.162M24.797.663h7.22v12.83c1.665-2.14 3.8-4.087 7.46-4.087 5.464 0 8.646 3.61 8.646 9.455v16.486h-7.22V21.14c0-3.42-1.616-5.18-4.37-5.18-2.757 0-4.515 1.76-4.515 5.18v14.206h-7.22V.663M50.404 26.367V9.88h7.22v14.207c0 3.42 1.616 5.178 4.373 5.178 2.754 0 4.51-1.757 4.51-5.178V9.88h7.224v25.466H66.51v-3.61c-1.663 2.138-3.8 4.086-7.46 4.086-5.463 0-8.644-3.61-8.644-9.454M78.576 16.056H75.58v-5.938h2.996V8.502c0-2.802.712-4.845 2.042-6.175C81.948.995 83.898.33 86.46.33c2.282 0 3.804.286 5.134.714V7.03c-1.047-.38-2.044-.617-3.277-.617-1.666 0-2.614.854-2.614 2.755v.998h5.844v5.89h-5.75v19.29h-7.22v-19.29M96.08 16.056h-2.994v-5.938h2.993V8.502c0-2.802.713-4.845 2.044-6.175C99.454.995 101.4.33 103.968.33c2.28 0 3.8.286 5.133.714V7.03c-1.046-.38-2.044-.617-3.28-.617-1.662 0-2.613.854-2.613 2.755v.998h5.844v5.89h-5.747v19.29H96.08v-19.29"></path><path d="M125.44 20.618c-.425-3.232-2.327-5.417-5.368-5.417-2.993 0-4.94 2.14-5.51 5.418zm-17.957 2.137v-.095c0-7.27 5.177-13.255 12.588-13.255 8.505 0 12.402 6.604 12.402 13.827 0 .568-.047 1.234-.097 1.9h-17.72c.713 3.277 2.993 4.987 6.224 4.987 2.423 0 4.18-.76 6.176-2.612l4.133 3.656c-2.375 2.947-5.8 4.752-10.405 4.752-7.653 0-13.303-5.368-13.303-13.16M153.47 22.66v-.094c0-4.23-2.804-7.032-6.176-7.032-3.373 0-6.224 2.756-6.224 7.032v.095c0 4.23 2.852 7.032 6.224 7.032 3.372 0 6.177-2.802 6.177-7.03zm-19.62 0v-.094c0-8.505 5.555-13.16 11.59-13.16 3.85 0 6.224 1.756 7.934 3.8V.66h7.223v34.683h-7.223v-3.657c-1.757 2.375-4.18 4.133-7.933 4.133-5.937 0-11.59-4.656-11.59-13.16"></path><path d="M162.118 50.73c0 44.767-36.292 81.057-81.058 81.057C36.292 131.787 0 95.497 0 50.73h162.118" fill="#54A7DD"></path></svg>

//           <div className="hidden md:flex text-sm space-x-6 text-gray-700 font-medium">
//             {navLinks.slice(0, 4).map((link) => (
//               <a key={link.label} href={link.href} className="hover:text-blue-500">
//                 {link.label}
//               </a>
//             ))}
//             <a href="#" className="hover:text-blue-500 flex gap-1 items-center">
//               Search <Search className="w-4 h-4" />
//             </a>
//           </div>

//           <div className="flex items-center text-sm font-semibold text-[#333333] space-x-4">
//             {navLinks.slice(4).map((link) => (
//               <a key={link.label} href={link.href} className="hidden lg:block hover:text-blue-500">
//                 {link.label}
//               </a>
//             ))}
//             <button className="hidden  hover:outline-2 hover:outline-offset-2 hover:outline-pink-800 cursor-pointer lg:block bg-[#e444a0] hover:bg-pink-700 text-white rounded-md px-4 py-2">
//               Get Funding
//             </button>

//             {!isLoggedIn ? (
//               <button
//                 onClick={() => setShowModal(true)}
//                 className=" hover:outline-2 hover:outline-offset-2 hover:outline-blue-800 hidden cursor-pointer md:block bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-sm"
//               >
//                 Login
//               </button>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="hidden cursor-pointer md:block bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-md"
//               >
//                 Logout
//               </button>
//             )}

//             <Search className="md:hidden w-4 h-4 text-gray-600 cursor-pointer" />
//             <button onClick={toggleMenu} className="md:hidden flex flex-col items-center text-xs">
//               {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
//               {isOpen ? "Close" : "Menu"}
//             </button>
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden flex flex-col items-start px-8 text-gray-600 font-bold bg-white shadow-md py-4 space-y-3">
//             {[...navLinks, { label: "Get Funding", href: "#" }].map((link) => (
//               <React.Fragment key={link.label}>
//                 <a
//                   href={link.href}
//                   className="hover:text-blue-500"
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//                 <hr className="w-full border-gray-300" />
//               </React.Fragment>
//             ))}
//             {!isLoggedIn ? (
//               <button
//                 onClick={() => {
//                   setShowModal(true);
//                   setIsOpen(false);
//                 }}
//                 className="hover:text-blue-500"
//               >
//                 Login
//               </button>
//             ) : (
//               <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
//                 Logout
//               </button>
//             )}
//           </div>
//         )}

//         {showModal && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-xl font-semibold mb-4">Login</h2>
//               <form onSubmit={handleLogin} className="space-y-4">
//                 <div>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className={`w-full border ${
//                       emailError ? "border-red-500" : "border-gray-300"
//                     } p-2 rounded-md focus:outline-none focus:ring-2 ${
//                       emailError ? "focus:ring-red-400" : "focus:ring-blue-400"
//                     }`}
//                   />
//                   {emailError && (
//                     <p className="text-red-500 text-xs mt-1">{emailError}</p>
//                   )}
//                 </div>

//                 <div>
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className={`w-full border ${
//                       passwordError ? "border-red-500" : "border-gray-300"
//                     } p-2 rounded-md focus:outline-none focus:ring-2 ${
//                       passwordError ? "focus:ring-red-400" : "focus:ring-blue-400"
//                     }`}
//                   />
//                   {passwordError && (
//                     <p className="text-red-500 text-xs mt-1">{passwordError}</p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
//                 >
//                   Submit
//                 </button>
//               </form>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="mt-4 text-sm text-gray-500 cursor-pointer hover:underline"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // controls enter/exit animation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Scroll listener for a subtle premium depth effect on the navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal || isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal, isOpen]);

  useEffect(() => {
    if (showModal) {
      const id = requestAnimationFrame(() => setModalVisible(true));
      return () => cancelAnimationFrame(id);
    } else {
      setModalVisible(false);
    }
  }, [showModal]);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => setShowModal(false), 200);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showModal, closeModal]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");
    let hasError = false;

    if (!email) {
      setEmailError("Please enter your email.");
      hasError = true;
    } else if (!email.includes("@")) {
      setEmailError("Please enter a valid email with '@'.");
      hasError = true;
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      hasError = true;
    }

    if (hasError) return;

    setIsLoggedIn(true);
    closeModal();
    setShowSuccess(true);
    setEmail("");
    setPassword("");

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Mission", href: "#" },
    { label: "How it works", href: "#" },
    { label: "ChuffedAmplify", href: "#" },
    { label: "Discover", href: "#" },
    { label: "Feature", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <>
      {/* Success toast */}
      <div
        className={`fixed top-20 left-1/2 -translate-x-1/2 bg-green-100 border border-green-400 text-green-800 font-semibold px-6 py-3 rounded-lg shadow-lg z-[100] transition-all duration-300 ease-out ${
          showSuccess
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        Successfully Logged In!
      </div>

      <nav
        className={`sticky top-0 bg-white/95 backdrop-blur-sm w-full z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <a href="#" className="shrink-0 transition-transform duration-200 hover:scale-105">
            <svg
              className="header__svg-logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 162.52 131.78667"
              height="32"
              width="42"
            >
              <path d="M.234 22.756v-.095c0-7.268 5.56-13.254 13.352-13.254 4.8 0 7.79 1.615 10.166 4.276l-4.418 4.75c-1.616-1.71-3.23-2.8-5.796-2.8-3.61 0-6.176 3.182-6.176 6.936v.095c0 3.897 2.518 7.03 6.463 7.03 2.42 0 4.085-1.044 5.843-2.706l4.228 4.276c-2.472 2.708-5.322 4.656-10.404 4.656-7.65 0-13.258-5.892-13.258-13.162M24.797.663h7.22v12.83c1.665-2.14 3.8-4.087 7.46-4.087 5.464 0 8.646 3.61 8.646 9.455v16.486h-7.22V21.14c0-3.42-1.616-5.18-4.37-5.18-2.757 0-4.515 1.76-4.515 5.18v14.206h-7.22V.663M50.404 26.367V9.88h7.22v14.207c0 3.42 1.616 5.178 4.373 5.178 2.754 0 4.51-1.757 4.51-5.178V9.88h7.224v25.466H66.51v-3.61c-1.663 2.138-3.8 4.086-7.46 4.086-5.463 0-8.644-3.61-8.644-9.454M78.576 16.056H75.58v-5.938h2.996V8.502c0-2.802.712-4.845 2.042-6.175C81.948.995 83.898.33 86.46.33c2.282 0 3.804.286 5.134.714V7.03c-1.047-.38-2.044-.617-3.277-.617-1.666 0-2.614.854-2.614 2.755v.998h5.844v5.89h-5.75v19.29h-7.22v-19.29M96.08 16.056h-2.994v-5.938h2.993V8.502c0-2.802.713-4.845 2.044-6.175C99.454.995 101.4.33 103.968.33c2.28 0 3.8.286 5.133.714V7.03c-1.046-.38-2.044-.617-3.28-.617-1.662 0-2.613.854-2.613 2.755v.998h5.844v5.89h-5.747v19.29H96.08v-19.29" />
              <path d="M125.44 20.618c-.425-3.232-2.327-5.417-5.368-5.417-2.993 0-4.94 2.14-5.51 5.418zm-17.957 2.137v-.095c0-7.27 5.177-13.255 12.588-13.255 8.505 0 12.402 6.604 12.402 13.827 0 .568-.047 1.234-.097 1.9h-17.72c.713 3.277 2.993 4.987 6.224 4.987 2.423 0 4.18-.76 6.176-2.612l4.133 3.656c-2.375 2.947-5.8 4.752-10.405 4.752-7.653 0-13.303-5.368-13.303-13.16M153.47 22.66v-.094c0-4.23-2.804-7.032-6.176-7.032-3.373 0-6.224 2.756-6.224 7.032v.095c0 4.23 2.852 7.032 6.224 7.032 3.372 0 6.177-2.802 6.177-7.03zm-19.62 0v-.094c0-8.505 5.555-13.16 11.59-13.16 3.85 0 6.224 1.756 7.934 3.8V.66h7.223v34.683h-7.223v-3.657c-1.757 2.375-4.18 4.133-7.933 4.133-5.937 0-11.59-4.656-11.59-13.16" />
              <path
                d="M162.118 50.73c0 44.767-36.292 81.057-81.058 81.057C36.292 131.787 0 95.497 0 50.73h162.118"
                fill="#54A7DD"
              />
            </svg>
          </a>

          {/* Center links (desktop) */}
          <div className="hidden md:flex text-sm space-x-6 text-gray-700 font-medium">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="relative py-1 flex gap-1 items-center transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Search <Search className="w-4 h-4" />
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center text-sm font-semibold text-[#333333] space-x-3 sm:space-x-4">
            {navLinks.slice(4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hidden lg:block relative py-1 transition-colors duration-200 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            <button className="hidden lg:block cursor-pointer bg-[#e444a0] hover:bg-pink-700 text-white rounded-md px-4 py-2 transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:shadow-pink-200 active:scale-95 hover:outline-2 hover:outline-offset-2 hover:outline-pink-800">
              Get Funding
            </button>

            {!isLoggedIn ? (
              <button
                onClick={() => setShowModal(true)}
                className="hidden md:block cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-md transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:shadow-blue-200 active:scale-95 hover:outline-2 hover:outline-offset-2 hover:outline-blue-800"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="hidden md:block cursor-pointer bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-md transition-all duration-200 hover:scale-[1.03] hover:shadow-md hover:shadow-red-200 active:scale-95"
              >
                Logout
              </button>
            )}

            <Search className="md:hidden w-4 h-4 text-gray-600 cursor-pointer transition-transform duration-200 hover:scale-110" />

            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col items-center text-xs cursor-pointer transition-transform duration-200 active:scale-90"
            >
              <span className="transition-transform duration-300">
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </span>
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile menu - smooth slide down */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-white shadow-md ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-start px-8 text-gray-600 font-bold py-4 space-y-3">
            {[...navLinks, { label: "Get Funding", href: "#" }].map((link, i) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  className="w-full transition-colors duration-200 hover:text-blue-500 hover:translate-x-1 transform"
                  style={{ transitionDelay: isOpen ? `${i * 30}ms` : "0ms" }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
                <hr className="w-full border-gray-200" />
              </React.Fragment>
            ))}
            {!isLoggedIn ? (
              <button
                onClick={() => {
                  setShowModal(true);
                  setIsOpen(false);
                }}
                className="transition-colors duration-200 hover:text-blue-500"
              >
                Login
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="text-red-500 transition-colors duration-200 hover:text-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        {/* Login modal */}
        {showModal && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-200 ${
              modalVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`bg-white p-6 rounded-xl shadow-2xl w-[90%] max-w-sm transition-all duration-200 ease-out ${
                modalVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
              }`}
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border ${
                      emailError ? "border-red-500" : "border-gray-300"
                    } p-2.5 rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
                      emailError ? "focus:ring-red-400" : "focus:ring-blue-400"
                    }`}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1 transition-opacity duration-200">{emailError}</p>
                  )}
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full border ${
                      passwordError ? "border-red-500" : "border-gray-300"
                    } p-2.5 rounded-md focus:outline-none focus:ring-2 transition-all duration-200 ${
                      passwordError ? "focus:ring-red-400" : "focus:ring-blue-400"
                    }`}
                  />
                  {passwordError && (
                    <p className="text-red-500 text-xs mt-1 transition-opacity duration-200">{passwordError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-blue-500 text-white py-2.5 rounded-md hover:bg-blue-600 transition-all duration-200 hover:shadow-md hover:shadow-blue-200 active:scale-[0.98]"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={closeModal}
                className="mt-4 text-sm text-gray-500 cursor-pointer hover:underline transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
