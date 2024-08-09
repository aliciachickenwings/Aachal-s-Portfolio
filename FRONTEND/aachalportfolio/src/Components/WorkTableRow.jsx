import { getMainImage } from "../utils.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/WorkTable.css";

const WorkTableRow = ({ id, name, year, tags, mainTag }) => {
  const navigate = useNavigate();
  const imgPath = getMainImage(name);

  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const clickOnWork = (id) => {
    navigate(`/work/${id}`);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
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
          {hovered && (
            <img
              id={`main-img-${id}`}
              className="work-img-hover"
              src={imgPath}
              alt={name}
              style={{
                position: "fixed", // Use fixed to avoid clipping,
                left: mousePosition.x + 200,
                top: mousePosition.y - 50,
                zIndex: 1000,
              }}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default WorkTableRow;
