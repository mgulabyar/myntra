import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      setShowModal(false);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
  <div className="flex items-center space-x-4">
    <svg
      className="w-[45px] h-[45px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 162.52 131.78667"
      fill="#000"
    >
      <path d="M.234 22.756v-.095c0-7.268..." />
      <path d="M125.44 20.618c-.425-3.232..." />
      <path d="M162.118 50.73c0 44.767..." fill="#54A7DD" />
    </svg>
    <div className="text-xl font-bold">My Navbar</div>
  </div>

  {/* Right Side */}
  {!isLoggedIn ? (
    <button
      onClick={() => setShowModal(true)}
      className="hidden md:block bg-gray-200 cursor-pointer text-[#333333] py-2 px-5 rounded-md hover:bg-gray-300 transition-all duration-200"
    >
      Login
    </button>
  ) : (
    <button
      onClick={handleLogout}
      className="hidden md:block bg-red-500 text-white py-2 px-5 rounded-md hover:bg-red-600 transition-all duration-200"
    >
      Logout
    </button>
  )}

  {/* Modal */}
  {showModal && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;

