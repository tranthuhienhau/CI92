import React, { useEffect, useState } from 'react';
import { FaRegComments } from "react-icons/fa";

const Comment = ({ item }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        // Load danh sách comment từ Local Storage khi component được tạo ra
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        if (savedComments) {
            // Lọc danh sách comment theo id phim
            const filteredComments = savedComments.filter(comment => comment.movieId === item?.[0]?.id);
            setComments(filteredComments);
        }

        // Load user hiện tại từ Session Storage khi component được tạo ra
        const loggedInUser = JSON.parse(sessionStorage.getItem("login"))?.[0];
        if (loggedInUser) {
            setCurrentUser(loggedInUser.name);
        }
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!comment.trim()) {
            alert("Bình luận không được để trống!");
            return;
        }

        const nameComment = currentUser;
        const newComment = {
            id: Date.now(),
            name: nameComment,
            content: comment,
            movieId: item?.[0]?.id // Lưu id của phim vào comment
        };

        try {
            // Cập nhật danh sách comment và lưu vào Local Storage
            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            localStorage.setItem("comments", JSON.stringify(updatedComments));

            // Reset input field
            setComment("");

            // Gửi request PATCH để cập nhật dữ liệu trên server
            const response = await fetch(`http://localhost:3000/data/${item?.[0]?.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: updatedComments
                }),
            });

            if (response.ok) {
                console.log("Bình luận đã được thêm");
            } else {
                console.error("Lỗi khi thêm bình luận:", response.statusText);
            }
        } catch (error) {
            console.error("Có lỗi xảy ra:", error);
        }
    };

    return (
        <div className='comment-all'>
            <div className='title-comment-all'>
                <FaRegComments size={30} />
                <span>Bình luận phim</span>
            </div>
            <form className='content-comment-all' onSubmit={handleSubmit}>
                <div className='content-comment'>
                    {comments.map((comment) => (
                        <div key={comment.id} className='name-content-comment'>
                            <p className='name-comment'>{comment.name}</p>
                            <p className='content-comment-child'>{comment.content}</p>
                        </div>
                    ))}
                </div>
                <div className='input-btn-comment'>
                    <input
                        className='input-comment'
                        placeholder='Nhập bình luận...'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button className='btn-comment' type="submit">Gửi</button>
                </div>
            </form>
        </div>
    )
}

export default Comment;
