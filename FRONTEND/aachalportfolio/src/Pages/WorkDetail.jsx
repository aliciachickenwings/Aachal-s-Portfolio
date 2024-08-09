import "../Styles/WorkDetail.css";
import { getFolderImages } from "../utils";
import Nav from "../Components/Nav";
import DecoImages from "../Components/DecoImages";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const { id } = useParams(); // Get the work ID from the URL
  const [work, setWork] = useState(null);
  const [images, setImageFolder] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(`http://localhost:3001/works/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setWork(result);
        console.log(result);
        setImageFolder(getFolderImages(result.name));
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };
    fetchWork();
  }, [id]);

  console.log(work);
  if (!work) return <div>Loading...</div>;

  return (
    <div>
      <DecoImages></DecoImages>
      <div className="outer-wrapper">
        <Nav></Nav>
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
                    tag.name.toLowerCase().includes("motion graphics")
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
    </div>
  );
};

export default WorkDetail;
