import { useParams } from "react-router-dom";
import products from '../data/data.js'
import Title from '../components/title/Title.jsx'

const ProductPages = () => {

    const params = useParams();

    const product = products.filter((product) => {
        return product.productName === params.productName
    })
    console.log(product[0].description);

    return (
        <>
            <Title title={params.productName} pageName='Products' />
            <div className="singleProductWrap">
                <img src={product[0].image} alt="Product Image" />
                <p>{product[0].description}</p>
            </div>
        </>
    );
}

export default ProductPages;