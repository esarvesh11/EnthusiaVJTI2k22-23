// import logo from "../enthu-logo.png";
// import styles from "./About.module.css";
// import Member from "../UI/Member.js";
import { Carousel } from "react-bootstrap";
import styles from "./Carousal.module.css"

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Carousal() {
    return (


        <>
            <Carousel pause="false">
                <Carousel.Item >
                    <img
                        className="d-block w-100 "
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

export default Carousal;