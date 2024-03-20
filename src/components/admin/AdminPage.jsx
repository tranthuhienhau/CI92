import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        id: '',
        movieName: '',
        description: '',
        // Thêm các trường dữ liệu khác tương ứng
    });

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('/api/movies');
            setMovies(response.data.data);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu phim:', error);
        }
    };

    const handleAddMovie = async () => {
        try {
            await axios.post('/api/movies', newMovie);
            setNewMovie({
                id: '',
                movieName: '',
                description: '',
                // Đặt lại giá trị cho các trường dữ liệu khác
            });
            fetchMovies();
        } catch (error) {
            console.error('Lỗi khi thêm phim:', error);
        }
    };

    const handleUpdateMovie = async (id, updatedMovie) => {
        try {
            await axios.put(`/api/movies/${id}`, updatedMovie);
            fetchMovies();
        } catch (error) {
            console.error('Lỗi khi cập nhật phim:', error);
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            await axios.delete(`/api/movies/${id}`);
            fetchMovies();
        } catch (error) {
            console.error('Lỗi khi xoá phim:', error);
        }
    };

    return (
        <div>
            <h1>Trang Admin</h1>
            {/* Giao diện cho phép thêm phim */}
            <input type="text" placeholder="ID" value={newMovie.id} onChange={(e) => setNewMovie({ ...newMovie, id: e.target.value })} />
            <input type="text" placeholder="Tên phim" value={newMovie.movieName} onChange={(e) => setNewMovie({ ...newMovie, movieName: e.target.value })} />
            <textarea placeholder="Mô tả" value={newMovie.description} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
            {/* Thêm các trường dữ liệu khác */}
            <button onClick={handleAddMovie}>Thêm phim</button>

            {/* Giao diện hiển thị danh sách phim và chức năng sửa/xoá */}
            {movies.map(movie => (
                <div key={movie.id}>
                    <h3>{movie.movieName}</h3>
                    <p>{movie.description}</p>
                    {/* Hiển thị các trường dữ liệu khác */}
                    <button onClick={() => handleUpdateMovie(movie.id, { ...movie, description: 'Mô tả mới' })}>Sửa</button>
                    <button onClick={() => handleDeleteMovie(movie.id)}>Xoá</button>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
