import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useSearchContext } from "../../context/SearchContextProvider";

export function Search() {
  const { searchValue, setSearchValue, setDidSubmit, userData, isFetching } = useSearchContext();

  return (
    <div className="search">
      <div className="search__icon-and-input">
        <SearchIcon className="search__icon" />
        <input
          className="search__input"
          type="text"
          placeholder="Search GitHub username..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setDidSubmit((prevState) => !prevState);
            }
          }}
        />
      </div>
      <div className="search__button-and-no-results">
        {!userData && !isFetching && <span className="search__no-results">No results</span>}
        <button
          className="search__button"
          onClick={() => {
            if (searchValue) {
              setDidSubmit((prevState) => !prevState);
            }
          }}
          disabled={!searchValue}
        >
          search
        </button>
      </div>
    </div>
  );
}
