import React from "react";
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />

                {/* the best add */}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero Heading */}
                <div className="hero-text">
                    <div>

                        <span><span className="stroke-text">Shape</span> Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>

                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>expert coachs</span>
                    </div>

                    <div>
                        <span>+978</span>
                        <span>members joined</span>
                    </div>

                    <div>
                        <span>+50</span>
                        <span>fitness program</span>
                    </div>

                </div>

                {/* Hero buttons */}
                <div className="hero-buttons">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Lear More</buttons>
                </div>

            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>

                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>


                {/* hero images */}
                <img src={hero_image} className="hero-image" alt="" />
                <img src={hero_image_back} className="hero-image-back" alt="" />

                {/* calories */}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero;