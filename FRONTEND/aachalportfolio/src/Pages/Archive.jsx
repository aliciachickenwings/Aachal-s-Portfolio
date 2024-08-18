import "../Styles/Archive.css";

import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import ArchiveBlock from "../Components/ArchiveBlock";
import DecoImages from "../Components/DecoImages";
import Footer from "../Components/Footer";
import { getAllArchiveImages, getRandomPosition } from "../utils";

function Archive() {
  const [archive, setArchive] = useState(null);
  const [archiveImg, setArchiveImg] = useState([]);
  const [imagePos, setImgPos] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(
          `https://backend-aachal-portfolio191400.onrender.com/archive`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setArchive(result.data); // Assuming `data` is the correct path to your archive array
        console.log(result); // Log the result here
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };
    fetchWork();

    // Fetch all images
    const images = getAllArchiveImages();
    setArchiveImg(images);
  }, []); // The empty dependency array ensures this effect runs only once

  //DROPZONE
  const handleDrop = (e) => {
    e.preventDefault();

    // Get the dragged answer
    const droppedAnswer = e.dataTransfer.getData("text/plain");

    console.log("dropped");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="footer">
      <Nav></Nav>
      <div className="outer-wrapper">
        <DecoImages />

        <div
          className="archive-wrapper-inner"
          onDrop={(e) => handleDrop(e)}
          onDragOver={handleDragOver}
        >
          <div className="archive-title">
            <h2>Archive</h2>
            <p>
              {isLargeScreen
                ? "Here you can find some other work I've made in the past year, feel free to move the items around and discover my work!"
                : "Here you can find some other work I've made in the past years."}
            </p>
          </div>
          <div className="archive-img-container">
            {archive && archiveImg.length > 0 ? (
              archiveImg.map((imgPath, index) => {
                // Extract the image file name without extension
                const imgName = imgPath.split("/").pop().split(".")[0];
                const correspondingWork = archive.find((work) => {
                  return work.img_name === imgName;
                });

                console.log(correspondingWork, imgName);

                return correspondingWork ? (
                  isLargeScreen ? (
                    <ArchiveBlock
                      key={correspondingWork.id} // Added key prop
                      id={correspondingWork.id}
                      imagePath={imgPath}
                      imgName={imgName}
                      description={correspondingWork.description}
                    />
                  ) : (
                    <div
                      className="archive-img-item-mobile"
                      key={correspondingWork.id}
                    >
                      <div className="archive-img-item-mobile-inner">
                        <div>
                          <img
                            src={imgPath}
                            alt={correspondingWork.description}
                            className="archive-img-mobile"
                          />
                        </div>
                        <div className="archive-description-mobile">
                          <p>{correspondingWork.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  <div>Loading...</div>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Archive;
