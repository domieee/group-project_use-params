import { Link } from 'react-router-dom'

const ProductCard = (product) => {

    return (
        <>
            <h1>{product.productName}</h1>
            <img src={product.image} alt="Product" />
            <Link to={`/products/${product.productName}`}>Shop Now</Link>
    </>
    );
}

export default ProductCard;