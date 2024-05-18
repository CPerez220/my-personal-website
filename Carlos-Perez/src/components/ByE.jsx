import bYe from "../images/cornfields.jpg"

const ByE = () => {
  return (
    <>
    <div className="about-section">
    <h1 className="title">Background and Expertise</h1>
    <div class="container-about">
        <div class="text-info">
        <h2>I was born in Hayward, CA, but spent most of my life in Jalisco, Mexico. Upon returning to the USA, I faced the challenge of learning English, which I eventually mastered, becoming fluent in two languages. Adapting to the different culture here was another hurdle, but I gradually adjusted. Now, at 22 years old, I work as a software developer—the only one in my family with higher education and a focus on technology. My experiences range from working on my grandfather’s farm to managing teams at Target. Despite setbacks, including a stolen car and a car accident, I’m currently pursuing web development and video game projects.</h2>
        </div>
        <div class="image-side">
            <img src={bYe}/>
        </div>
    </div>
    </div>
    </>
  )
}

export default ByE