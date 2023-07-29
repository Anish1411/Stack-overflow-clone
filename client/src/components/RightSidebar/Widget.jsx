import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The Overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            The word technology was coined in 330 BC by the one and only Aristotle.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>The QWERTY keyboard can slow your typing speed on the computer.</p>
        </div>
      </div>
      <h4>Tech facts and more</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Xerox is not a verb for photocopying but is a name of a company that creates and sells xerographic technology.</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Motorola produced the first-ever portable mobile phone.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            Japan has the fastest Internet speed of 319 terabits per second.
          </p>
        </div>
      </div>
      <h4>More Tech Facts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>25689</p>
          <p>
            No one yet has verified the identity of Bitcoins founder.
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            Aeromobil has introduced the world's first commercial flying car.

          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Flying cars exist! The Slovakian company aims to debut the world's</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
