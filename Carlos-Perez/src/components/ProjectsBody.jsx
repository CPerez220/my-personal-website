import MyProjects from "./MyProjects"

const ProjectsBody = () => {
  return(
    <>
    <section class="intro">
        <h1>MY PROJECTS</h1>
        <div>
            <h3><span>👋</span>Welcome to my Projects.</h3>
            <h2>Throughout my programming journey, I’ve consistently undertaken projects to challenge myself and showcase my skills. On this website, you’ll find only my most significant projects.</h2>
              <h3>For a broader view of my work, feel free to explore my GitHub repository.</h3>
        </div>
        <div class="buttons">
          <a href="#myprojects"><button className="button">Go to my Projects</button></a>
          <a href="#skills"><button className="button">Go to my Github</button></a>
        </div>
    </section>
    <section id="myprojects">
      <MyProjects/>
    </section>
    </>
  )
}

export default ProjectsBody