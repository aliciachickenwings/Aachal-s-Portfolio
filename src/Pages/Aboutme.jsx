import "../Styles/AboutMe.css";
import Nav from "../Components/Nav";
import DecoImages from "../Components/DecoImages";
import aachalFoto from "../assets/website/aachal-foto.png";
import Footer from "../Components/Footer";
import awardImg from "../assets/website/award.jpg";
function Aboutme() {
  return (
    <div>
      <Nav></Nav>
      <DecoImages></DecoImages>
      <div className="outer-wrapper">
        <div className="header-wrapper">
          <div className="header">
            <div>
              <img src={aachalFoto} alt="Aachal"></img>
            </div>
            <div className="header-big-title">
              <p>Hi, I'm</p>
              <h1>Aachal Shrestha,</h1>
              <p>
                a recent graduate in Multimedia & Creative Technologies. I have
                a passion for blending technology and art to craft engaging and
                innovative experiences. I'm always eager to learn and discover
                more in this ever-evolving field, and I love sharing my
                knowledge and with others.
              </p>
            </div>
          </div>
        </div>
        <div className="about-me-outer-wrapper">
          <div className="experience-wrapper about-me-block-wrapper">
            <h2>Experience</h2>
            <div className=" about-me-block-wrapper-inner">
              <div className="experience about-me">
                <p className="about-me-title">Web and Graphic Design Intern</p>
                <p>OctoSales</p>
                <p>Jan 24 - Apr 24</p>
              </div>
              <div className="experience">
                <p className="about-me-title">Digital Marketeer Student</p>
                <p>YOKUU</p>
                <p>Aug 23 - Nov 23</p>
              </div>
            </div>
          </div>
          <div className="education-wrapper about-me-block-wrapper">
            <h2>Education</h2>
            <div className="education-wrapper-inner about-me-block-wrapper-inner">
              <div className="education about-me">
                <p className="about-me-title">
                  Multimedia & Creative Technologies
                </p>
                <p>Erasmus University College Brussels</p>
                <p>Sept 21 - June 24</p>
              </div>
              <div className="education">
                <p className="about-me-title">Math and Science</p>
                <p>Sint-Guido Instituut</p>
                <p>Sept 15 - June 21</p>
              </div>
            </div>
          </div>
          <div className="education-wrapper about-me-block-wrapper">
            <h2>Soft(ware) skills</h2>
            <div className="education-wrapper-inner about-me-block-wrapper-inner">
              <div className="education about-me">
                <p className="about-me-title">Interactive & Digital Design</p>
                <p>
                  - Interactive Design (TouchDesigner, Unity, Resolume,
                  MadMapper, Unreal, Ableton Live)
                </p>
                <p>- Projection Mapping</p>
                <p>- 3D Modeling & Animation (Blender, Maya)</p>
                <p>- Front-End Development (HTML, CSS, JavaScript)</p>
                <p>- UX/UI Design</p>
              </div>
              <div className="education">
                <p className="about-me-title">Graphic & Motion Design</p>
                <p>
                  - Adobe Creative Cloud (Illustrator, Photoshop, Premiere Pro,
                  After Effects)
                </p>
                <p>- 2D & 3D Motion Graphics</p>
                <p>- Video Editing</p>
                <p>- Branding</p>
                <p>- Design Thinking</p>
              </div>
              <div className="education">
                <p className="about-me-title">Soft Skills</p>
                <p>- Creativity</p>
                <p>- Teamwork</p>
                <p>- Flexibility</p>
                <p>- Problem Solving</p>
                <p>- Adaptability</p>
              </div>
            </div>
          </div>
          <div className="interests-wrapper about-me-block-wrapper">
            <h2>Interests</h2>
            <div className="interests-wrapper-inner about-me-block-wrapper-inner">
              <div className="interests about-me">
                <p className="about-me-title">Crocheting</p>
                <p className="interests-description">
                  During Covid, I stumbled upon a ball of yarn and a crochet
                  hook that had been sitting untouched in my room. Bored and
                  looking for something to do, I decided to learn the basic
                  stitches—and I haven't stopped since. Crocheting has become a
                  way for me to relieve stress, and it's also taught me the
                  value of patience.
                </p>
                <a
                  href="https://www.instagram.com/coochiecrochet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  @coochiecrochet
                </a>
              </div>
              <div className="interests about-me">
                <p className="about-me-title">
                  Video editing and Motion Graphics
                </p>
                <p>
                  I've always enjoyed editing videos and creating cool effects,
                  even before starting my bachelor’s degree. I love bringing my
                  ideas to life through editing, whether it's crafting special
                  effects or simply putting together vlogs to capture and
                  preserve memories.
                </p>
              </div>
              <div className="interests about-me">
                <p className="about-me-title">Dancing and filming</p>
                <p>
                  From a young age, I’ve been passionate about dance. It all
                  began with mimicking dance moves from TV, which soon led to my
                  introduction to Traditional Nepali Dance. My cousins and I
                  would often perform at local parties, a tradition I still
                  occasionally practice today. Over time, I also developed an
                  interest in K-pop dance covers and even formed a group with
                  some friends. Sometimes, I film and edit our dance videos.
                </p>
              </div>
            </div>
          </div>
          <div className="interests-wrapper about-me-block-wrapper">
            <h2>Special mentions</h2>
            <p className="about-me-block-description">
              Every year, the second-year students in our program organize an
              award show where both the public and professors select the
              winners.
            </p>
            <div className="interests-wrapper-inner about-me-block-wrapper-inner">
              <div className="interests about-me">
                <p className="about-me-title">Impact award</p>
                <p className="interests-description">
                  For my bachelor’s work, I received the "Impact Award," which
                  is presented to a final-year project that stands out for its
                  societal relevance and its aim to make a difference in the
                  perception of a social issue. Through an original and
                  innovative multimedia approach, the winner successfully
                  astonishes the audience and leaves a lasting impression.
                </p>
              </div>
              <div className="interests about-me">
                <p className="about-me-title">Young Potential award</p>
                <p>
                  An award I received in my first year. This award was given to
                  one the best first year projects.{" "}
                </p>
              </div>
              <div className="interests about-me">
                <img src={awardImg} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Aboutme;
