import coffee1 from "../assets/coffee1.jpg";
import coffee2 from "../assets/coffee1.jpg";
const About = () => {
    return(
   <section className=" bg-muted-warning p-6">
    <div className="container" id="about">
      <div className="row">
        <h1>About Us</h1>
        {/* First Card */}
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee1} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0">Our Mission</h5>
    <p className="card-text fg-2">Our mission is to serve freshly brewed, high-quality coffee
                            while creating a warm and friendly atmosphere where every
                            customer feels welcome.</p>
  </div>
</div>
        </div>
         {/* Second Card */}
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee2} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0"> Our Vision</h5>
    <p className="card-text fg-2">Our vision is to become the most loved coffee shop by
                            inspiring people through exceptional coffee, sustainable
                            practices, and memorable experiences.</p>
  </div>
</div>
        </div>
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee2} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0">Our History</h5>
    <p className="card-text fg-2">Our journey began in 2020 with a small café and a big dream.
                            Over the years, we have grown through the love and support
                            of our passion, quality, and community.</p>
  </div>
</div>
        </div>
      </div>
    </div>
   </section>
    );
};
export default About