import pg from "../images/graduation.png"

const PG = () => {
  return (
    <>
    <div className="about-section">
    <h1 className="title">Professsional Goals</h1>
    <div class="container-about">
        <div class="text-info">
        <h2>Hera are some of my goals</h2>
        <ul>
          <li>Web Development Career: My primary goal is to secure a web developer position at a technology company in Silicon Valley.</li>
          <li>Cloud Expertise: I’m also keen on learning about cloud management, as I aspire to become a cloud specialist.</li>
          <li>Cybersecurity Interest: I’m highly interested in the field of cybersecurity, given its growing demand.</li>
          <li>Education and Homeownership: Additionally, I aim to graduate with a bachelor’s degree and eventually purchase a house in Fremont or San Jose for convenience.</li>
        </ul>
        </div>
        <div class="image-side">
            <img src={pg}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default PG