const About = () => {
  return (
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col-md-6">
          <img src="/assets/about.jpg" alt="About" className="w-75 mt-5" />
        </div>
        <div className="col-md-6">
          <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
          <hr className="w-50"/>
          <p className="lead mb-4">RBO is a book request application where users can request any books they desire and we will aim to provide the books.</p>
          <a className="btn btn-primary rounded-pill px-4 py-2" href="/books">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default About;
