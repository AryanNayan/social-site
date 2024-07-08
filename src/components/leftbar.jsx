import "./leftbar.css";
import Friends from "../assets/1.png";
import Groups from "../assets/2.png";
import Market from "../assets/3.png";
import Watch from "../assets/4.png";
import Memories from "../assets/5.png";
import Events from "../assets/6.png";
import Gaming from "../assets/7.png";
import Gallery from "../assets/8.png";
import Videos from "../assets/9.png";
import Messages from "../assets/10.png";
import Tutorials from "../assets/11.png";
import Courses from "../assets/12.png";
import Fund from "../assets/13.png";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="item">
            <img className="userimg" />
            <span className="itemspan">John Doe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span className="itemspan">Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span className="itemspan">Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span className="itemspan">Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span className="itemspan">Watch</span>
          </div>
        </div>
        <hr></hr>
        <div className="menu">
          <span className="menuhead">Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span className="itemspan">Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span className="itemspan">Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span className="itemspan">Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span className="itemspan">Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span className="itemspan">Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span className="menuhead">Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span className="itemspan">Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span className="itemspan">Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span className="itemspan">Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
