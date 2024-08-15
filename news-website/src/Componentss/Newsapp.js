import React, { useEffect, useState } from "react";
import Card from "./Card";
import ReactPaginate from "react-paginate";

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

    const API_KEY = "db3002f3a868477cbb1f610778a518db";

    const getData = async () => {
        const response = await fetch(
            `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        );
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles);
    };

    useEffect(() => {
        getData();
    }, [search]);

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
    };

    const handlePageChange = (selectedObject) => {
        setCurrentPage(selectedObject.selected);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <nav className="nav-bar">
                <div>
                    <h1>Trendy News</h1>
                </div>
                <ul>
                    <a href="#">All News</a>
                    <a href="#">Trending</a>
                </ul>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="Search News"
                        value={search}
                        onChange={handleInput}
                    />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className="head">Stay Update with TrendyNews</p>
            </div>
            <div className="categoryBtn">
                <button
                    onClick={userInput}
                    value="sports"
                >
                    Sports
                </button>
                <button
                    onClick={userInput}
                    value="politics"
                >
                    Politics
                </button>
                <button
                    onClick={userInput}
                    value="entertainment"
                >
                    Entertainment
                </button>
                <button
                    onClick={userInput}
                    value="health"
                >
                    Health
                </button>
                <button
                    onClick={userInput}
                    value="fitness"
                >
                    Fitness
                </button>
            </div>

            <div>
                {currentItems.length > 0 ? <Card data={currentItems} /> : null}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        breakClassName={"page-item"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        onPageChange={handlePageChange}
                        pageCount={Math.ceil(newsData.length / itemsPerPage)}
                    />
                </ul>
            </nav>
        </div>
    );
};

export default Newsapp;
