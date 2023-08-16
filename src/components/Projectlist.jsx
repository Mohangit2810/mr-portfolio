import ProjectCard from "../components/Projectcard";
import { Container, Row, Col } from "react-bootstrap";
import projectone from "/src/static/projectone.jpg";
import projecttwo from "/src/static/projecttwo.jpg";
import "../pages/style.css";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-netflixweb-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col> */}

            {/* <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
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
