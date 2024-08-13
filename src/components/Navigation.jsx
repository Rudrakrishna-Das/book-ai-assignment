import { useState } from "react";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="bg-[#1e293b] py-6 sticky top-0 max-md:py-2">
      <ul className="flex gap-10 text-[#e2e8f0] justify-center max-md:gap-4 max-md:flex-col max-md:items-center">
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "overview" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a href="#overview" onClick={() => handleClick("overview")}>
            OVERVIEW
          </a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "authentication" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a
            href="#authentication"
            onClick={() => handleClick("authentication")}
          >
            AUTHENTICATION
          </a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "endpoints" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a href="#endpoints" onClick={() => handleClick("endpoints")}>
            ENDPOINTS
          </a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "tutorial" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a href="#tutorial" onClick={() => handleClick("tutorial")}>
            TUTORIAL
          </a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "code-examples" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a href="#code-examples" onClick={() => handleClick("code-examples")}>
            CODE EXAMPLES
          </a>
        </li>
        <li
          className={`cursor-pointer hover:text-[#22d3ee] ${
            activeLink === "pricing" ? "text-[#22d3ee]" : ""
          }`}
        >
          <a href="#pricing" onClick={() => handleClick("pricing")}>
            PRICING
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
