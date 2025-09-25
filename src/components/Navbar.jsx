function Navbar({ scrollToSection, refs }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex gap-6 z-50">
      <button
        onClick={() => scrollToSection(refs.homeRef)}
        className="hover:text-green-500 transition-colors duration-300"
      >
        Home
      </button>
      <button
        onClick={() => scrollToSection(refs.aboutRef)}
        className="hover:text-green-500 transition-colors duration-300"
      >
        About
      </button>
      <button
        onClick={() => scrollToSection(refs.projectsRef)}
        className="hover:text-green-500 transition-colors duration-300"
      >
        Skills
      </button>
      <button
        onClick={() => scrollToSection(refs.contactRef)}
        className="hover:text-green-500 transition-colors duration-300"
      >
        Contact
      </button>
    </nav>
  );
}

export default Navbar;





// const Navbar = () => {
//     return (
//         <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg ">
//             <div className="max-w-5xl mx-auto px-4">
//                 <div className="flex justify-between itmes-center h-16">
//                     <a> f</a>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;