import * as React from "react";
import Cta from "./cta";

  type Link = {
    label: string;
    url: string;
  };

  const links: Link[] = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Menu",
      url: "#",
    },
    {
      label: "Delivery & Collection",
      url: "#",
    },    
    {
      label: "A Celebration of Flavour",
      url: "#",
    },    
    {
      label: "E-gifts",
      url: "#",
    },    
    {
      label: "Christmas",
      url: "#",
    },    
    {
      label: "Working with us",
      url: "#",
    }
  ];

  const Header = () => {
    const linkDoms = links.map((link) => (
      <div key={link.label}>
        <a href={link.url} >
          {link.label}
        </a>
      </div>
    ));

    

  return (
    <>
      <div id="header" class="header-nav sticky z-100 white-bg">
   <div className="container-fluid white-bg">
      <section className="banner">
         <div className="column header-content ordered-header has-background-white relative z-20">
            <div className="header-content-left">
               <a className="button location primary-button" data-command="visit" data-name="js-geolocation-findnearest" href="/find-and-book/search"><span className="nowrap"><i className="fas fa-map-marker-alt" aria-hidden="true"></i><span className="is-hidden-touch">Find a restaurant</span></span></a>
               <a className="button booking primary-button is-size-7-mobile" href="/find-and-book/search/?lat=" title="Book now">Book now</a>
            </div>
            <div className="header-content-middle grid is-justified-col-centered">
          <span class="sr-only">L'Occitane en Provence</span>  
            
               {/* <a className="logo" href="/">
               <img className="lockup fadein imgFinal" src="https://www.prezzorestaurants.co.uk/contentassets/6c6e93172bf94b3a88b4c359be8d75fe/1280px-prezzo_logo_black.png" alt="Prezzo Italian Restaurant, Pizza, Pasta, Takeaway, Delivery, Restaurant near me, Restaurant in, Pizza Express, Zizzi, deliveroo"></img>
               </a> */}
            </div>
            <div className="header-content-right grid">
               <span className="navbar-burger burger" data-target="navbarMenu">
               <span></span>
               <span></span>
               <span></span>
               </span>
            </div>
         </div>
         <div className="container-fluid is-hidden-touch">
            <span className="divider"></span>
         </div>
         <div className="px-3-desktop">
            <div id="navbarMenu" className="container-fluid navbar-menu header-menu-nav z-19 px-4-touch pb-4-touch">
               <nav className="navbar">
                  <a className="navbar-item " href="/" title="Home">
                  <span>Home</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " href="/menus/main-menu/" title="Menus">
                  <span>Menus</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " target="_top" href="/order-online/" title="Delivery &amp; Collection">
                  <span>Delivery &amp; Collection</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " href="/celebration-of-flavour/" title="A Celebration of Flavour">
                  <span>A Celebration of Flavour</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " href="https://www.prezzoegifts.co.uk/" title="E-gifts">
                  <span>E-gifts</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " href="/christmas/early-bird/" title="Christmas">
                  <span>Christmas</span>
                  </a>
                  <div className="navbar-item navbar-seperator">
                     <span>&nbsp;</span>
                  </div>
                  <a className="navbar-item " target="_blank" href="https://jobs.prezzorestaurants.co.uk/" title="Working with us">
                  <span>Working with us</span>
                  </a>
               </nav>
            </div>
         </div>
      </section>
   </div>
</div>
    </>
  );
};

export default Header;
