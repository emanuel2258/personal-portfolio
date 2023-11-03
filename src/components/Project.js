import { Link } from "react-router-dom";
import "./Project.css";
function Project(project) {
  const technologies = project.technologies.map((technology) => {
    return (
      <span className="badge rounded-pill bg-primary"> {technology} </span>
    );
  });

  return (
    <div className="col project">
      <Link to={project.path}>
        <div className="card h-100">
          <img src={process.env.PUBLIC_URL + project.imageSource}
            class="card-img-top"
            alt={project.title}
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
          </div>
          <div class="card-footer">{technologies}</div>
        </div>
      </Link>
    </div>
  );
}

export default Project;
