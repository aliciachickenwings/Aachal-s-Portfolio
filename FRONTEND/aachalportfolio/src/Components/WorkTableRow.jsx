import { getMainImage } from "../utils.js";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/WorkTable.css";

const WorkTableRow = ({ id, name, year, tags, mainTag }) => {
  const navigate = useNavigate();
  const imgPath = getMainImage(name);

  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);

  const clickOnWork = (id) => {
    navigate(`/work/${id}`);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 780);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    if (isLargeScreen) setHovered(true);
  };

  const handleMouseMove = (e) => {
    if (isLargeScreen) setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) setHovered(false);
  };

  return (
    <tr
      key={id}
      className="work-item"
      onClick={() => clickOnWork(id)}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <td colSpan="3">
        <div className="work-item-info">
          <h2>{name}</h2>
          <span>{mainTag}</span>
          <span>{year}</span>
        </div>
        <div className="border-bottom">
          {isLargeScreen ? (
            hovered && (
              <img
                id={`main-img-${id}`}
                className="work-img-hover"
                src={imgPath}
                alt={name}
                style={{
                  position: "fixed", // Use fixed to avoid clipping,
                  left: mousePosition.x + 200,
                  top: mousePosition.y - 70,
                  zIndex: 1000,
                }}
              />
            )
          ) : (
            <img
              id={`main-img-${id}`}
              className="work-img-normal"
              src={imgPath}
              alt={name}
              style={{
                display: "block",
                width: "100%", // Adjust as needed
              }}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default WorkTableRow;
