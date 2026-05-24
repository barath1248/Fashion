import './fashionsection.css';
export function FashionSection() {
    return (
        <>

            {/* FIRST SECTION */}

            <div className="fashion-section">

                <div className="fashion-image">
                    <img src="/image1.jpg" alt="" />
                </div>

                <div className="fashion-content">

                    <span className="tag">TRENDING 2026</span>

                    <h1>
                        Discover Your <br /> Fashion Style
                    </h1>

                    <p>
                        Premium fashion collections designed for
                        modern streetwear and luxury lifestyle.
                    </p>

                    <button>Explore Collection</button>

                </div>

            </div>



            {/* SECOND SECTION */}

            <div className="fashion-section">

                <div className="fashion-content">

                    <span className="tag">NEW ARRIVALS</span>

                    <h1>
                        Elevate Your <br /> Everyday Look
                    </h1>

                    <p>
                        Timeless outfits crafted for comfort,
                        confidence, and modern elegance.
                    </p>


                    <div className="mini-cards">

                        <div className="mini-card">
                            <h2>500+</h2>
                            <span>Premium Products</span>
                        </div>

                        <div className="mini-card">
                            <h2>24/7</h2>
                            <span>Customer Support</span>
                        </div>

                    </div>

                    <button>Shop Now</button>

                </div>


                <div className="fashion-image">
                    <img src="/image2.jpg" alt="" />
                </div>

            </div>



            {/* BRANDS SECTION */}

            <div className="brands">

                <div className="brands-track">
                    <h1>ZARA</h1>
                    <h1>H&M</h1>
                    <h1>GUCCI</h1>
                    <h1>PRADA</h1>
                    <h1>NIKE</h1>
                    <h1>ADIDAS</h1>
                    <h1>PUMA</h1>
                    <h1>LEVI'S</h1>

                </div>

            </div>

        </>
    );
}