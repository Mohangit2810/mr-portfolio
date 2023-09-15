import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import projectone from "/src/static/projectone.jpg";
import projecttwo from "/src/static/projecttwo.jpg";
import projectthree from "/src/static/projectthree.jpg";
import projectfour from "/src/static/projectfour.png";
import projectfive from "/src/static/projectfive.png";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectfive}
                isBlog={false}
                title="Cosmic Crafts"
                description="Cosmic Crafts is a static website that is built for a community based startup idea. It is built with React JS and styled completely with bootstrap."
                ghLink="https://cosmiccrafts.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectone}
                isBlog={false}
                title="Omnifood Website"
                description="Omnifood Website is a static website build with HTML,CSS and little bit of javascript. This is a responsive website which resizes according to the screen size. This project is done under the guidance of Udemy course 'Responsive Website with HTML and CSS'"
                ghLink="https://omnifood.dev"
                developing={false}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projecttwo}
                isBlog={false}
                title="Movie Watchlist"
                description="Movie Watchlist is a simple web application built with HTML,CSS and ReactJS receives movies data form TMDB (The Movie Data Base) based on the query received in the search box. It stores the watchlist data in the local storage of the app. This project is done under the guidance of Udemy course, 'The Ultimate React Course'"
                ghLink="https://olx-clone-rahul.netlify.app/"
                developing={true}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectthree}
                isBlog={false}
                title="todo App"
                description="This todo app is simple web app done with ReactJS. This project shows the effective ways of using useState() hook which makes this very easy to build."
                ghLink="https://github.com/Mohangit2810/todo-app"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={projectfour}
                isBlog={false}
                title="Responsive Camping Website"
                description="This Responsive Camping Website is built with HTML,CSS and JavaScript. It uses GSAP for image animation. This one has a simple aesthetic animation to attract the users."
                ghLink="https://mohangit2810.github.io/camping-landing-page/"
              />
            </Col>

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
