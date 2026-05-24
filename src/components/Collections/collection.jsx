import axios from "axios";
import { useEffect, useState } from "react";
import './collection.css';

export function Collections() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {

        const fashionProducts = response.data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );

        setProducts(fashionProducts);

      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (

    <div id="collections" className="collections">

      <h1 className="collection-title">
        Trending Collections
      </h1>

      <div className="products-grid flex flex-wrap justify-center gap-6">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.title}
            />

            <h2>{product.title}</h2>

            <p>${product.price}</p>

            <button>View Product</button>

          </div>

        ))}

      </div>

    </div>
  );
}