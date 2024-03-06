import { Routes, Route } from 'react-router-dom';
import { MovieDetails, Movies, PageNotFound, Search } from '../pages';

export const AllRouts = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Movies/>}/>
            <Route path='title/:id' element={<MovieDetails/>}/>
            <Route path='movies/top' element={<Movies/>}/>
            <Route path='movies/popular' element={<Movies/>}/>
            <Route path='movies/upcoming' element={<Movies/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
