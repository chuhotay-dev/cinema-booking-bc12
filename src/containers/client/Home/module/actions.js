import movieApi from 'apis/movieApi';
import { FETCH_ALL_MOVIE } from './types';

export const actFetchAllMovie = () => {
  return dispatch => {
    movieApi
      .fechAllMovieApi()
      .then(res => {
        dispatch({
          type: FETCH_ALL_MOVIE,
          payload: res.data.content,
        });
      })
      .catch(err => {});
  };
};
