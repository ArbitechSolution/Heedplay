import React from "react";
import Twitter from "../media/twitter.png";
import Telegram from "../media/telegram.png";
import Kakao from "../media/kakao.png";
import Discord from "../media/discord.png";
import Logo from "../media/logo.png";
import Doc from "../media/D.svg";
import Whitepaper from "../media/Whitepaper.svg";
import { useTranslation } from "react-i18next";
import { SiReddit } from 'react-icons/si';
import { AiFillMediumCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs";
// import { AiFillMediumCircle } from "react-icons/ai"
import "./Staking.css";
export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer
      id="footer"
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      <div className="container ">
        <div className="row">
          <div className="col-md-3 text-center">
            <a href="/" className="logo">
              {/* <img src={Logo} alt="" className="img-fluid" /> */}
              {/* <h2 className="text-light">Heedplay</h2> */}
              <img src={Logo} className="img-fluid" style={{ width: 180 }} />


            </a>
          </div>
          <div className="col-md-6 py-3 py-md-0 text-center">
            <p className="m-0">
              <a href="mailto:maguni@crazyapeheedplayclub.com">{t("footer.1")}</a>
            </p>
            <p className="m-0">{t("footer.2")}</p>
          </div>
          <div className="col-md-3 social">
            <a
              href="https://twitter.com/Heed2play"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://t.me/Heed2play"
              target="_blank"
              rel="noreferrer"
              className="telegram"
            >
              <img src={Telegram} alt="" />
            </a>
            <a
              href="https://www.reddit.com/user/Heed2play"
              target="_blank"
              rel="noreferrer"
              className="kakao"
            >
              <SiReddit size={18} />
            </a>
            <a
              href="https://discord.gg/xYexCvXy"
              target="_blank"
              rel="noreferrer"
              className="discord"
            >
              <img src={Discord} alt="" />
            </a>
          
              <a
                href="https://medium.com/@heed2play"
                target="_blank"
                rel="noreferrer"
                className="discord pe-1"
              >
                 <AiFillMediumCircle size={20} />
              </a>

              <a
                href="https://cagc.gitbook.io/crazyapegoongye/crazyapegoongye/story"
                target="_blank"
                rel="noreferrer"
                className="discord pe-1"
              >
                <BsFacebook size={18} />
              </a>
      
            {/* <a
              href="https://drive.google.com/file/d/1kiuCB8hf2sS1unpm9i5Ibr6-HiIoQAmf/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="discord pe-1"
            >
              <img src={Whitepaper} alt="" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
