import "../Styles/WorkDetail.css";
import { getFolderImages } from "../utils";
import Nav from "../Components/Nav";
import DecoImages from "../Components/DecoImages";
import Footer from "../Components/Footer";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import works from "../data/works.json";

const WorkDetail = () => {
  const { id } = useParams(); // Get the work ID from the URL
  const [work, setWork] = useState(null);
  const [images, setImageFolder] = useState(null);

  useEffect(() => {
    // Find the work by ID in the imported JSON data
    const foundWork = works.find((work) => work._id === id);
    if (foundWork) {
      setWork(foundWork);
      setImageFolder(getFolderImages(foundWork.name));
    } else {
      console.error("Work not found");
    }
  }, [id]);

  if (!work) return <div>Loading...</div>;

  console.log(work);
  if (!work) return <div>Loading...</div>;

  return (
    <div>
      <DecoImages></DecoImages>
      <Nav></Nav>
      <div className="outer-wrapper">
        <div className="work-wrapper">
          <div className="work-info">
            <h1>{work.name}</h1>
            <div className="tags">
              {work.tagDetails && work.tagDetails.length > 0 ? (
                work.tagDetails.map((tag) => (
                  <div key={tag._id} className="tag-item">
                    <p>{tag.name}</p>
                  </div>
                ))
              ) : (
                <p>No tags available</p>
              )}
            </div>
            <p>{work.description}</p>
            <div className="link-item">
              {work.tagDetails &&
                (work.tagDetails.some(
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
                ) : work.tagDetails.some(
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
            {images.length > 0 ? (
              images.map((img) => (
                <img src={img} alt={img.name} className="work-images-image" />
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </div>

          {/* Render other details as needed */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WorkDetail;
