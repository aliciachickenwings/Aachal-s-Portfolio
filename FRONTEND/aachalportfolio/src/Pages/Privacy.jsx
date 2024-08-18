import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Styles/Privacy.css";

function Privacy() {
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
        <h2>Privacy Policy</h2>
        <p>Last updated: 18/08/2024</p>

        <h3>Introduction</h3>
        <p>
          Welcome to my portfolio website. Your privacy is important to me, and
          I am committed to protecting it. This privacy policy explains how I
          handle any data or information that might be associated with your
          visit to this website. Please read this policy carefully to understand
          my practices regarding your privacy.
        </p>

        <h3>1. Information Collection</h3>
        <p>
          I do not collect, store, or process any personal data or information
          from visitors to this website. The website is designed solely for
          showcasing my work, and I do not require or request any information
          from you.
        </p>

        <h3>2. Cookies</h3>
        <p>
          This website does not use cookies or any other tracking technologies.
          Your visit is entirely anonymous, and no information is stored on your
          device or shared with third parties.
        </p>

        <h3>3. Third-Party Services</h3>
        <p>
          I do not use any third-party services that could collect or process
          data from your visit. This includes analytics, social media plugins,
          or advertising networks. Your privacy is fully protected during your
          browsing experience.
        </p>

        <h3>4. External Links</h3>
        <p>
          This website may contain links to external websites that are not
          operated by me. If you click on a third-party link, you will be
          directed to that third party's site. I strongly advise you to review
          the privacy policy of every site you visit. I have no control over and
          assume no responsibility for the content, privacy policies, or
          practices of any third-party sites or services.
        </p>

        <h3>5. Children's Privacy</h3>
        <p>
          This website is not directed towards children, and I do not knowingly
          collect personal data from children under the age of 13. If you are a
          parent or guardian and believe that your child has provided me with
          personal data, please contact me, and I will take steps to delete such
          information.
        </p>

        <h3>6. Security</h3>
        <p>
          Since no personal data is collected, there is no data to protect.
          However, I take the security of this website seriously and maintain
          measures to protect the site from unauthorized access or attacks.
        </p>

        <h3>7. Changes to This Privacy Policy</h3>
        <p>
          I may update this privacy policy from time to time to reflect changes
          in the website or for other operational, legal, or regulatory reasons.
          Any updates will be posted on this page with the date of the last
          revision.
        </p>

        <h3>8. Contact Information</h3>
        <p>
          If you have any questions or concerns about this privacy policy,
          please feel free to contact me at:
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

export default Privacy;
