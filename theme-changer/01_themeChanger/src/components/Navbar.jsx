import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext";

function Navbar() {
  const { theme, toggleThemeMode } = useTheme();
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Home</Link>
        <Link to={"/blog"}>Home</Link>
      </div>
      <div className="themeChanger">
        <label>
          <input
            type="checkbox"
            onChange={toggleThemeMode}
            checked={theme === "dark"}
          />
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
