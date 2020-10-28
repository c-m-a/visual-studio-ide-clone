import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import './Body.css';

function Body() {
  return (
    <div className="body">
      <div className="bodyLeft">
        <div className="bodyLeftHeader bodyLeftHeaderActive">
          <div className="bodyLeftTitle">
            Cloud Explorer
          </div>
          <div className="bodyLeftIcons">
            <KeyboardArrowDownIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="bodyLeftContainer">
        </div>
      </div>
      <div className="bodyMiddle">
        <div className="bodyMiddleHeader">
          <div className="bodyLeftTitle">
            Calendar
          </div>
          <div className="bodyLeftIcons">
            <KeyboardArrowDownIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="bodyLeftContainer">
        </div>
      </div>
      <div className="bodyRight">
        <div className="bodyRightHeader">
          <div className="bodyLeftTitle">
            Solution Explorer
          </div>
          <div className="bodyLeftIcons">
            <KeyboardArrowDownIcon />
            <CloseIcon />
          </div>
        </div>
        <div className="bodyLeftContainer">
        </div>
      </div>
    </div>
  );
}

export default Body;
