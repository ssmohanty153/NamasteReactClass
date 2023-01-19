const Header = () => {
  return (
    <>
      <div className="container">
        <a href="/">
          <img
            className="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
            alt="logo"
          ></img>
        </a>
        <div className="search">
          <input className="searchInput" placeholder="search" />
          <button>submit</button>
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
