import React, { Component } from 'react';
import movieApi from 'apis/movieApi';
import Loader from 'components/Loader/Loader';
import { actFetchMovieDetail } from './module/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class MovieDetail extends Component {
  render() {
    const { loading, movieDetail } = this.props;

    if (loading) return <Loader />;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3">
            <img className="img-fluid" src={movieDetail.hinhAnh} alt="" />
          </div>
          <div className="col-9">
            <h2>{movieDetail.tenPhim}</h2>
            <p>{movieDetail.moTa}</p>
          </div>
        </div>
        <h1 className="mt-5">ShowTime</h1>
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column nav-pills text-left"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {movieDetail.heThongRapChieu.map((heThongRap, idx) => {
                return (
                  <a
                    key={heThongRap.maHeThongRap}
                    className={`nav-link ${idx === 0 && 'active'}`}
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href={`#${heThongRap.maHeThongRap}`}
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <img
                      src={heThongRap.logo}
                      style={{ width: '50px', marginRight: '6px' }}
                    />
                    <span style={{ textTransform: 'uppercase' }}>
                      {heThongRap.tenHeThongRap}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              {movieDetail.heThongRapChieu.map((heThongRap, idx) => {
                return (
                  <div
                    className={`tab-pane fade show ${idx === 0 && 'active'}`}
                    id={heThongRap.maHeThongRap}
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    {heThongRap.cumRapChieu.map(cumRap => {
                      return (
                        <div className="text-left">
                          <img
                            src={cumRap.hinhAnh}
                            style={{ width: '50px', marginRight: '6px' }}
                            alt=""
                          />
                          {cumRap.tenCumRap}
                          <div className="my-4">
                            {cumRap.lichChieuPhim.map(lichChieu => {
                              return (
                                <Link
                                  to={`/seat-plan/${lichChieu.maLichChieu}`}
                                  className="btn btn-secondary mr-3 mb-3"
                                >
                                  {new Date(
                                    lichChieu.ngayChieuGioChieu
                                  ).toLocaleTimeString()}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const { data } = await movieApi.fetchMovieDetailApi(movieId);
      this.props.fetchMovieDetail(data.content);
    } catch (err) {
      console.log(err);
    }
  }
}

const mapStateToProps = state => ({
  movieDetail: state.movieDetailReducer.movieDetail,
  loading: state.movieDetailReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  fetchMovieDetail: movieDetail => {
    dispatch(actFetchMovieDetail(movieDetail));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
