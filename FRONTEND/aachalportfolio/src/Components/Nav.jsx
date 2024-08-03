import "../Styles/Nav.css";

function Nav() {
  return (
    <div className="nav-wrapper">
      <a href="/">
        <p>HOME</p>
      </a>
      <a href="/aboutme">
        <p>ABOUT ME</p>
      </a>
      <a href="/work">
        <p>WORK</p>
      </a>
      <a href="/archive">
        <p>ARCHIVE</p>
      </a>
      <a href="/contact">
        <p>CONTACT</p>
      </a>
    </div>
  );
}

export default Nav;
