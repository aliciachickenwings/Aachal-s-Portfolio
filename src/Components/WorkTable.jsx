import { useState, useEffect } from "react";
import WorkTableRow from "./WorkTableRow";
import "../Styles/WorkTable.css";

function WorkTable() {
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked on toggle");
    setIsActive(!isActive);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch works and tags from the public directory
        const worksResponse = await fetch("/data/works.json");
        const worksData = await worksResponse.json();
        const tagsResponse = await fetch("/data/tags.json");
        const tagsData = await tagsResponse.json();

        // Map tags to their names for each work
        const worksWithTags = worksData.map((work) => {
          const workTags = work.tags.map(
            (tagId) =>
              tagsData.find((tag) => tag._id === tagId) || { name: "Unknown" }
          );
          return { ...work, tags: workTags };
        });

        setWorks(worksWithTags);
        setTags(tagsData); // Set tags if needed elsewhere
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Final array with all works:", works);
  }, [works]);

  return (
    <div className="table-container" id="table-container">
      <p className="table-title">
        Selected works (click on the work for more information)
      </p>
      <div className="border-bottom top"></div>
      <table className="table">
        <tbody>
          {works.length > 0 ? (
            works.map((work) => (
              <WorkTableRow
                key={work.id} // Ensure this matches the key in your JSON
                id={work.id}
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
