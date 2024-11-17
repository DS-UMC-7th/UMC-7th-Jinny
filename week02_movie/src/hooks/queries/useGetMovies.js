import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko&page=${pageParam}&region=KR`);

  return data;
};

export { useGetMovies };
