import "./Header.css";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <>
      <div className="main-header">
        <hr />
        <header>
          <div className="header-block">
            <div className="intro-text">
              <div className="text1">
                <p>Hi , Welcome to My portfolio.</p>
              </div>
              <div className="text2">
                <h1>I'm Bhargav Nadoda ,</h1>
              </div>
              <div className="text3">
                <p>
                   A {" "}
                  <ReactTyped
                    strings={["Flutter Developer"]}
                    typeSpeed={100}
                    loop
                    showCursor={false}
                  />
                </p>
              </div>
              <div className="text-button">
                <button>Hire Me</button>
              </div>
            </div>
            <div className="my-photo"></div>
          </div>
         
        </header>
      </div>
    </>
  );
};

export default Header;
