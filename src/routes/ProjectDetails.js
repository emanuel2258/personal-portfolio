import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import projectsData from "../data/Projects.json";
import "./ProjectDetails.css";

function ProjectDetails() {
  window.scrollTo(0, 0); //this will allow the screen to scroll to the top
  let { id } = useParams(); //this is used to extract the project ID from the URL
  let project = projectsData.find((project) => project.id === id);
  let links = project.links.map((link) => {
    return (
      <>
      {<h6 className="subSectionHeader">{link.githubPages ? "Github Pages" : "Github Repo"}</h6>}
      {link.githubPages ? <a href={link.githubPages}>{link.githubPages}</a> : <a href={link.githubRepo}>{link.githubRepo}</a>}
      </>
    );
  });

  return (
    <main className="body projectDetails">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {project.title}
          </li>
        </ol>
      </nav>
      <h2 className="projectTitle">{project.title}</h2>
      <img
        src={process.env.PUBLIC_URL + project.imageSource}
        className="card-img-top"
        alt={project.imageCaption}
      />

      <figcaption class="figure-caption">
      {project.imageCaption}
      </figcaption>
      <h4 className="sectionHeader">Project Description</h4>
      <p>{project.description}</p>
      <h4 className="sectionHeader">Development Process</h4>
      <p>{project.developmentProcess}</p>
      <h4 className="sectionHeader">My Role in the Development Process</h4>
      <p>{project.myRole}</p>
      <h4 className="sectionHeader">Technologies Used</h4>
      <ul>
        {project.technologies.map((technology) => (
          <li >{technology}</li>
        ))}
      </ul>
      {project.links.length > 0 &&
      <h4 className="sectionHeader" >Links</h4>}
      {links}  
      {/* {linkRes.map((link) => (
          <li >{link}</li>
        ))} */}
    </main>
  );
}

export default ProjectDetails;
