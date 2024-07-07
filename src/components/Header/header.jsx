import "./header.css";

export const Header = (props) => {
  const navigaceClass = props.showMenu ? "navigation" : "navigation nav-hide";
  return (
    <header id="home">
      <div className="header__content container">
        <div className="site-logo"></div>
        <div className={navigaceClass}>
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
