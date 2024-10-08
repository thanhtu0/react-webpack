import { useState } from "react";
import { useMealContext } from "../../context/mealContext";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./Header.scss";
import { startFetchMealsBySearch } from "../../actions/mealsActions";

const SearchForm = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const { dispatch } = useMealContext();

    const handleSearchTerm = (e) => {
        e.preventDefault();
        if (e.target.value.replace(/[^\w\s]/gi, "").length !== 0) {
            setSearchTerm(e.target.value);
            setErrorMsg("");
        } else {
            setErrorMsg("Invalid search term ...");
        }
    };

    const handleSearchResult = (e) => {
        e.preventDefault();
        navigate("/");
        startFetchMealsBySearch(dispatch, searchTerm);
    };

    return (
        <form
            className="search-form flex align-center"
            onSubmit={(e) => handleSearchResult(e)}
        >
            <input
                type="text"
                className="form-control-input text-dark-gray fs-15"
                placeholder="Search recipes here ..."
                onChange={(e) => handleSearchTerm(e)}
            />
            <button
                type="submit"
                className="form-submit-btn text-white text-uppercase fs-14"
            >
                <BsSearch
                    className="btn-icon"
                    size={20}
                />
            </button>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
        </form>
    );
};

export default SearchForm;
