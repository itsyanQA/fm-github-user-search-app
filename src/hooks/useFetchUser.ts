import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/api";
import { UserUtils } from "../utils/userUtils";

export const useFetchUser = (searchQuery: string) => {
  const { isFetching, error, data } = useQuery({ queryKey: [searchQuery], queryFn: () => fetchUser(searchQuery) });

  return { isFetching, error, data: data ? UserUtils.mapToUser(data) : null };
};
