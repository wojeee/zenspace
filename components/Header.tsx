import React from "react";

const Header = () => {
  // This function will handle the smooth scrolling
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchorId: string
  ) => {
    e.preventDefault();
    if (anchorId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">
        {/* Updated this part to handle click without using <Link> */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-xl font-bold cursor-pointer"
        >
          ZenSpace
        </a>
      </div>
      <nav>
        <ul className="flex space-x-4">
          {["features", "how-it-works", "pricing", "testimonials"].map(
            (anchorId) => (
              <li key={anchorId}>
                <a
                  href={`#${anchorId}`}
                  onClick={(e) => handleNavClick(e, anchorId)}
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  {anchorId
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
