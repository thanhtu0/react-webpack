import './menu.css'

function Menu() {
    return (
        <nav aria-label="breadcrumb" id="menu">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">Men</a>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">Shoes</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    Globe Sabre Skate Shoes - Black
                </li>
            </ol>
        </nav>
    )
}

export default Menu