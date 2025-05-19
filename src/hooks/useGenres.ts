import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "@/services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useGenres;
