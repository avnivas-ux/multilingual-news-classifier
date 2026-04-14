import styles from "../style";
import { fnews } from "../assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      {/* LEFT SIDE */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <h1 className="font-poppins font-semibold ss:text-[60px] text-[40px] text-white leading-tight">
          Detect Fake News <br />
          <span className="text-gradient">with AI</span>
        </h1>

        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          Fake news spreads faster than real information in today’s digital world. 
          It can influence public opinion, create panic, and mislead millions of people.
          Our AI-powered system helps you quickly verify whether a news article is real or fake.
</p>

        {/* CTA BUTTON */}
        

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={fnews}
          alt="fake news detection"
          className="w-[100%] h-[100%] object-contain relative z-[5]"
          />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;