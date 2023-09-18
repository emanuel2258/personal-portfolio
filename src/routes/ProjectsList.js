import Project from "../components/Project";
import projectsData from "../data/Projects.json";
import "./ProjectList.css";

function ProjectList() {
  const projects = projectsData.map((project) => {
    return (
      <Project
        title={project.title}
        description={project.description}
        path={"/projects/"+project.id}
        imageSource={project.imageSource}
        technologies ={project.technologies}
      />
    );
  });
  return (
    <main className="body">
      <h1>Projects</h1>
      <ul class="row row-cols-1 row-cols-md-2 g-4">{projects}</ul>
    </main>
  );
}

export default ProjectList;
