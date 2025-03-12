
export function Navigation({srcImg,alt}){
    return (
        <nav className="navbar">
        <a className="navbar-brand" href="#">
          <img className="nav-item" src={srcImg} width="30" height="30" alt={alt && "NavBar"}/>
          <a className="nav-item" href="#">FCA</a>
          <a className="nav-item" href="#">Google</a>
          <a className="nav-item" href="#">Facebook</a>
        </a>
      </nav>)
}