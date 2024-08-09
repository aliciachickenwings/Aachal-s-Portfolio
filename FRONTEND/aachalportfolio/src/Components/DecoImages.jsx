import "../Styles/DecoImages.css";
import flowerDgreen from "../assets/website/FLOWER_dgreen.png";
import flowerDpink from "../assets/website/FLOWER_dpink.png";
import flowerPink from "../assets/website/FLOWER_pink.png";
import flowerGreen from "../assets/website/FLOWER_green.png";
import gradientGreen from "../assets/website/GRADIENT_GREEN.png";
import gradientPink from "../assets/website/GRADIENT_PINK.png";

const DecoImages = () => {
  return (
    <div className="deco-images">
      <img
        className="flower"
        src={flowerDgreen}
        alt="flower"
        style={{
          width: "30%",
          position: "absolute",
          top: "50px",
          left: "10px",
        }}
      />
      <img
        className="flower"
        src={flowerDpink}
        alt="flower"
        style={{ position: "absolute", top: "130px", right: "-20px" }}
      />
      <img
        className="flower"
        src={flowerPink}
        alt="flower"
        style={{ position: "absolute", top: "400px", left: "-20px" }}
      />
      <img
        className="flower"
        src={flowerGreen}
        alt="flower"
        style={{ position: "absolute", top: "600px", right: "-20px" }}
      />
      <img
        className="gradient"
        src={gradientGreen}
        alt="gradient"
        style={{
          width: "100%",
          position: "absolute",
          top: "-150px",
          right: "-220px",
        }}
      />
      <img
        className="gradient"
        src={gradientPink}
        alt="gradient"
        style={{
          width: "100%",
          position: "absolute",
          top: "150px",
          left: "-290px",
        }}
      />
    </div>
  );
};

export default DecoImages;
