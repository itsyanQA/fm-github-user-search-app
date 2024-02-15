import "./Search.scss";
import SearchIcon from "../../assets/icon-search.svg?react";
import { useSearchContext } from "../../context/SearchContextProvider";
import { useRef } from "react";

export function Search() {
  const { searchValue, setSearchValue, userData, isFetching } = useSearchContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    setSearchValue(inputRef?.current?.value ?? "");
    inputRef?.current?.blur();
  };

  return (
    <form
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="search__icon-and-input">
        <SearchIcon className="search__icon" />
        <input
          className="search__input"
          type="text"
          ref={inputRef}
          placeholder="Search GitHub username…"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !!searchValue) {
              handleSubmit();
            }
          }}
        />
      </div>
      <div className="search__button-and-no-results">
        {!userData && !isFetching && <span className="search__no-results">No results</span>}
        <button className="search__button" disabled={!searchValue}>
          search
        </button>
      </div>
    </form>
  );
}
