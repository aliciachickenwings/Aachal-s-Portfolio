import { getMainImage } from "../utils.js";

const WorkTableRow = ({ id, name, year, tags, mainTag }) => {
  const imgPath = getMainImage(name);
  console.log(imgPath);

  return (
    <>
      <tr key={id} className="work-item">
        <td>{name}</td>
        <td>{mainTag}</td>
        <td>{year}</td>
      </tr>
      <tr>
        <td colSpan="3">
          <div>
            <img
              id={`main-img-${id}`}
              className="work-img"
              src={imgPath}
              alt={name}
              style={{ width: "100px", height: "100px" }} // Adjusted size for better visibility
            />
          </div>
        </td>
      </tr>
    </>
  );
};

export default WorkTableRow;
