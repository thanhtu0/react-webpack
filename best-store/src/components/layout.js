export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom box-shadow">
            <div className="container">
                <a
                    className="navbar-brand"
                    href="/"
                >
                    <img
                        src="/icon.png"
                        alt="..."
                        width="30"
                        className="me-2"
                    />
                    Best Store
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Admin
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="/products">Products</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/login">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export function Footer() {
    return (
        <div className="text-center p-4 border-top">
            <img src="/icon.png" alt="..." width="30" className="me-2" />
            Best Store
        </div>
    )
}
