import "./header.css";

export const Header = (props) => {
  const navigaceClass = props.showMenu
    ? "rollout-nav"
    : "rollout-nav menu-hide";
  const inlineNavClass = props.showMenu ? "inline-nav menu-hide" : "inline-nav";
  return (
    <header id="home">
      <div className="header__content container">
        <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className={navigaceClass}>
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
          <nav className={inlineNavClass}>
            <a href="/">Hlavní stránka</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
