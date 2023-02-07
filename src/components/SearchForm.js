import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchTerm = React.useRef("");

  React.useEffect(() => {
    searchTerm.current.focus();
  }, []);

  const handleChange = () => {
    setSearchTerm(searchTerm.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="searchTerm">Search your favourite cocktail</label>
          <input
            type="text"
            id="searchTerm"
            ref={searchTerm}
            onChange={handleChange}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
