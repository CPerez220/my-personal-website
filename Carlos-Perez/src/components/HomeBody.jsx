import Experience from "./Experience"
import Education from "./Education"
import Skills from "./Skills"
import Intro from "./Intro"

const HomeBody = () => {
  return (
    <>
    <Intro/>
    <Skills/>
    <Education/>
    <Experience/>
    <section class="welcome-section">
        <h1>Thank You for Visiting!</h1>
        <p>🌟 As a perpetual learner, I'm constantly updating this space with new ideas, skills, and experiences. Life is a journey, and this website reflects my ongoing exploration. Feel free to stay a while and explore—I promise there's always something new to discover!</p>
    </section>
    </>
  )
}

export default HomeBody