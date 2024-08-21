import PropTypes from 'prop-types';
import Item from '../utils/Item';
import Title from '../utils/Title';

const Sales = ({ ifExists, endpoint: { title, items } }) => {
    return (
        <>
            <div className="nike-container">
                <Title title={title} />
                <div
                    className={`mt-7 grid items-center justify-items-center gap-7 lg:gap-5 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}
                >
                    {items?.map((item, i) => (
                        <Item {...item} key={i} ifExists={ifExists} />
                    ))}
                </div>
            </div>
        </>
    );
};

Sales.propTypes = {
    ifExists: PropTypes.bool,
    endpoint: PropTypes.shape({
        title: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired,
                rating: PropTypes.string.isRequired,
                btn: PropTypes.string.isRequired,
                img: PropTypes.any.isRequired,
                price: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
                shadow: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default Sales;
