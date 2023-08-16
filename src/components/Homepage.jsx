import { Container, Row, Col } from "react-bootstrap";
import Text from "../components/Text";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../pages/style.css";

function Home() {
  return (
    <div className="homepagebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I&#39;m MohanRaji</h2>
            <span></span>
            <Text />
            <button
              onClick={() => {
                window.open("https://github.com/Mohangit2810");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mohan-raji-95bb8a223/"
                );
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://twitter.com/MohanRaji212855");
              }}
              className="socailmediabtn"
            >
              <AiOutlineTwitter className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://instagram.com/mohan_raji_28");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;