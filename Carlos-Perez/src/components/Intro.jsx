import { Link } from "react-router-dom"

const Intro = () => {
  return (
    <>
    <section class="intro">
        <h1>SOFTWARE DEVELOPER</h1>
        <div>
            <h3><span>👋</span> Hello there, I am Carlos Perez</h3>
            <h2>As a skilled software developer with a strong foundation in both technical and professional competencies</h2>
              <h3>I bring a diverse set of skills and experiences to the table.</h3>
        </div>
        <div class="buttons">
            <Link to="/projects"><button class="button">See my projects</button></Link>
            <button class="button">Know more about me</button>
        </div>
    </section>
    </>
  )
}

export default Intro