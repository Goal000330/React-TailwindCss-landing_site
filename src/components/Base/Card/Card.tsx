import clsx from "clsx";
import "./CardStyle.css";
import { addSpots } from "../../../config/utils";
import ellipsisIcon from "./../../../assets/png/ellipsis.svg";
import verticalEllipsisIcon from "./../../../assets/png/verticalEllipsis.svg";
import wIcon from "./../../../assets/png/wIcon.png";
import gitIcon from "./../../../assets/png/github.png";
import earthIcon from "./../../../assets/png/earth.png";
import HandIcon from "./../../../assets/png/hand.svg";
import CommentIcon from "./../../../assets/png/comment.svg";
import ShareIcon from "./../../../assets/png/share.svg";
import SendIcon from "./../../../assets/png/plane.svg";
import {
  cardFuncData,
  MicrsoftData,
  GitHubData,
  GoogleData,
} from "./../../../config/constant";
import cardBackImg1 from "./../../../assets/png/cardBackImg1.png";
import cardBackImg2 from "./../../../assets/png/cardBackImg2.png";
import cardBackImg3 from "./../../../assets/png/cardBackImg3.png";

interface Props {
  className?: any;
  comName?: string;
  followers?: number;
  version?: string;
  comDesc?: string;
  comLink?: string;
}

export default function Card({
  className,
  comName,
  followers,
  version,
  comDesc,
  comLink,
}: Props) {
  const handleLike = () => {
    alert("hello!");
    // const options = {
    //   type: "native",
    //   amount: Moralis.Units.ETH("0.5"),
    //   receiver: "0x12c2C060b99285d5f6fC12FC73576c959B59EFDE",
    // };
    // let result = await Moralis.transfer(options);
  };
  return (
    <>
      <div className={clsx("c-cardRoot", className)}>
        <div className="c-cardHeaderContainer">
          <div className="c-companyContainer">
            {comName === MicrsoftData.comName ? (
              <img src={wIcon} className="c-comMark" />
            ) : comName === GitHubData.comName ? (
              <img src={gitIcon} className="c-comMark" />
            ) : (
              <img src={wIcon} className="c-comMark" />
            )}

            <div className="c-comCurrentInfo">
              <span className="c-comName">{comName}</span>
              <span className="c-followLetter">
                {addSpots(followers)} followers
              </span>
              <div className="c-earthContainer">
                <span>{version}</span>
                <i className="c-dot fas fa-circle"></i>
                <img src={earthIcon} />
              </div>
            </div>
          </div>
          <img src={ellipsisIcon} className="c-ellipsisIcon" />
          <img src={verticalEllipsisIcon} className="c-verticalEllipsisIcon" />
        </div>
        <div className="c-cardDescContainer">{comDesc}</div>
        <div className="c-cardLinkContainer">
          <a className="c-cardLink" href={comLink}>
            {comLink}
          </a>
        </div>
        <div>
          {comName === MicrsoftData.comName ? (
            <img src={cardBackImg1} />
          ) : comName === GitHubData.comName ? (
            <img src={cardBackImg2} />
          ) : (
            <img src={cardBackImg3} />
          )}
        </div>
        <div className="c-cardFooterContainer">
          <div className="c-cardFunction" onClick={() => handleLike()}>
            <img
              src={HandIcon}
              className="c-cardFunctionIcon"
              //   onClick={() => handleFuncOn(cardFuncData.like)}
            />
            {/* <HandIcon /> */}
            <span className="c-cardFunctionLetter">Like</span>
          </div>
          <div className="c-cardFunction">
            <img
              src={CommentIcon}
              className="c-cardFunctionIcon"
              style={{ marginTop: "3px" }}
              //   onClick={() => handleFuncOn(cardFuncData.comment)}
            />
            {/* <CommentIcon /> */}
            <span className="c-cardFunctionLetter">Comment</span>
          </div>
          <div className="c-cardFunction">
            <img
              src={ShareIcon}
              className="c-cardFunctionIcon"
              style={{ marginTop: "2px" }}
              //   onClick={() => handleFuncOn(cardFuncData.share)}
            />
            {/* <ShareIcon /> */}
            <span className="c-cardFunctionLetter">Share</span>
          </div>
          <div className={clsx("c-cardFunction", "sendNone")}>
            <img
              src={SendIcon}
              className="c-cardFunctionIcon"
              style={{ marginTop: "4px" }}
              //   onClick={() => handleFuncOn(cardFuncData.send)}
            />
            {/* <SendIcon /> */}
            <span className="c-cardFunctionLetter">Send</span>
          </div>
        </div>
      </div>
    </>
  );
}
