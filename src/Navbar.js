import './Navbar.css';
import { ReactComponent as Logo } from './logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <div className="navbar__brand">
          <Logo className="navbar__logo"/>
        </div>
        <div className="navbar__menu-options">
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">F</span>ile
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">V</span>iew
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">P</span>roject
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">B</span>uild
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">D</span>ebug
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">T</span>ools
          </div>
          <div className="navbar__menu-item">
            Te<span className="navbar__text-decoration">s</span>t
          </div>
          <div className="navbar__menu-item">
            A<span className="navbar__text-decoration">n</span>alize
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">E</span>xtensions
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">W</span>indow
          </div>
          <div className="navbar__menu-item">
            <span className="navbar__text-decoration">H</span>elp
          </div>
          <div className="navbar__menu-item">
            <div className="navbar__input-wrapper">
              <input className="navbar__input" type="text" />
              { /* Icon */ }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
