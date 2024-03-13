import React, { useState, useEffect } from 'react';
import { FaRegComments } from "react-icons/fa";

const Comment = ({ item }) => {
    const [comments, setComments] = useState(item[0].comment);
    const [comment, setComment] = useState("");

    useEffect(() => {
        setComments(item[0].comment);
        console.log("Comment")
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Kiểm tra xem ô input có rỗng hoặc chỉ chứa khoảng trắng không
        if (!comment.trim()) {
            alert("Bình luận không được để trống!");
            return; // Ngừng thực thi hàm nếu ô input rỗng hoặc chỉ chứa khoảng trắng
        }

        const movieId = item[0].id;
        const nameComment = JSON.parse(sessionStorage.getItem("login"))[0].name;
        const newComment = {
            id: Date.now(),
            name: nameComment,
            content: comment,
        };

        try {
            const response = await fetch(`http://localhost:3000/data/${movieId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment: [...comments, newComment]
                }),
            });

            if (response.ok) {
                console.log("Bình luận đã được thêm");
                setComments([...comments, newComment]);
                setComment(""); // Reset input field sau khi gửi thành công
            } else {
                console.error("Lỗi khi thêm bình luận");
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