import "../Styles/WorkDetail.css";
import { getFolderImages } from "../utils";
import Nav from "../Components/Nav";
import DecoImages from "../Components/DecoImages";
import Footer from "../Components/Footer";
import goBackButton from "../assets/website/down-arrow.png";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const [tags, setTags] = useState([]);
  const [images, setImageFolder] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching works...");
        const worksResponse = await fetch("/data/works.json");
        const worksData = await worksResponse.json();
        console.log("Works fetched:", worksData);

        console.log("Fetching tags...");
        const tagsResponse = await fetch("/data/tags.json");
        const tagsData = await tagsResponse.json();
        console.log("Tags fetched:", tagsData);

        const foundWork = worksData.find((work) => work.id === id);
        if (foundWork) {
          const workTags = foundWork.tags.map(
            (tagId) =>
              tagsData.find((tag) => tag._id === tagId) || { name: "Unknown" }
          );
          setWork({ ...foundWork, tags: workTags });
          setImageFolder(getFolderImages(foundWork.name));
          console.log("Work found:", foundWork);
        } else {
          console.error("Work not found with id:", id);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <DecoImages />
      <Nav />
      <div className="outer-wrapper">
        <div className="go-back-button">
          <a href="/">
            <img src={goBackButton}></img>
          </a>
        </div>
        <div className="work-wrapper">
          {work ? (
            <>
              <div className="work-info">
                <h1>{work.name}</h1>
                <div className="tags">
                  {work.tags && work.tags.length > 0 ? (
                    work.tags.map((tag) => (
                      <div key={tag.id} className="tag-item">
                        <p>{tag.name}</p>
                      </div>
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                </div>
                <p>{work.description}</p>
                <div className="link-item">
                  {work.tags &&
                    (work.tags.some(
                      (tag) =>
                        tag.name.toLowerCase().includes("video") ||
                        tag.name.toLowerCase().includes("motion graphics") ||
                        tag.name.toLowerCase().includes("animation")
                    ) ? (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Watch Video
                      </a>
                    ) : work.tags.some(
                        (tag) =>
                          tag.name.toLowerCase().includes("web") ||
                          tag.name.toLowerCase().includes("front-end")
                      ) ? (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        Visit Site
                      </a>
                    ) : null)}
                </div>
              </div>
              <div className="work-images">
                {images && images.length > 0 ? (
                  images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={img.name}
                      className="work-images-image"
                    />
                  ))
                ) : (
                  <p>Loading images...</p>
                )}
              </div>
            </>
          ) : (
            <p>Loading work details...</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default WorkDetail;
