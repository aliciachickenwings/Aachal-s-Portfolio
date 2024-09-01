import "../Styles/Home.css";
import Nav from "../Components/Nav";
import WorkTable from "../Components/WorkTable";
import DecoImages from "../Components/DecoImages";
import { useRef, useEffect, useState } from "react";
import downArrow from "../assets/website/down-arrow.png";
import Footer from "../Components/Footer";
import { gsap } from "gsap";

// Define the total number of images
const numberOfImages = 7; // Update this with the actual number of images

function Home() {
  /* const containerRef = useRef(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    let animationTimeout = null;
    let imageIndex = 1;

    function addNewItem(x, y) {
      const newItem = document.createElement("div");
      newItem.className = "effect-images-item";
      newItem.style.left = `${x - 25}px`; // Adjust positioning
      newItem.style.top = `${y - 25}px`; // Adjust positioning

      const img = document.createElement("img");
      img.src = `/assets/effect-images/img${imageIndex}.png`;
      newItem.appendChild(img);

      container.appendChild(newItem);
      manageItemLimit();

      // Increment the image index for the next item
      imageIndex = (imageIndex % numberOfImages) + 1;
    }

    function manageItemLimit() {
      while (container.children.length > 20) {
        container.removeChild(container.firstChild);
      }
    }

    function startAnimation() {
      if (currentlyPlaying || container.children.length === 0) return;

      setCurrentlyPlaying(true);

      gsap.fromTo(
        ".effect-images-item",
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.75,
          stagger: 0.05,
          onComplete: () => {
            container.innerHTML = ""; // Clear all items
            setCurrentlyPlaying(false);
          },
        }
      );
    }

    const handleMouseMove = (e) => {
      clearTimeout(animationTimeout);
      addNewItem(e.pageX, e.pageY);
      animationTimeout = setTimeout(startAnimation, 100);
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [currentlyPlaying]); */

  const handleWorkClick = () => {
    document
      .getElementById("table-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav />
      <div className="outer-wrapper">
        <div className="big-title">
          <h1>Aachal Shrestha</h1>
          <p>A blooming multimedia artist</p>
        </div>
        {/*         <div className="effect-images" ref={containerRef}></div> */}
        <a href="#table-container" onClick={handleWorkClick}>
          <img className="down-arrow" src={downArrow} alt="Down Arrow" />
        </a>
        <WorkTable />
      </div>
      <DecoImages className="deco" />
      <Footer />
    </div>
  );
}

export default Home;
