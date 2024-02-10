import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useSearchContext } from "../../context/SearchContextProvider";
import { useRef } from "react";

export function Search() {
  const { searchValue, setSearchValue, setDidSubmit, userData, isFetching } = useSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="search">
      <div className="search__icon-and-input">
        <SearchIcon className="search__icon" />
        <input
          className="search__input"
          type="text"
          ref={inputRef}
          placeholder="Search GitHub username…"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
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
              inputRef?.current?.blur();
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
