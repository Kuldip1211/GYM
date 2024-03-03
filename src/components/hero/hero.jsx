import "./hero.css";
import Header from "../header/header";
import Heart from "../../assets/heart.png";
import Hero_img from "../../assets/hero_image.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

const hero = () => {
  const transition = { type: "spring", duration: 3 };

  return (
    <div className="hero">
      <div className="blur"></div>
      <div className="left-h">
        <Header />
        {/* the best add start */}
        <div className="blur"></div>
        <div className="the-best-ad">
          <motion.div
            initial={{ left: 238 }} // Use a number or a string with a valid CSS value
            whileInView={{ left: 9 }} // Use a number or a string with a valid CSS value
            transition={transition}
          >
            {/* Your content goes here */}
          </motion.div>

          <span>the best fitness club in town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figure text */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Exopert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness Programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* left side end */}
      {/* right side start */}
      <div className="right-h">
        <button className="btn">Join now</button>

        <motion.div initial={{right: "1rem"}}whileInView={{right:"4rem"}} transition={transition} className="heart-rate">
          <img src={Heart} alt="img" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={Hero_img} alt="" className="hero_image" />
        <motion.img initial={{right:"11rem"}}whileInView={{right:"20rem"}} transition={transition} src={Hero_image_back} alt="" className="hero-image-back" />

        <motion.div initial={{right: "37rem"}}whileInView={{right:"28rem"}} transition={transition}className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
