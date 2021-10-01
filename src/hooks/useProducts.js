import { useEffect, useState } from "react"
import OrderReview from "../components/OrderReview/OrderReview";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    // return necessary things
    return [products, setProducts];
}

// permission to another folder or another person

export default useProducts;

