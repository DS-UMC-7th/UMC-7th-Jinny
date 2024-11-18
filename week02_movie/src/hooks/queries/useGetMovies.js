import { axiosInstance } from "../../apis/axios-instance";

const useGetMovies = async ({ category, pageParam }) => {
  const { data } = await axiosInstance.get(`/movie/${category}?language=ko&page=${pageParam}&region=KR`);

  return data;
};

const useGetSeachMovies = async ({ mq, pageParam }) => {
  const { data } = await axiosInstance.get(`/search/movie?query=${mq}&include_adult=false&language=ko&page=${pageParam}&region=KR`);

  return data;
};

const useGetDetailMovies = async ({ movieId }) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}?language=ko`);

  return data;
};

const useGetCreditMovies = async ({ movieId }) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`);

  return data;
};

export { useGetMovies, useGetSeachMovies, useGetDetailMovies, useGetCreditMovies };
