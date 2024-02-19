import { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function MovieList(genreId: any) {
  const [movieList, setMovieList] = useState<any>([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getMovieListByGenreId();
  }, []);

  const slideRight = (element: any) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element: any) => {
    element.scrollLeft -= 500;
  };

  const getMovieListByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId.genreId).then((res: any) =>
      setMovieList(res.data.results)
    );
  };

  return (
    <div className="flex items-center">
      <IoChevronBackOutline
        className="text-[40px] text-white bg-black p-2 z-10 cursor-pointer rounded-full mb-[120px]"
        onClick={() => slideLeft(elementRef.current)}
      />
      <div
        className="w-full  scroll-smooth overflow-x-auto whitespace-nowrap scrollbar-hide mb-16 ml-[-20px] mr-[-20px]"
        ref={elementRef}
      >
        {movieList.map(
          (item: any, index: number) => index < 7 && <MovieCard movie={item} />
        )}
      </div>
      <IoChevronForwardOutline
        className="text-[40px] text-white bg-black p-2 z-10 cursor-pointer rounded-full  mb-[120px] "
        onClick={() => slideRight(elementRef.current)}
      />
    </div>
  );
}

export default MovieList;
