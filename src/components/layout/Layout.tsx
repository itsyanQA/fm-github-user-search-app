import { SearchContextProvider } from "../../context/SearchContextProvider";
import { Header } from "../header/Header";
import { Search } from "../search/Search";
import User from "../user/User";
import "./Layout.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>
        <main className="layout">
          <Header />
          <Search />
          <User />
        </main>
      </SearchContextProvider>
    </QueryClientProvider>
  );
}
