import PropTypes from 'prop-types';

const Footer = ({ footerAPI: { titles, links } }) => {
    return (
        <>
            <footer className="bg-theme p-5 pt-7">
                <div className="nike-container text-slate-200">
                    <div className="m-auto grid w-full max-w-2xl grid-cols-3 items-start md:max-w-none md:gap-5">
                        {titles.map((val, i) => (
                            <div key={i} className="">
                                <h1 className="text-lg font-semibold uppercase lg:text-base md:text-sm">{val.title}</h1>
                            </div>
                        ))}
                        {links.map((list, i) => (
                            <ul key={i}>
                                {list.map((link, i) => (
                                    <li key={i} className="text-sm sm:text-xs">
                                        {link.link}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div>
                        <div className="mt-5 text-center">
                            <p className="text-sm md:text-center">
                                Copyright<sup className="text-base font-bold">&copy;</sup>All Reserved Rights 2024
                                <span> THANH TÚ DEVELOPERS</span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

Footer.propTypes = {
    footerAPI: PropTypes.shape({
        titles: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default Footer;
