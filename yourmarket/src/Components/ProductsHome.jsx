import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ProductHome from "./ProductHome";
import "../Styles/productshome.css";
import logger from "use-reducer-logger";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
   switch (action.type) {
      case "FETCH_REQUEST":
         return { ...state, loading: true };
      case "FETCH_SUCCESS":
         return { ...state, products: action.payload, loading: false };
      case "FETCH_FAIL":
         return { ...state, loading: false, error: action.payload };
      default:
         return state;
   }
};

const ProductsHome = () => {
   const [{ loading, error, products }, dispatch] = useReducer(
      logger(reducer),
      {
         products: [],
         loading: true,
         error: "",
      }
   );

   //const [products, setProducts] = useState([]); //default is empty database or json, no products

   useEffect(() => {
      const fetchData = async () => {
         dispatch({ type: "FETCH_REQUEST" });
         try {
            const result = await axios.get(
               "http://localhost:5000/api/products"
            );
            dispatch({ type: "FETCH_SUCCESS", payload: result.data });
         } catch (err) {
            dispatch({ type: "FETCH_FAIL", payload: err.message });
         }

         //setProducts(result.data);
      };
      fetchData();
   }, []);

   return (
      <div className="hps-container">
         <h2>Latest Products</h2>
         <div className="hps-row">
            {/* 0, 8 is first 8, but for latest 8 is -8 */}
            {loading ? (
               <h1 className="loading">Loading...</h1>
            ) : error ? (
               <h1 className="error">{error}</h1>
            ) : (
               products
                  .slice(-5)
                  .map((item) => <ProductHome item={item} key={item._id} />)
            )}
         </div>
         <div className="more">
            <Link to="/shop">More products</Link>
         </div>
      </div>
   );
};

export default ProductsHome;
