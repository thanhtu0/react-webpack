import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faTwitter, faSnapchat, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <div className='footer-logo'>
                <h2>cordes.</h2>
            </div>
            <div className="footer-container">
                <div className='footer-section'>
                    <h3>About</h3>
                    <div className='about-section'>
                        <ul className="about-left">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">We'r hiring</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Find store</a></li>
                            <li><a href="#">Shipment</a></li>
                        </ul>

                        <ul className="about-right">
                            <li><a href="#">Payment</a></li>
                            <li><a href="#">Gift card</a></li>
                            <li><a href="#">Return</a></li>
                            <li><a href="#">Help</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-section'>
                    <h3>Store</h3>
                    <p>Company name: cordes.</p>
                    <p>Tel: (239) 555-0108</p>
                    <p>Gmail: ex@mail.com</p>
                    <p>Add: 3891 Ranchview Dr.Richardson, California</p>
                </div>

                <div className='footer-section'>
                    <h3>We accept</h3>                        
                    <ul className='payment-methods'>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon="fa-solid fa-credit-card" className="icon" />
                                Amex
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon="fa-solid fa-credit-card" className="icon" />
                                Credit card
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='footer-section'>
                    <h3>Social app</h3>
                    <ul className='social-icons'>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faSnapchat} />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>    
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>© 2021 cordes. retail Ltd. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer