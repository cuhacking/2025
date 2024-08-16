import "./Hero.scss";
import carleton from "/hero-svgs/carleton.svg";
import mountainBig from "/hero-svgs/mountain_big.svg";
import mountainSmall from "/hero-svgs/mountain_small.svg";
import raven from "/hero-svgs/raven.svg";
import snow from "/hero-svgs/snow.svg";

import { EmailSignup } from "./EmailSignup";

export const Hero = () => {
  const addAnchor = () => {
    document
      .getElementById("raven")
      ?.setAttribute("anchor", "email-signup-anchor");
    return null;
  };
  return (
    <div className="hero">
      <div className="hero__background">
        <img
          className="image mountain-small"
          src={mountainSmall}
          alt="Mountain"
        />
        <div className="background-gradient opacity-25"></div>
        <img className="image mountain-big" src={mountainBig} alt="Mountain" />
        <div className="background-gradient opacity-50"></div>
        <div className="carleton-foreground">
          <img className="image snow" src={snow} alt="Snow" />
          <img
            className="image carleton"
            src={carleton}
            alt="Carleton University campus"
          />
        </div>
      </div>
      <div className="hero__content">
        <EmailSignup id="email-signup-anchor"/>
        <div id="raven" className=" w-96">
          <img className="image " src={raven} alt="Raven" />
        </div>
        {addAnchor()}
      </div>
    </div>
  );
};
