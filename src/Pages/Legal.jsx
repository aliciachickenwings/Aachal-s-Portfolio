import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Styles/Privacy.css";

function Legal() {
  /*   const randomXY =()=>{
      const x = 
    } */

  const handleWorkClick = () => {
    document
      .getElementById("table-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Nav></Nav>
      <div className="privacy-policy outer-wrapper">
        <h2>Legal Information</h2>
        <p>Last updated: 18/08/2024</p>

        <h3>1. Disclaimer</h3>
        <p>
          The content on this website is provided for informational purposes
          only. I strive to ensure that the information is accurate and up to
          date, but I make no guarantees of any kind regarding the completeness,
          accuracy, reliability, or availability of the content on this website.
          Any reliance you place on such information is strictly at your own
          risk. I will not be liable for any loss or damage arising from the use
          of this website.
        </p>

        <h3>2. Intellectual Property Rights</h3>
        <p>
          All content on this website, including but not limited to text,
          images, graphics, and code, is the intellectual property of Aachal
          Shrestha unless otherwise stated. Unauthorized use, reproduction, or
          distribution of this content is prohibited. You may not use any part
          of the content for commercial purposes without obtaining a license
          from me.
        </p>

        <h3>3. Use of Licensed Fonts</h3>
        <p>
          The fonts used on this website are licensed for personal use only. I
          do not claim ownership of these fonts. They are used in compliance
          with their respective licenses, which allow for non-commercial use on
          this portfolio website. If you are interested in using these fonts for
          commercial purposes, you must obtain the appropriate license from the
          font creator or distributor.
        </p>

        <h3>4. External Links</h3>
        <p>
          This website may contain links to external websites that are not
          operated by me. These links are provided for your convenience and do
          not signify my endorsement of the content on those external sites. I
          have no control over the content, privacy policies, or practices of
          any third-party websites and therefore accept no responsibility for
          them.
        </p>

        <h3>5. Governing Law</h3>
        <p>
          This website is operated from Belgium, and the laws of Belgian govern
          these terms and your use of this website. By accessing this website,
          you agree to submit to the jurisdiction of the courts of Belgium.
        </p>

        <h3>6. Changes to This Legal Page</h3>
        <p>
          I may update this legal page from time to time to reflect changes in
          the website or for other operational, legal, or regulatory reasons.
          Any updates will be posted on this page with the date of the last
          revision.
        </p>

        <h3>7. Contact Information</h3>
        <p>
          If you have any questions or concerns about this legal page, please
          feel free to contact me at:
        </p>
        <p className="link-email">
          <a href="mailto:aachalshresth@gmail.com" className="link">
            aachalshresth@gmail.com
          </a>
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Legal;
