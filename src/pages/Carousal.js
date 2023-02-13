// import logo from "../enthu-logo.png";
// import styles from "./About.module.css";
// import Member from "../UI/Member.js";
import { Carousel } from "react-bootstrap";
import styles from "./Carousal.module.css";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Carousal() {
    return (


        <>
            <Carousel pause="false">
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/01.jpg"
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/02.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>fourth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>fifth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/04.jpg"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>sixth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/05.jpg"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>seventh slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://ik.imagekit.io/jjrubqbgu/06.jpg"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>seventh slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Carousal;