import styles from "./About.module.css";
// import Member from "../UI/Member.js";
import Carousal from "./Carousal";

function About() {
  return (
    <div className={[styles.container, "about-container w-full"].join(' ')}>
      <div className="py-10">
        <img src="images/Enthu_logo.png" className={styles.logo} alt="logo" />
        <h1 className="text-5xl font-bold mt-2">ENTHUSIA, VJTI</h1>
        <div className="flex box-content px-6 md:w-1/2 mx-auto text-center justify-center">
          <h2 className="text-xl text-slate-200 font-sans font-semibold">
            Enthusia is VJTI's annual sports festival, generally held in the
            month of December. Enthusia has inter-college as well as
            intra-college events in a variety of sports. Enthusia provides the
            students with the much-needed physical activity amidst their busy
            academic schedule. We, at VJTI, are fortunate to have a basketball
            court, cricket ground, football ground, and an indoor and outdoor
            Gymnasium. Sarvesh Ekanth SHirude
          </h2>{" "}
        </div>
      </div>

      <div className={styles.cow}>
        <h1 className="text-2xl">Events</h1>
        {/* <span className="text-xl text-orange-700"> (Open to all)</span> */}
        <Carousal />



      </div>
    </div>
  );
}

export default About;
