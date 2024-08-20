import PropTypes from 'prop-types';
import Title from '../utils/Title';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ClockIcon, HashtagIcon, HeartIcon } from '@heroicons/react/24/solid';

const Stories = ({ story: { title, news } }) => {
    return (
        <>
            <div className="nike-container mb-11">
                <Title title={title} />
                <div className="">
                    <Splide>
                        {news.map((val, i) => (
                            <SplideSlide key={i} className="mb-0.5">
                                <div className="ring-slate200 relative grid items-center gap-4 rounded-lg pb-2 shadow shadow-slate-200 ring-1">
                                    <div className="flex items-center justify-center">
                                        <img
                                            className="h-auto w-full rounded-tl-lg rounded-tr-lg object-cover shadow-md shadow-slate-200"
                                            src={val.img}
                                            alt={`img/story/${i}`}
                                        />
                                    </div>

                                    <div className="flex w-full items-center justify-between px-4">
                                        <div className="flex items-center gap-0.5">
                                            <HeartIcon className="icon-style h-5 w-5 text-red-500" />
                                            <span className="text-xs font-bold">{val.like}</span>
                                        </div>

                                        <div className="flex items-center gap-0.5">
                                            <ClockIcon className="icon-style h-4 w-4 text-black" />
                                            <span className="text-xs font-bold">{val.time}</span>
                                        </div>

                                        <div className="flex items-center gap-0.5">
                                            <HashtagIcon className="icon-style text-blue-600" />
                                            <span className="text-xs font-bold text-blue-600">{val.by}</span>
                                        </div>
                                    </div>

                                    <div className="grid items-center justify-items-start px-4">
                                        <h1 className="text-base font-semibold lg:text-sm">{val.title}</h1>
                                        <p className="text-justify text-sm lg:text-xs">{val.text}</p>
                                    </div>

                                    <div className="flex w-full items-center justify-center px-4">
                                        <a
                                            href={val.url}
                                            target="_blank"
                                            role={'button'}
                                            className="button-theme w-full bg-gradient-to-b from-slate-900 to-black py-1.5 text-center text-slate-100 shadow-md shadow-black"
                                        >
                                            {val.btn}
                                        </a>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </>
    );
};

Stories.propTypes = {
    story: PropTypes.shape({
        title: PropTypes.string.isRequired,
        news: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

export default Stories;
