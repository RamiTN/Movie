import { Link } from "react-router-dom";

function About() {
    return (
        <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6", color: "#ffffffff", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>About This Project</h1>

                <p>
                    This website is a personal project that I designed and developed entirely by myself, 
                    with the goal of deepening my understanding of modern web development practices and enhancing my practical skills in programming. 
                    Through this project, I gained extensive experience with <strong>React</strong>, learning how to structure components efficiently, manage application state, handle events, 
                    and implement dynamic rendering based on user interactions.
                </p>
                <p>
                    A key focus of the project was working with <strong>APIs</strong>. I integrated the OMDb API to fetch movie metadata dynamically, allowing the site to display movies based on user preferences or random selection. 
                    This taught me how to make asynchronous requests, process JSON responses, handle errors gracefully, and update the UI dynamically.
                </p>
                <p>
                    Importantly, all content retrieved through the API is <strong>legal metadata</strong>—posters, titles, descriptions, and other information provided by the API. 
                    This allowed me to learn how to work within ethical and legal boundaries while building a rich, interactive experience.
                </p>
                <p>
                    The project strengthened my knowledge of conditional rendering, responsive layouts, user-driven search functionality, and the broader use of HTML, CSS, and JavaScript in a modern web framework. 
                    It has been invaluable in helping me grasp both the technical aspects of web development and the broader considerations of building functional, compliant applications.
                </p>
                <p>
                    I am proud of this work and believe it reflects my ability to learn independently, solve problems creatively, and implement fully functional web applications. 
                    If you would like to learn more about this project, see it in action, or discuss my approach and experience, please feel free to <strong><a href="https://github.com/RamiTN" style={{  color: "#ff0000ff" }}>contact me</a></strong></p>
        </div>
    );
}

export default About;
