import React, { useState, useEffect } from "react";
import { getRandomPosition } from "../utils"; // Assuming you have this utility function

const ArchiveBlock = ({ id, imagePath, imgName, description }) => {
  const [imgPos, setImgPos] = useState(getRandomPosition()); // Initial random position
  const [dragging, setDragging] = useState(false); // Track dragging state
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Track the offset when dragging starts
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);

  console.log(imgPos);
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 780);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Mouse Down
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent any default behavior like text selection
    const rect = e.target.getBoundingClientRect();
    setDragging(true);
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle Mouse Move
  const handleMouseMove = (e) => {
    if (dragging) {
      setImgPos({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  // Handle Mouse Up
  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Handle Hover
  const handleMouseEnter = () => {
    if (isLargeScreen) setHovered(true);
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
        style={{ top: imgPos.y, left: imgPos.x, position: "absolute" }}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ArchiveBlock;
