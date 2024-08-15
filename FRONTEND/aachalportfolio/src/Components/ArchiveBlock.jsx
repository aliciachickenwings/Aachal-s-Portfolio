import React, { useState, useCallback } from "react";
import { getRandomPosition } from "../utils"; // Ensure you have this function available

const ArchiveBlock = ({ id, imagePath, imgName, description }) => {
  const [imgPos, setImgPos] = useState(getRandomPosition()); // Initial random position
  const [dragging, setDragging] = useState(false); // Track dragging state
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Track the offset when dragging starts

  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);
  //dragging
  const handleMouseDown = useCallback(
    (e) => {
      setDragging(true);
      setOffset({
        x: e.clientX - imgPos.x,
        y: e.clientY - imgPos.y,
      });
    },
    [imgPos]
  );

  const handleMouseMove = useCallback(
    (e) => {
      if (dragging) {
        setImgPos({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    },
    [dragging, offset]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  // Add mouse event listeners
  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, handleMouseMove, handleMouseUp]);

  //hovering div

  const handleMouseEnter = () => {
    if (isLargeScreen) setHovered(true);
    console.log("MOUSE ENTERED");
  };

  const handleMouseMoving = (e) => {
    if (isLargeScreen) setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) setHovered(false);
  };
  return (
    <div className="archive-item">
      <div className="archive-image-wrapper">
        {hovered ? (
          <div
            className="archive-description-hovered"
            style={{
              position: "absolute",
              top: mousePosition.y,
              left: mousePosition.x,
            }}
          >
            <p>{description}</p>
          </div>
        ) : (
          <div className="archive-description-normal">
            <p>{description}</p>
          </div>
        )}
      </div>
      <img
        src={imagePath}
        alt={description}
        className="archive-image"
        style={{ top: imgPos.y, left: imgPos.x, position: "absolute" }} // Ensure it's positioned absolutely
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMoving}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ArchiveBlock;
