import "./HeaderStyle.css";
import adminIcon from "./../../assets/png/admin.png";
import textureIcon from "./../../assets/png/texture.png";
import linkdinIcon from "./../../assets/png/linkdin.png";
import homeIcon from "./../../assets/png/Home.svg";
import mynetworkIcon from "./../../assets/png/myNetwork.svg";
import jobIcon from "./../../assets/png/job.svg";
import messageIcon from "./../../assets/png/message.svg";
import notificationIcon from "./../../assets/png/notification.svg";
import dropDownIcon from "./../../assets/png/dropdown.svg";
import { HeaderLinkData } from "./../../config/constant";
import { useState } from "react";
import clsx from "clsx";
export default function Header() {
  const [activeHeader, setActiveHeader] = useState(1);
  const handleHeader = (index: number) => {
    setActiveHeader(index);
  };

  return (
    <>
      <div className="headerRoot">
        <div className="searchRoot">
          <img src={linkdinIcon} className="linkdinIcon" />
          <div className="searcgInputRoot">
            <i className="fas fa-search searchIcon"></i>
            <input
              type="text"
              className="
                inputContainer
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding

                border-transparent
                rounded
                transition
                ease-in-out
                m-0
                 focus:outline-none
            "
              id="exampleFormControlInput1"
              placeholder="Example label"
            />
          </div>
        </div>
        <div className="headerRightContainer">
          <ul
            className="headerLinksRoot nav nav-tabs flex flex-col lg:flex-row flex-wrap list-none border-b-0 pl-0"
            id="tabs-tab3"
            role="tablist"
          >
            <li
              className={clsx("headerLinkContainer nav-item", {
                ["activeHeaderLinkContainer"]:
                  activeHeader === HeaderLinkData.home,
              })}
              role="presentation"
              onClick={() => handleHeader(HeaderLinkData.home)}
            >
              <img src={homeIcon} className="headerIcon" />
              <a
                href="#tabs-home3"
                className={clsx(
                  "headerLetter  nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent  focus:border-transparent  active",
                  {
                    ["activeHeaderLetter"]:
                      activeHeader === HeaderLinkData.home,
                  }
                )}
                id="tabs-home-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-home3"
                role="tab"
                aria-controls="tabs-home3"
                aria-selected="true"
              >
                Home
              </a>
            </li>
            <li
              className={clsx("headerLinkContainer nav-item", {
                ["activeHeaderLinkContainer"]:
                  activeHeader === HeaderLinkData.myNetwork,
              })}
              role="presentation"
              onClick={() => handleHeader(HeaderLinkData.myNetwork)}
            >
              <img src={mynetworkIcon} className="headerIcon" />
              <a
                href="#tabs-profile3"
                className={clsx(
                  "headerLetter  nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent  focus:border-transparent  active",
                  {
                    ["activeHeaderLetter"]:
                      activeHeader === HeaderLinkData.myNetwork,
                  }
                )}
                id="tabs-profile-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-profile3"
                role="tab"
                aria-controls="tabs-profile3"
                aria-selected="false"
              >
                My Network
              </a>
            </li>
            <li
              className={clsx("headerLinkContainer nav-item", {
                ["activeHeaderLinkContainer"]:
                  activeHeader === HeaderLinkData.jobs,
              })}
              role="presentation"
              onClick={() => handleHeader(HeaderLinkData.jobs)}
            >
              <img src={jobIcon} className="headerIcon" />
              <a
                href="#tabs-messages3"
                className={clsx(
                  "headerLetter  nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent  focus:border-transparent  active",
                  {
                    ["activeHeaderLetter"]:
                      activeHeader === HeaderLinkData.jobs,
                  }
                )}
                id="tabs-messages-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages3"
                role="tab"
                aria-controls="tabs-messages3"
                aria-selected="false"
              >
                jobs
              </a>
            </li>
            <li
              className={clsx("headerLinkContainer nav-item", {
                ["activeHeaderLinkContainer"]:
                  activeHeader === HeaderLinkData.messaging,
              })}
              role="presentation"
              onClick={() => handleHeader(HeaderLinkData.messaging)}
            >
              <img src={messageIcon} className="headerIcon" />
              <a
                href="#tabs-messages3"
                className={clsx(
                  "headerLetter  nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent  focus:border-transparent  active",
                  {
                    ["activeHeaderLetter"]:
                      activeHeader === HeaderLinkData.messaging,
                  }
                )}
                id="tabs-messages-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages3"
                role="tab"
                aria-controls="tabs-messages3"
                aria-selected="false"
              >
                Messaging
              </a>
            </li>
            <li
              className={clsx("headerLinkContainer nav-item", {
                ["activeHeaderLinkContainer"]:
                  activeHeader === HeaderLinkData.notification,
              })}
              role="presentation"
              onClick={() => handleHeader(HeaderLinkData.notification)}
            >
              <img src={notificationIcon} className="headerIcon" />
              <a
                href="#tabs-messages3"
                className={clsx(
                  "headerLetter  nav-link w-full block font-medium text-xs leading-tight border-x-0 border-t-0 border-b-2 border-transparent  focus:border-transparent  active",
                  {
                    ["activeHeaderLetter"]:
                      activeHeader === HeaderLinkData.notification,
                  }
                )}
                id="tabs-messages-tab3"
                data-bs-toggle="pill"
                data-bs-target="#tabs-messages3"
                role="tab"
                aria-controls="tabs-messages3"
                aria-selected="false"
              >
                Notifications
              </a>
            </li>
            <li className="avatarContainer">
              <img className="avatar" src={adminIcon} />
              <span className="dropDownLetterContainer">
                Me <img src={dropDownIcon} className="dropDownIcon" />
              </span>
            </li>
            <li className="textureContainer">
              <img src={textureIcon} className="textureIcon" />
              <img src={dropDownIcon} className="dropDownIcon" />
            </li>
            <li className="premiumLetter">Try Premium for free</li>
          </ul>
        </div>
      </div>
    </>
  );
}
