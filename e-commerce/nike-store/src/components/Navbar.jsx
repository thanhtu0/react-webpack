import { useState, useEffect } from 'react';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        };
    }, []);
    return (
        <>
            <header
                className={
                    !navState
                        ? `absolute left-0 right-0 top-7 z-50 opacity-100`
                        : 'blur-effect-theme fixed left-0 right-0 top-0 z-[100] flex h-[9vh] items-center justify-center bg-opacity-0'
                }
            >
                <nav className="nike-container flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="logo/img" className={`h-auto w-16 ${navState && 'brightness-0 filter'}`} />
                    </div>
                    <ul className="flex items-center justify-center gap-2">
                        <li className="grid items-center">
                            <MagnifyingGlassIcon
                                className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}
                            />
                        </li>

                        <li className="grid items-center">
                            <HeartIcon
                                className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}
                            />
                        </li>

                        <li className="grid items-center">
                            <button
                                type="button"
                                className="relative border-none outline-none transition-all duration-300 active:scale-110"
                            >
                                <ShoppingBagIcon
                                    className={`icon-style ${navState && 'text-slate-900 transition-all duration-300'}`}
                                />
                                <div
                                    className={`absolute right-0 top-4 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full text-[0.65rem] font-medium leading-tight shadow transition-all duration-300 hover:scale-110 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}
                                >
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
