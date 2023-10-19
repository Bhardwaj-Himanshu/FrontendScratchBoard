import Logo from "../images/logo.svg"
import { navLinks } from "../Data"
import { navIconLinks } from "../Data"

const Nav = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <a href="#home">
        <img src={Logo} className="nav-logo" alt="backroads" />
        </a>
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="nav-links" id="nav-links">
          {navLinks.map((item)=>{
          return(
          <li key={item.id}>
          <a href={item.href} className={item.className}>{item.text}</a>
          </li>)
          })}
      </ul>
      <ul className="nav-icons">
        {navIconLinks.map((item)=>{
          return(
          <li key={item.id}>
          <a href={item.href} target="_blank" rel="noreferrer" className="nav-icon">
            <i className={item.iconClassName}></i>
          </a>
          </li>
          )
        })}
      </ul>
    </div>
  </nav>
  )
}
export default Nav