import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import { useFetchUser } from "../hooks/useFetchUser";
import { User } from "../types/types";

type SearchContextType = {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  userData: User | null;
  isFetching: boolean;
  error: Error | null;
};

const SearchContext = createContext<SearchContextType | null>(null);

type SearchContextProviderProps = PropsWithChildren;

export function SearchContextProvider({ children }: SearchContextProviderProps) {
  const [searchValue, setSearchValue] = useState<string>("Octocat");
  const { isFetching, error, data: userData } = useFetchUser(searchValue);

  return <SearchContext.Provider value={{ searchValue, setSearchValue, isFetching, userData, error }}>{children}</SearchContext.Provider>;
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("Can't use context if component is not wrapped inside a provider.");
  }

  return {
    searchValue: context.searchValue,
    setSearchValue: context.setSearchValue,
    userData: context.userData,
    isFetching: context.isFetching,
    error: context.error,
  };
};
