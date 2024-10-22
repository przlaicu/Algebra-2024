import Streamer from "../../Images/Logo/streamer.svg";
import Facebook from "../../Images/Icons/facebook.svg";
import Twitter from "../../Images/Icons/twitter.svg";
import Youtube from "../../Images/Icons/youtube.svg";

export default function Footer() {
  return (
    <footer>
      <img src={Streamer} alt="Streamer+" className="logo" />
      <ul className="social-media">
        <li>
          <a href="https://www.faceboot.com">Facebook</a>
          <img src={Facebook} alt="Facebook" />
        </li>
        <li>
          <a href="https://www.x.com">X</a>
          <img src={Twitter} alt="Twitter" />
        </li>
        <li>
          <a href="https://www.youtube">You Tube</a>
          <img src={Youtube} alt="YouTube" />
        </li>
      </ul>
      
      <span>
        &copy; {new Date().getFullYear()} Acme, Inc. or it's subsidiary or
        affiliate. Streame+ is a property of ACME, Inc. All rights reserved
      </span>
    </footer>
  );
}
