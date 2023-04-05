// import { projects } from "../data/projects";

export default function Project({ project }) {
  return (
    <div>
      <iframe src={`/${project}/index.html`} className="w-full h-[100vh]"/>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  // const project = projects.find((p) => p.id === query.id);
  return { props: { project: query.id } };
}
