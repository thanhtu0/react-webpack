import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header>
            <div id="info-header">
                <div className="left-info">
                    <div className='phone'>
                        <FontAwesomeIcon icon="fa-solid fa-phone-volume" className='icon'/>
                        <p>(239) 555-0108</p>
                    </div>

                    <div className='address'>
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" className='icon'/>
                        <p>3891 Ranchview Dr. Richardson, California</p>
                    </div>
                </div>

                <div className='right-info'>
                <FontAwesomeIcon icon="fa-solid fa-star" className='icon'/>
                <FontAwesomeIcon icon="fa-solid fa-star" className='icon'/>
                <FontAwesomeIcon icon="fa-solid fa-star" className='icon'/>
                <FontAwesomeIcon icon="fa-solid fa-star" className='icon'/>
                <FontAwesomeIcon icon="fa-solid fa-star" className='icon'/>

                <p>33400 Five Star Service Reviews</p>
                </div>
            </div>

            <div id="category">
                <div className='logo'>
                    <h2>cordes.</h2>
                </div>

                <div className="Navigation">
                    <div className="men">
                        <a href="#">Men</a>
                    </div>
                    <div className='line'></div>
                    <div className='women'>
                        <a href="#">Women</a>
                    </div>
                </div>

                <div className='search-box'>
                    <form>
                        <input type="Search"id="Search" name="Search" placeholder='Search product'/>
                        <button id="Search-text">
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='icon'/>
                            Search
                        </button>   
                    </form>
                </div>

                <div className='account'>
                    <div className='account-icon'>
                        <FontAwesomeIcon icon="fa-solid fa-user" />
                    </div>

                    <div className='account-text'>
                        <div className='up'>
                            <a href="#">Log in</a>
                            /
                            <a href="#">Sign up</a>
                        </div>
                        <div className='down'>
                            <p>
                                Account
                            </p>
                            <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                        </div>
                    </div>
                </div>

                <div className='wishlist'>
                    <FontAwesomeIcon icon="fa-solid fa-heart" className='icon' />
                    <a href="#">Wishlist</a>
                </div>

                <div className='cart'>
                    <FontAwesomeIcon icon="fa-solid fa-cart-flatbed" className='icon' />
                    <a href="#">Cart</a>
                </div>
            </div>

            <div id="navigation">
                <div className='menu-bar'>
                    <ul>
                        <li><a href="#" title="New in">New in</a></li>
                        <li><a href="#" title="Clothing">Clothing</a></li>
                        <li><a href="#" title="Shoes">Shoes</a></li>
                        <li><a href="#" title="Accessries">Accessries</a></li>
                        <li><a href="#" title="Skateboard">Skateboard</a></li>
                        <li><a href="#" title="Route One">Route One</a> </li>
                        <li><a href="#" title="Brands">Brands</a></li>
                        <li><a href="#" title="Launches">Launches</a></li>
                        <li><a href="#" title="Sale">Sale</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneVolume, faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
// import '../components/assets/css/header.css';

// const Information = () => {
//     const infoItems = [
//         { 
//             icon: faPhoneVolume, 
//             text: '(239) 555-0108', 
//             className: 'phone' 
//         },
//         { 
//             icon: faLocationDot, 
//             text: '3891 Ranchview Dr. Richardson, California', 
//             className: 'address' 
//         }
//     ];

//     return (
//         <div id="info-header">
//             <div className="left-info">
//                 {infoItems.map((item, index) => (
//                     <div key={index} className={item.className}>
//                         <FontAwesomeIcon icon={item.icon} />
//                         <p>{item.text}</p>
//                     </div>
//                 ))}
//             </div>

//             <div className='right-info'>
//                 {Array.from({ length: 5 }, (_, index) => (
//                     <FontAwesomeIcon key={index} icon={faStar} />
//                 ))}
//                 <p>33400 Five Star Service Reviews</p>
//             </div>
//         </div>
//     );
// };

// export default Information;
