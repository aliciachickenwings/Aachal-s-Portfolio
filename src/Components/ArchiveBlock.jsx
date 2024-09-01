import React, { useState, useEffect, useRef } from "react";
import { getRandomPosition } from "../utils"; // Assuming you have this utility function

const ArchiveBlock = ({ id, imagePath, imgName, description }) => {
  const [imgPos, setImgPos] = useState(getRandomPosition()); // Initial random position
  const [dragging, setDragging] = useState(false); // Track dragging state
  const [offset, setOffset] = useState({ x: 0, y: 0 }); // Track the offset when dragging starts
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 780);

  const draggableItem = useRef(null);

  console.log(imgPos);
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 780);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Hover
  const handleMouseEnter = (e) => {
    if (isLargeScreen) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (isLargeScreen) setHovered(false);
  };

  const handleMouseMove = (e) => {
    if (isLargeScreen) setHovered(true);
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    if (draggableItem.current) {
      dragElement(draggableItem.current);
    }
  }, []);

  function dragElement(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    if (draggableItem.current) {
      draggableItem.current.onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

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
        ref={draggableItem}
        style={{ top: imgPos.y, left: imgPos.x, position: "absolute" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
    </div>
  );
};

export default ArchiveBlock;
