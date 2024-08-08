import { getMainImage } from "../utils.js";
import { useNavigate } from "react-router-dom";
import "../Styles/WorkTable.css";

const WorkTableRow = ({ id, name, year, tags, mainTag }) => {
  const navigate = useNavigate();
  const imgPath = getMainImage(name);
  console.log(imgPath);

  const clickOnWork = (id) => {
    console.log("clicked on work", id);
    navigate(`/work/${id}`); // Navigate to the work detail page with the ID
  };

  return (
    <tr key={id} className="work-item" onClick={() => clickOnWork(id)}>
      <td colSpan="3">
        <div className="work-item-info">
          <span>{name}</span>
          <span>{mainTag}</span>
          <span>{year}</span>
        </div>
        <div className="border-bottom">
          <img
            id={`main-img-${id}`}
            className="work-img"
            src={imgPath}
            alt={name}
          />
        </div>
      </td>
    </tr>
  );
};

export default WorkTableRow;
