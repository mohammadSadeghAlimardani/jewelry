import { FaTimes } from "react-icons/fa";
import "./ModalSearchForm.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import { redirect, useNavigate } from "react-router-dom";

const ModalSearchForm = () => {
    const {
        isDisplayModalSearchForm,
        setIsDisplayModalSearchForm,
        searchTerm,
        setSearchTerm,
    } = useContext(AppContext);

    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchValue = formData.get("input-modal-search");
        setSearchTerm(searchValue);
        setIsDisplayModalSearchForm(false);
        navigate("/search");
    };

    return (
        <div
            className={
                isDisplayModalSearchForm
                    ? "modal-search-form display-modal-search-form"
                    : "modal-search-form"
            }
        >
            <form onSubmit={submitForm}>
                <button
                    type="button"
                    className="link close-modal-search-form-btn"
                    onClick={(event) => setIsDisplayModalSearchForm(false)}
                >
                    <FaTimes />
                </button>
                <div className="form-content">
                    <input type="search" name="input-modal-search" />
                    <button className="btn btn-main" type="submit">
                        search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ModalSearchForm;
