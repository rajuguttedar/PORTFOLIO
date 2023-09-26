import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm RAJU</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">MERN Full Stack</span>{" "}
            <br />
            Developer
          </h1>
        </div>
        <Link className="btn btn-primary" Navigate="">Get In Touch</Link>
      </div>
      <div className="hero--section--img">
        <img className="card-img" src="./img/rajug.png" alt="Hero Section" />
      </div>
    </section>
  );
}
