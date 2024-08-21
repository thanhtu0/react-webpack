import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { setAddItemToCart, setOpenCart } from '../app/CartSlice';

const Item = ({ ifExists, id, color, shadow, title, text, img, btn, rating, price }) => {
    const dispatch = useDispatch();

    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price };

        dispatch(setAddItemToCart(item));
    };

    const onCartToggle = () => {
        dispatch(
            setOpenCart({
                cartState: true,
            }),
        );
    };

    return (
        <>
            <div
                className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
                    ifExists ? 'justify-items-start' : 'justify-items-center'
                } w-full rounded-xl px-5 py-4 transition-all duration-700 ease-in-out hover:scale-105`}
            >
                <div className={`grid items-center ${ifExists ? 'justify-items-start' : 'justify-items-center'}`}>
                    <h1 className="text-xl font-medium text-slate-200 drop-shadow filter lg:text-lg md:text-base">
                        {title}
                    </h1>
                    <p className="text-base font-normal text-slate-200 drop-shadow filter md:text-sm">{text}</p>

                    <div className="my-2 flex w-28 items-center justify-between">
                        <div className="blur-effect-theme flex items-center rounded bg-white/80 px-1">
                            <h1 className="text-sm font-medium text-black">${price}</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <StarIcon className="icon-style h-5 w-5 md:h-4 md:w-4" />
                            <h1 className="font-normal text-slate-100 md:text-sm">{rating}</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            className="blur-effect-theme button-theme bg-white/90 p-0.5 shadow shadow-sky-200"
                            onClick={() => onAddToCart()}
                        >
                            <ShoppingBagIcon className="icon-style text-slate-900" />
                        </button>
                        <button
                            type="button"
                            className="blur-effect-theme button-theme bg-white/90 px-2 py-1 text-sm text-black shadow shadow-sky-200"
                            onClick={() => {
                                onAddToCart();
                                onCartToggle();
                            }}
                        >
                            {btn}
                        </button>
                    </div>
                </div>
                <div className={`flex items-center ${ifExists ? 'absolute right-1 top-5' : 'justify-center'}`}>
                    <img
                        src={img}
                        alt={`img/item-img/${id}`}
                        className={`transitions-theme hover:-rotate-12 ${
                            ifExists ? 'h-auto w-64 -rotate-[35deg] lg:w-56 md:w-48' : 'h-36 w-64'
                        }`}
                    />
                </div>
            </div>
        </>
    );
};

Item.propTypes = {
    ifExists: PropTypes.bool,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    shadow: PropTypes.string.isRequired,
};

export default Item;
