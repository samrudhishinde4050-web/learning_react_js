
import HomeImage from "../assets/service.png";

const Home = () => {
  return (
   <div>
    <section className="bg-subtle-warning" id="home">
      <div className="continer">
        <div className="row">
          <div className="md:col-6 p-6">
            <h1>Welcom To My Site</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque officiis unde dolore cupiditate, ipsam voluptatem pariatur praesentium repudiandae! Consequuntur reiciendis dolore laudantium facere hic, asperiores rerum vel tempora quia officiis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus cumque fugiat iste, hic, repellat dolores libero aliquid consectetur, fuga alias impedit doloremque nostrum quo laudantium itaque accusantium repudiandae incidunt adipisci?</p>
            
            
          </div>
          <div className="md:col-6 p-6">
            <img src={HomeImage} className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
   </div>
  );
};

export default Home;
