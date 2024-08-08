import "../Styles/index.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WorkDetail = () => {
  const { id } = useParams(); // Get the work ID from the URL
  const [work, setWork] = useState(null);

  console.log("this work is work w id", id);
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(`http://localhost:3001/works/${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setWork(result);
      } catch (error) {
        console.error("Error fetching work:", error);
      }
    };

    fetchWork();
  }, [id]);

  if (!work) return <div>Loading...</div>;

  return (
    <div>
      <h1>{work.name}</h1>
      <p>{work.description}</p>
      <img src={work.imgPath} alt={work.name} />
      {/* Render other details as needed */}
    </div>
  );
};

export default WorkDetail;
