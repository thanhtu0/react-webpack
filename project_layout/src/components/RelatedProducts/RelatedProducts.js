import React, { useState } from 'react';
import './RelatedProducts.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const initialProducts = [
    {
        id: 1,
        liked: false,
        name: "Globe Tilt Skate Shoes - Black Split...",
        price: "£64.99",
        sold: 157,
        imgSrc: "assets/image/product/product_related/product_1.png",
    },
    {
        id: 2,
        liked: false,
        name: "Nike SB Zoom Blazer Mid Premium...",
        price: "£94.99",
        sold: 575,
        imgSrc: "assets/image/product/product_related/product_2.png",
    },
    {
        id: 3,
        liked: true,
        name: "Globe Skate Shoes - Golden...",
        price: "£84.99",
        sold: 1573,
        imgSrc: "assets/image/product/product_related/product_3.png",
    },
    {
        id: 4,
        liked: false,
        name: "Footprint Worn Gamechangers...",
        price: "£44.95",
        sold: 175,
        imgSrc: "assets/image/product/product_related/product_4.png",
    },
];

const RelatedProducts = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleLikeToggle = (id) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, liked: !product.liked } : product
        ));
    };

    return (
        <div className="related-products">
            <h2>You May Also Like ___</h2>
            <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <div className="heart-icon" onClick={() => handleLikeToggle(product.id)}>
                        {product.liked ? <AiFillHeart color="black" /> : <AiOutlineHeart color="black" />}
                    </div>
                    <img src={product.imgSrc} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p><b>{product.price}</b> {product.sold} sold</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
