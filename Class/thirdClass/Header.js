const Header = () => {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img
            alt="logo"
            className="logo"
            src="https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Restaurant-logo-Graphics-10422399-1.jpg"
          ></img>
        </div>
        <div className="search">
            <input className="searchInput"  placeholder="search"/>
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
