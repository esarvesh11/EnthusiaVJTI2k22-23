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
                        src="https://github.com/vishaldhangar15/Images/blob/main/image%20(1).png?raw=true"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>fourth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://github.com/vishaldhangar15/Images/blob/main/image%20(2).png?raw=true"
                        alt="Fifth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>fifth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://github.com/vishaldhangar15/Images/blob/main/image%20(3).png?raw=true"
                        alt="Sixth slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>sixth slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://github.com/vishaldhangar15/Images/blob/main/image%20(4).png?raw=true"
                        alt="Seventh slide"
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