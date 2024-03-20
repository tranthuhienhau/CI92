import React, { useState } from 'react'
import NavbarAd from './NavbarAd'
import { Input,Button } from 'antd'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


const PushMovie = () => {
    const [value, setValue] = useState({
        movieName: "",
        description: "",
        image: "",
        background: "",
        time: "",
        nation: "",
        releaseDate: "",
        count: 0,
        category: "",
        video: "",
        comment: [],
        script: "",
        director: "",
    })
    function formatDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1; // getMonth() trả về từ 0-11
        let year = date.getFullYear();
      
        // Thêm số 0 ở đầu nếu ngày hoặc tháng là một chữ số
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
      
        return `${day}/${month}/${year}`;
      }

      const onSubmit = async () => {
        // Đầu tiên kiểm tra các giá trị nhập vào
        if (!value.movieName || !value.description || !value.image || !value.background || !value.time || !value.nation || !value.category || !value.video || !value.director || !value.script) {
            toast.error("Bạn cần nhập đầy đủ thông tin");
            return; // Dừng hàm nếu thiếu thông tin
        }
    
        // Nếu thông tin đầy đủ, tiếp tục xử lý
        try {
            const date = formatDate(new Date());
            const newValue = { ...value, releaseDate: date };
    
            const response = await axios.post('http://localhost:3000/data', newValue);
            console.log(response.data);
            toast.success("Bạn đã thêm thông tin thành công");
    
            // Reset form
            setValue({
                movieName: "",
                description: "",
                image: "",
                background: "",
                time: "",
                nation: "",
                releaseDate: "",
                count: 0,
                category: "",
                video: "",
                comment: [],
                script: "",
                director: "",
            });
        } catch (error) {
            console.error("There was an error!", error);
            toast.error("Có lỗi xảy ra khi thêm thông tin");
        }
    };
    
    
  return (
    <div>
        <ToastContainer/>
        <NavbarAd/>
        <form className='push-movie'>
            <div>
                <label>Tên phim</label>
                <Input value={value.movieName} onChange={(e) => setValue({...value, movieName: e.target.value})}/>
            </div>
            <div>
                <label>Link ảnh</label>
                <Input value={value.image} onChange={(e) => setValue({...value, image: e.target.value})}/>
            </div>
            <div>
                <label >Link backgroud</label>
                <Input value={value.background} onChange={(e) => setValue({...value, background: e.target.value})}/>
            </div>
            <div>
                <label >Thời lượng phim</label>
                <Input value={value.time} onChange={(e) => setValue({...value, time: e.target.value})}/>
            </div>
            <div>
                <label >Quốc gia</label>
                <Input value={value.nation} onChange={(e) => setValue({...value, nation: e.target.value})}/>
            </div>
            <div>
                <label >Video phim</label>
                <Input value={value.video} onChange={(e) => setValue({...value, video: e.target.value})}/>
            </div>
            <div>
                <label >Thể Loại</label>
                <Input value={value.category} onChange={(e) => setValue({...value, category: e.target.value})}/>
            </div>
            <div>
                <label >Mô tả phim</label>
                <Input value={value.description} onChange={(e) => setValue({...value, description: e.target.value})}/>
            </div>
            <div>
                <label >Kịch bản</label>
                <Input value={value.script} onChange={(e) => setValue({...value, script: e.target.value})}/>
            </div>
            <div>
                <label >Đạo diễn</label>
                <Input value={value.director} onChange={(e) => setValue({...value, director: e.target.value})}/>
            </div>
            <Button onClick={onSubmit} size="large" type='primary' className='btn-push'>Gửi</Button>
        </form>
    </div>
  )
}

export default PushMovie
