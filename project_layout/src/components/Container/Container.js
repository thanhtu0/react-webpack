import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Container() {
    return (
        <div id="container">
            <div className='image-product'>
                <img src='assets/image/product/product_details/product_detail_1.png' alt="Ảnh lỗi"/>
                <img src='assets/image/product/product_details/product_detail_2.png' alt="Ảnh lỗi"/>
                <img src='assets/image/product/product_details/product_detail_3.png' alt="Ảnh lỗi"/>
                <img src='assets/image/product/product_details/product_detail_4.png' alt="Ảnh lỗi"/>
                <img src='assets/image/product/product_details/product_detail_5.png' alt="Ảnh lỗi"/>
                <img src='assets/image/product/product_details/product_detail_6.png' alt="Ảnh lỗi"/>
            </div>

            <div className='image-show'>
                <img src='assets/image/product/product_details/product_detail_1_show.png' alt="Ảnh lỗi"/>
            </div>

            <div className="product-details">
                <h1>Globe Sabre Skate Shoes - Black</h1>
                <p class="price">£84.99</p>
                
                <div class="size-selector">
                    <span>Size</span>
                    <div class="sizes">
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button disabled>10</button>
                        <button disabled>11</button>
                    </div>
                </div>
                
                <div class="quantity-selector">
                    <button class="quantity-decrease">-</button>
                    <span class="quantity">1</span>
                    <button class="quantity-increase">+</button>
                </div>

                <div class="actions">
                    <button class="wishlist-button"><FontAwesomeIcon icon="fa-solid fa-heart" /> Add to Wishlist</button>
                    <button class="cart-button">Add to Cart</button>
                </div>

                <div className='info-delivery'>
                    <div class="additional-info">
                        <h3>Additional information</h3>
                        <button class="toggle-button">+</button>
                    </div>

                    <div class="assembly-delivery">
                        <h3>Assembly & Delivery</h3>
                        <button class="toggle-button">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container