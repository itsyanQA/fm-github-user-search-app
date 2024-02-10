import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api/api";
import { UserUtils } from "../utils/userUtils";

export const useFetchUser = (queryKey: boolean, searchQuery: string) => {
  const { isFetching, error, data } = useQuery({ queryKey: [queryKey], queryFn: () => fetchUser(searchQuery) });

  return { isFetching, error, data: data ? UserUtils.mapToUser(data) : null };
};
