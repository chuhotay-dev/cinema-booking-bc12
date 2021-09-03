import React from 'react';
import UserList from './UserList';
import MovieList from './MovieList';

export default function DemoHOC() {
  return (
    <div className="container">
      <div className="row">
        <UserList dataSource="http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01" />
        <MovieList dataSource="http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01" />
      </div>
    </div>
  );
}
