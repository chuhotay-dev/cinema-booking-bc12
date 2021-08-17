import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import { GROUP_ID } from 'settings/apiConfig';
import callApi from 'utils/callApi';
import MovieItem from '../MovieItem/MovieItem';
export default class MovieList extends Component {
  state = {
    movieList: [],
    loading: true,
  };

  render() {
    if (this.state.loading) return <Loader />
    return (
      <div className="container">
        <div className="row">
          {this.state.movieList.map(movie => {
            return <MovieItem key={movie.maPhim} movie={movie} />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    callApi(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
      .then(res => {
        // console.log(res.data.content);
        this.setState({
          movieList: res.data.content,
          loading: false,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
