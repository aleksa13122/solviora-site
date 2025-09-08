import "./About.css";

export default function About() {
  return (
    <>
      <div className="about">
        <h1 className="about-header">About Us</h1>{" "}
        <div className="about-first">
          <p className="about-first-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minus
            dolor qui, voluptas facilis sequi in laboriosam velit, aliquam culpa
            quibusdam repudiandae facere odit cumque vel, ducimus atque illo
            inventore.
          </p>
          <div className="about-first-2ndcol">
            <div>SLIKA</div>
            <h1 className="about-title">SOLVIORA</h1>
          </div>
        </div>
        <div className="about-second">
          <div>SLIKA VELIKA</div>
        </div>
        <div className="about-third">
          <div className="about-third-card">ESTABLISHED 2025</div>
          <div className="about-third-card">BASED IN MALTA</div>
          <div className="about-third-card">SMALL TEAM</div>
        </div>
      </div>
    </>
  );
}
