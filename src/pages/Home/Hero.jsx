import React from "react";
import { Link } from "react-router-dom";
// assets
import discord from "../../assets/icons/discord-grey.svg";
import twitter from "../../assets/icons/twitter-grey.svg";
import circles from "../../assets/icons/circles-grey.svg";
import halloweenbg from "../../assets/images/goa-halloween.png";
import logo from "../../assets/images/logo.png";
import logohalloween from "../../assets/images/goa-halloween-logo.svg";
import bg from "../../assets/images/background.mp4";
import Fade from "react-reveal/Fade";
import Marketplace from "../Marketplace/Marketplace";
const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <video src={bg} className="bg" playsInline muted loop autoPlay />

        <Fade top>
          <img src={logo} alt="logo " className="logo-hero" />
        </Fade>
        <Fade bottom big cascade>
          <div className="hero_container">
            <div className="btn-div">
              <a
                href="https://mint.godsofasgardp2e.com/"
                target={"blank"}
                className="mint"
              >
                <div>
                  <p>MINT NFT</p>
                </div>
              </a>
              {/* <Link to="/Marketplace" className="mint">
                Market Place
              </Link> */}
              <a href="#" className="rent">
                Renting
              </a>
              <a
                href="https://godsofasgardp2e.com/downloads/goa_demo.exe"
                target={"blank"}
                className="mint"
              >
                <div>
                  <p>Play Demo</p>
                </div>
              </a>
            </div>
            <div className="social-div-hero">
              <a target={"blank"} href="https://discord.gg/F3B4sY5RtN">
                <img src={discord} alt="..." />
              </a>
              <a
                target={"blank"}
                href="https://twitter.com/godsofasgardp2e?s=21&t=D4tQYm0V4VeQtorulTCF9g"
              >
                <img src={twitter} alt="..." />
              </a>
              {/* <a target={"blank"} href="https://thornodes.medium.com/">
                <img src={circles} alt="..." />
              </a> */}
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Hero;
