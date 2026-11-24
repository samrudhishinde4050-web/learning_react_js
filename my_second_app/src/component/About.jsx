import coffee1 from "../assets/coffee1.jpg";
import coffee2 from "../assets/coffee1.jpg";
const About = () => {
    return(
   <section className="mt-5 mb-5 bg-muted-warning p-6">
    <div className="container" id="about">
      <div className="row">
        <h1>About Us</h1>
        {/* First Card */}
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee1} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0">Image within the body</h5>
    <p className="card-text fg-2">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
         {/* Second Card */}
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee2} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0">Image within the body</h5>
    <p className="card-text fg-2">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
        <div className="md:col-4">
          <div className="card" >
  <div className="card-body">
    <img src={coffee2} className="image-fluid" alt="..."/>
    <h5 className="mt-2 mb-0">Image within the body</h5>
    <p className="card-text fg-2">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <small className="fg-3">Last updated 3 mins ago</small>
  </div>
</div>
        </div>
      </div>
    </div>
   </section>
    );
};
export default About