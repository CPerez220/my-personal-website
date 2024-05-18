import ByE from "./ByE"
import VyP from "./VyP"
import PG from "./PG"

const AboutIntro = () => {
  return (
    <>
    <section class="intro">
        <h1>EVERTHING ABOUT ME</h1>
        <div>
            <h3>My Name is Carlos Perez</h3>
            <h2>In this section, you will discover insights into my background and personal journey. To navigate between sections, simply scroll down. Each section is dedicated to different topics about me</h2>
              <h3>For faster exploration, use the buttons below to navigate to dedicated topic sections.</h3>
        </div>
        <div className="buttons">
          <a href="#background"><button className="button">Background and Expertise</button></a>
          <a href="#values"><button className="button">Values and Principles</button></a>
          <a href="#goals"><button className="button">Professional Goals</button></a>
        </div>
      </section>
      <section id="background">
        <ByE />
      </section>
      <section id="values">
        <VyP />
      </section>
      <section id="goals">
        <PG />
      </section>
    </>
  )
}

export default AboutIntro