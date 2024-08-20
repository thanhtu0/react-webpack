import PropTypes from 'prop-types';
const Title = ({ title }) => {
    return (
        <>
            <div className="filer text-5xl font-bold text-slate-900 drop-shadow-lg lg:text-4xl md:text-3xl">
                <h1>{title}</h1>
            </div>
        </>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
