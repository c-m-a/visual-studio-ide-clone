import './Navbar.css';

import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import SaveIcon from '@material-ui/icons/Save';

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
              <input
                className="navbar__input"
                type="text"
                placeholder="Search Visual Studio (Ctrl+Q)"
              />
              <SearchIcon
                style={{
                  fontSize: '1.9rem',
                  color: '#606060',
                  transform: 'scale(-1, 1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="navbar__menu-icons">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
        <IconButton>
          <FolderOpenIcon />
        </IconButton>
        <IconButton>
          <SaveIcon />
        </IconButton>
        <IconButton>
          <UndoIcon />
        </IconButton>
        <IconButton>
          <RedoIcon />
        </IconButton>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      </div>
    </nav>
  );
}

export default Navbar;
