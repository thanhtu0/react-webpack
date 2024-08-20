import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <header className={`absolute left-0 right-0 top-7 z-50 opacity-100`}>
                <nav className="nike-container flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="logo/img" className="h-auto w-16" />
                    </div>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="grid items-center">
                            <MagnifyingGlassIcon className="icon-style" />
                        </li>

                        <li className="grid items-center">
                            <HeartIcon className="icon-style" />
                        </li>

                        <li className="grid items-center">
                            <button
                                type="button"
                                className="relative border-none outline-none transition-all duration-300 active:scale-110"
                            >
                                <ShoppingBagIcon className="icon-style" />
                                <div className="absolute right-0 top-4 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-white text-[0.65rem] font-medium leading-tight text-slate-900 shadow shadow-slate-100 transition-all duration-300 hover:scale-110">
                                    0
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
