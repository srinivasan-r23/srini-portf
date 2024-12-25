import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Got a project idea? <br className="sm:block hidden" />
        Let's create something amazing together!
      </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  );
};

export default CTA;
