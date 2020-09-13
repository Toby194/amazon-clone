import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" 
            />
            {/* Product has id, title, price, rating, imgage */}
            <div className="home__row">
                <Product 
                    id="12321374"
                    title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
                    price={2099.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SL1500_.jpg"
                />
                <Product 
                        id="12321370"
                        title="Brother HL-L2300D Monochrome Laser Printer with Duplex Printing"
                        price={74.99}
                        rating={2}
                        image="https://m.media-amazon.com/images/I/716r6a-4MDL._AC_UY218_.jpg"
                />
                <Product 
                        id="12321373"
                        title="Apple AirPods Pro"
                        price={219.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12321341"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={15.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                />
                <Product 
                    id="12321352"
                    title="KitchenAid KP26M1XER 6 Qt. Professional 600 Series Bowl-Lift Stand Mixer - Empire Red"
                    price={279.00}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81BOGWDXGHL._AC_SL1500_.jpg"
                />
                
            </div>
            <div className="home__row">
                <Product 
                    id="12321385"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
                    price={1099.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IHxsdQIjL._AC_SL1000_.jpg"
                />
                <Product 
                    id="12321363"
                    title="Echo Plus (2nd Gen) - Premium sound with built-in smart home hub - Charcoal"
                    price={74.99}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/613xRVXsMzL._AC_SL1000_.jpg"
                />

            </div>
            <div className="home__row">
                
                <Product 
                        id="12321346"
                        title="Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)"
                        price={999.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Hh-0F7AbL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
