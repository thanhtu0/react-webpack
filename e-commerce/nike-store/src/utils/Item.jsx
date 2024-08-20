import PropTypes from 'prop-types';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
const Item = ({ id, title, text, rating, btn, img, price, color, shadow }) => {
    console.log(id);
    return (
        <>
            <div
                className={`relative bg-gradient-to-b ${color} ${shadow} grid w-full items-center justify-items-center rounded-xl px-5 py-4 transition-all duration-700 ease-in-out hover:scale-105`}
            >
                <div className="grid items-center justify-items-center">
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
                        >
                            <ShoppingBagIcon className="icon-style text-slate-900" />
                        </button>
                        <button
                            type="button"
                            className="blur-effect-theme button-theme bg-white/90 px-2 py-1 text-sm text-black shadow shadow-sky-200"
                        >
                            {btn}
                        </button>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={img} alt="img/item-img" className="transitions-theme h-36 w-64 hover:-rotate-12" />
                </div>
            </div>
        </>
    );
};

Item.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    rating: PropTypes.number,
    btn: PropTypes.bool,
    img: PropTypes.string,
    price: PropTypes.number,
    color: PropTypes.string,
    shadow: PropTypes.bool,
};

export default Item;
