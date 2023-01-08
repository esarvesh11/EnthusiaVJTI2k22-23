// import logo from "../enthu-logo.png";
// import styles from "./About.module.css";
// import Member from "../UI/Member.js";
import { Carousel } from "react-bootstrap";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function About() {
    return (
        // <div className="about-container w-full">
        //   <div className="py-10">
        //     <img src={logo} className={styles.logo} alt="logo" />
        //     <h1 className="text-5xl font-bold">ENTHUSIA, VJTI</h1>
        //     <div className="flex box-content px-6 md:w-1/2 mx-auto text-center justify-center">
        //       <h2 className="text-xl text-slate-200 font-sans font-semibold">
        //         Enthusia is VJTI's annual sports festival, generally held in the
        //         month of December. Enthusia has inter-college as well as
        //         intra-college events in a variety of sports. Enthusia provides the
        //         students with the much-needed physical activity amidst their busy
        //         academic schedule. We, at VJTI, are fortunate to have a basketball
        //         court, cricket ground, football ground, and an indoor and outdoor
        //         Gymnasium.
        //       </h2>{" "}
        //     </div>
        //   </div>

        //   <div className="m-4">
        //     <h1 className="text-2xl">Upcoming events</h1>
        //     <span className="text-xl text-pink-700"> (Open to all)</span>

        //     <div class="p-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        //       <a
        //         className="border-solid border-2 rounded border-blue-500 p-4"
        //         href="/marathon"
        //       >
        //         <Member
        //           name="Marathon (2oth March)"
        //           alt="enthusia-marathon-poster"
        //           src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/Marathon-NON%20VJTIANS.png?raw=true"
        //         />
        //       </a>
        //       <a
        //         className="border-solid border-2 rounded border-blue-500 p-4"
        //         href="/valorant"
        //       >
        //         <Member
        //           name="Valorant (16th -19th March)"
        //           alt="enthusia-valorant-poster"
        //           src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/Valorant.png?raw=true"
        //         />
        //       </a>
        //       <a
        //         className="border-solid border-2 rounded border-blue-500 p-4"
        //         href="/bgmi"
        //       >
        //         <Member
        //           name="BGMI (17th -19th March)"
        //           alt="enthusia-bgmi-poster"
        //           src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/BGMI.png?raw=true"
        //         />
        //       </a>
        //       <a
        //         className="border-solid border-2 rounded border-blue-500 p-4"
        //         href="/online-chess"
        //       >
        //         <Member
        //           name="Chess (16th -17th March)"
        //           alt="enthusia-chess-poster"
        //           src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/Chess.png?raw=true"
        //         />
        //       </a>
        //     </div>
        //   </div>
        // </div>

        <>
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100 h-full "
                        src="https://github.com/vishaldhangar15/Images/blob/main/cyc_final.jpg?raw=true"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://github.com/vishaldhangar15/Images/blob/main/cr_final.jpg?raw=true"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://github.com/vishaldhangar15/Images/blob/main/th%20final.jpg?raw=true"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default About;