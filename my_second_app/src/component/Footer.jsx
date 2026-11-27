const Footer = () =>{
    return(
           <section>
            <div className="container">
                <div className="row">
                    <div className="md:col-4 p-6">
                         <h3>
                  Coffee Culture
                </h3>

                
                <p class="mt-3"/>

                  <i class="bi bi-geo-alt-fill address-icon"></i>
                  <span>
                  Coffee Culture
                    123 FC Road,
                    Shivajinagar, Pune,
                    Maharashtra 411005, India
                  </span>

              

               
                <p>

                  <i class="bi bi-telephone-fill phone-icon"></i>

                  <a href="tel:+919876543210"
                    class="contact-link">

                    +91 98765 43210

                  </a>

                </p>

               
                <p>

                  <i class="bi bi-envelope-fill email-icon"></i>

                  <a href="mailto:hello@brewhaven.com"
                    class="contact-link">

                    hello@brewhaven.com

                  </a>

                </p>

            </div>
                    <div className="md:col-4 p-6">
                        <h4>
                  <i class="bi bi-clock"></i>
                  Opening Hours
                </h4>

                <ul class="list-unstyled mt-3 opening-hours">

                  <li>
                    <i class="bi bi-calendar"></i>
                    <strong>
                      Monday - Friday
                    </strong>

                    

                    8:00 AM - 10:00 PM
                  </li>

                  <li class="mt-3">
                    <i class="bi bi-calendar"></i>
                    <strong>
                      Saturday
                    </strong>

                 

                    9:00 AM - 11:00 PM

                  </li>

                  <li class="mt-3">
                    <i class="bi bi-calendar"></i>
                    <strong>
                      Sunday
                    </strong>

                    
                    9:00 AM - 9:00 PM

                  </li>

                </ul>
                    </div>
                    <div className="md:col-4 p-6 ">
                         <h4>
                  Follow Us
                </h4>

                <p class="mt-3">
                  Stay connected with us on social media.
                </p>
                       <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>whatsapp</li>
                        <li>Twitter</li>
                       </ul>
               

               
                    </div>
                    <div class="text-center">

              <p class="mb-0">
                © 2026 Coffee Culture. All Rights Reserved.
              </p>

            </div>
                   
                </div>
            </div>
           </section>
    );
};
export default Footer