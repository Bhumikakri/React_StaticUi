function Header() {
    return(
        <>
     <nav className="Navbar">
      <div className="Contents">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="navOptions">
        <a href="#"className="firstOption">Home</a>
        <a href="#">Quote</a>
        <a href="#">Resturants</a>
        <a href="#">Foods</a>
        <a href="#">Contact</a>
      </div>

      <div className="navBtn">
          <button>Get started</button>
      </div>
      </div>
     </nav>
    </>
    )
}

export default Header;