import Loader from 'components/Loader/Loader';
import React, { Component } from 'react';
import callApi from 'utils/callApi';
export default class MovieDetail extends Component {
  state = {
    movieDetail: {},
    loading: true,
  };

  render() {
    if (this.state.loading) return <Loader />;
    return <div>MovieDetail {this.props.match.params.movieId}</div>;
  }

  async componentDidMount() {
    try {
      const { data } = await callApi(
        `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.props.match.params.movieId}`
      );
      this.setState({
        movieDetail: data.content,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
