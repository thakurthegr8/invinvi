import { projects } from "../data/projects";

export default function Project({ project }) {
  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.imageSrc} alt={project.title} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === params.id);
  return { props: { project } };
}
