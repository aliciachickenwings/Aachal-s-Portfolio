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
        className="flower-two"
        src={flowerDgreen}
        alt="flower"
        style={{
          position: "absolute",
          top: "500px",
          left: "-70px",
        }}
      />
      <img
        className="flower"
        src={flowerDpink}
        alt="flower"
        style={{ position: "absolute", top: "250px", right: "-20px" }}
      />
      <img
        className="flower"
        src={flowerPink}
        alt="flower"
        style={{ position: "absolute", top: "120px", left: "-50px" }}
      />
      <img
        className="flower"
        src={flowerGreen}
        alt="flower"
        style={{ position: "absolute", top: "600px", right: "-20px" }}
      />
      <img
        className="gradient gradient-green"
        src={gradientGreen}
        alt="gradient"
      />
      <img
        className="gradient gradient-pink"
        src={gradientPink}
        alt="gradient"
      />
    </div>
  );
};

export default DecoImages;
