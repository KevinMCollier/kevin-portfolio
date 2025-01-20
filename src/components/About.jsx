export default function About() {
  return (
    <div className="about-container">
      <div className="about-flex">
        <section className="text-section">
          <p>
            Growing up in Arizona, my first job was to wash dishes at a Thai restaurant in downtown Tucson. I was often alone, working in the back of the restaurant. I could have felt lonely, but instead I developed meaningful relationships with the servers and chefs. They would come in, vent about a customer, share a laugh, and in those moments I would remember that I was part of a larger team. Washing dishes could have been just a mundane part-time job, but instead it was a lesson in building teams and creating a sense of responsibility towards one another.
          </p>
          <br/>
          <p>
            That early experience has guided my life and career. From leading classrooms of young students in Japan, to developing recruitment and onboarding departments, to learning about the challenges facing software engineers, I’ve always focused on creating connected and cohesive teams. Along the way, I’ve discovered that the right environment, combined with the right people, can inspire incredible growth and innovation.
          </p>
          <br/>
          <p>
            My goal is to build and support the teams that will do great work together.
          </p>

        <div className="signature-container">
  <span className="contact-text">
    Contact:
    <a
      href="https://www.linkedin.com/in/kevin-collier/"
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-link"
    >
      LinkedIn
    </a>
  </span>
  <h2>- Kevin M. Collier</h2>
</div>

        </section>
        <aside className="image-section">
          <img
            src="src/kevin-standing-profile.JPG"
            alt="Profile Picture"
            className="profile-pic"
          />
        </aside>
      </div>
    </div>
  );
}
