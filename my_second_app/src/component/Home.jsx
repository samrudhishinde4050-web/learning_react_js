
import HomeImage from "../assets/service.png";

const Home = () => {
  return (
   <div>
    <section className="bg-subtle-warning" id="home">
      <div className="continer">
        <div className="row">
          <div className="md:col-6 p-6">
            <h1>Welcome to Coffee Culture </h1>
             <p>Welcome to Coffee Culture, your perfect place to relax, refresh, and enjoy the taste of freshly brewed coffee. We believe that every cup of coffee tells a story and every moment deserves to be special. Our café is designed to bring people together, offering a warm, cozy, and welcoming atmosphere where you can enjoy your favorite beverages and create beautiful memories.
At Coffee Culture, we serve a delightful variety of freshly prepared coffee, rich espresso, creamy cold coffee, aromatic hot coffee, and delicious treats made with love and care. Whether you are a coffee enthusiast, a student looking for a peaceful study spot, a professional taking a break, or someone spending quality time with friends and family, we have something special for everyone.</p>    
   <p>
    Our passion is to provide not just great coffee, but also an unforgettable experience. From the first sip to the last, we aim to make every visit enjoyable with quality ingredients, friendly service, and a comfortable environment.
   </p>

   <p>Come and discover your favorite coffee, enjoy the soothing aroma of freshly brewed beans, and take a break from your busy day. At Coffee Culture, every cup brings comfort, happiness, and a little moment of magic.

Coffee Culture – Where Every Sip Feels Like Home!</p>

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
