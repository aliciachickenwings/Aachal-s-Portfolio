import "../Styles/Archive.css";

import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import ArchiveBlock from "../Components/ArchiveBlock";
import DecoImages from "../Components/DecoImages";
import { getAllArchiveImages, getRandomPosition } from "../utils";

function Archive() {
  const [archive, setArchive] = useState(null);
  const [archiveImg, setArchiveImg] = useState([]);
  const [imagePos, setImgPos] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(`http://localhost:3001/archive`);
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

  return (
    <div className="wrapper">
      <Nav />
      <DecoImages></DecoImages>

      <div className="archive-wrapper-inner">
        <div className="archive-title">
          <h2>Archive</h2>
          <p>
            Here you can find some other work I've made in the past year, feel
            free to move the items around and discover my work!
          </p>
        </div>
        {archive && archiveImg.length > 0 ? ( // Ensure both archive and archiveImg are loaded
          archiveImg.map((imgPath, index) => {
            // Extract the image file name without extension
            const imgName = imgPath.split("/").pop().split(".")[0];
            const correspondingWork = archive.find((work) => {
              return work.img_name === imgName;
            });

            console.log(correspondingWork, imgName);

            return correspondingWork ? (
              <ArchiveBlock
                key={correspondingWork.id} // Added key prop
                id={correspondingWork.id}
                imagePath={imgPath}
                imgName={imgName} // Pass image position if needed
                description={correspondingWork.description}
              />
            ) : (
              <div>Loading...</div>
            ); // Render nothing if no matching work found
          })
        ) : (
          <div>Loading...</div> // Replaced <tr> with <div>
        )}
      </div>
    </div>
  );
}

export default Archive;
