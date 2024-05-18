import vYp from "../images/values.png"

const VyP = () => {
  return(
    <>
    <div className="about-section">
    <h1 className="title">Values and Principles</h1>
    <div class="container-about">
        <div class="text-info">
        <h2>As a professional, I hold certain core values close to my heart. These principles guide my actions and decisions:</h2>
        <ul>
          <li>Integrity: I believe in honesty, transparency, and doing what’s right—even when no one is watching.</li>
          <li>Continuous Learning: I’m passionate about growth and learning. Curiosity fuels my desire to explore new ideas and stay updated in my field.</li>
          <li>Empathy: Understanding others’ perspectives and treating everyone with kindness is essential to me. Empathy fosters better collaboration and relationships.</li>
          <li>Quality: I strive for excellence in everything I do. Whether it’s writing code, designing, or communicating, I aim for high standards.</li>
          <li>Innovation: I embrace creativity and seek innovative solutions.</li>
          <li>Teamwork: Collaboration is powerful. I value diverse perspectives and believe that together, we can achieve more.</li>
        </ul>
        <h2>Remember, these values are not just words—they shape my work ethic and interactions.</h2>
        </div>
        <div class="image-side">
            <img src={vYp}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default VyP