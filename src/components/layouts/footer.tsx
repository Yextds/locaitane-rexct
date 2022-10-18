import * as React from "react";

var currentTime = new Date()
var year = currentTime.getFullYear()

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Privacy Policy",
    url: "/",
  },
  {
    label: "Copyright/Legal Info",
    url: "/copyright"
  },
];


const Footer = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
   <>
   <footer className="footer">
   <div className="content">
      <div className="container-fluid has-text-left is-size-6">
         <div className="columns">
            <div className="column is-12 p-0">
               <a className="logo mb-6" href="/">
               <img className="lockup fadein imgFinal" src="https://www.prezzorestaurants.co.uk/assets/images/brand/1280px-Prezzo_Logo_White.png" alt="Logo"></img>
               </a>
            </div>
         </div>
         <div className="columns is-mobile">
            <div className="column is-half-mobile">
               <a href="/" target="_self" title="Prezzo" rel="noreferrer">
               <img src="https://www.prezzorestaurants.co.uk/assets/images/brand/pasta-pizza-vino.png" alt="Logo" className="fadein imgFinal"></img>
               </a>
               <div className="social-media is-size-3">
                  <a href="https://www.facebook.com/loveprezzo" target="_blank" title="Facebook" rel="noreferrer"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                  <a href="http://instagram.com/love_prezzo" target="_blank" title="Instagram" rel="noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                  <a href="https://twitter.com/love_prezzo" target="_blank" title="Twitter" rel="noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
               </div>
            </div>
            <div className="column is-half-mobile is-justify-content-flex-start">
               <h5><strong>About Prezzo</strong></h5>
               <ul>
                  <li><a href="https://jobs.prezzorestaurants.co.uk/" title="Careers">Careers</a></li>
                  <li><a href="/community-commitments/" title="Community Commitments">Community Commitments</a></li>
                  <li><a href="/health/hub/" title="Health Hub">Health Hub</a></li>
                  <li><a href="/offers/" title="Offers">Offers</a></li>
                  <li><a href="/competitions/" title="Competitions">Competitions</a></li>
               </ul>
            </div>
            <div className="column is-half-mobile is-justify-content-flex-start">
               <h5><strong>Menus</strong></h5>
               <ul>
                  <li><a href="/menus/main-menu/" title="Main Menu">Main Menu</a></li>
                  <li><a href="/menus/kids-menu-2021/" title="Kid's Menu">Kid's Menu</a></li>
                  <li><a href="/menus/drinks-menu-2021/" title="Drinks Menu">Drinks Menu</a></li>
               </ul>
            </div>
            <div className="column is-half-mobile is-justify-content-flex-start">
               <h5><strong>Privacy</strong></h5>
               <ul>
                  <li><a href="/privacy-policy/" title="Privacy Policy">Privacy Policy</a></li>
                  <li><a href="/footer-links/website-terms-of-use/" title="Terms of use">Terms of use</a></li>
               </ul>
            </div>
            <div className="column is-half-mobile is-justify-content-flex-start">
               <h5><strong>Booking</strong></h5>
               <ul>
                  <li><a href="/find-and-book/" title="Book a table">Book a table</a></li>
                  <li><a href="/order-online/" title="Delivery &amp; Collection">Delivery &amp; Collection</a></li>
                  <li><a href="/celebration-booking/" title="Event Bookings">Event Bookings</a></li>
               </ul>
            </div>
            <div className="column is-half-mobile is-justify-content-flex-start">
               <h5><strong>FAQs</strong></h5>
               <ul>
                  <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us/requests/new" title="Contact Us">Contact Us</a></li>
                  <li><a href="https://support.prezzorestaurants.co.uk/hc/en-us" title="FAQs">FAQs</a></li>
                  <li><a href="/about-prezzo/modern-slavery-statement/" title="Modern Slavery Statement">Modern Slavery Statement</a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</footer>
   </>
  );
};

export default Footer;
