import React from "react";

const Header = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    anchorId: string
  ) => {
    e.preventDefault();
    document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="logo">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-xl font-bold text-gray-900"
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
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    {anchorId
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
