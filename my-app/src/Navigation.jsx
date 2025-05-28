export function Navigation({ srcImg, alt, items }) {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">
        <img className="nav-item" src={srcImg} width="30" height="30" alt={alt && "NavBar"} />
        {items.map(e => <a className="nav-item" href={e.ref}>{e.title}</a>)}
      </a>
    </nav>
  )
}