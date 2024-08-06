import { useState, useEffect } from "react";
import WorkTableRow from "./WorkTableRow";
import "../Styles/WorkTable.css";

function WorkTable() {
  const [isActive, setIsActive] = useState(false);
  const [works, setWorks] = useState([]);

  const toggleNavbar = () => {
    console.log("clicked on toggle");
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchTags = async (tagIds) => {
      const tagPromises = tagIds.map(async (tagId) => {
        try {
          const response = await fetch(`http://localhost:3001/tag/${tagId}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
          return null;
        }
      });

      return Promise.all(tagPromises);
    };

    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/works");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const worksWithTags = await Promise.all(
          result.data.map(async (work) => {
            const tags = await fetchTags(work.tags);
            return { ...work, tags };
          })
        );
        setWorks(worksWithTags);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Final array with all works and tags:", works);
  }, [works]);

  return (
    <div className="table-container">
      <h2>Selected works</h2>
      <table className="table">
        <tbody>
          {works.length > 0 ? (
            works.map((work) => (
              <WorkTableRow
                key={work._id}
                id={work._id}
                name={work.name}
                year={work.year}
                tags={work.tags}
                mainTag={work.main_tag}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WorkTable;
