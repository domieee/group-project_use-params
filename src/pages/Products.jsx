import Title from '../components/title/Title.jsx'
import ProductCard from '../components/productCard/ProductCard.jsx';
import products from '../data/data.js'

const Products = () => {
    return (
        <>
            <div className='flex'>
                <Title title="What we have" pageName="Products" />
            </div>
            {products.map((product) => {
                return <ProductCard
                    productName={product.productName}
                    image={product.image}
                />    
            })}
        </>
    );
}

export default Products;