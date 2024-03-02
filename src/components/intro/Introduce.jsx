import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { BsVolumeMute, BsVolumeUp } from "react-icons/bs";
import styled from 'styled-components';

const Introduce = () => {
  // Khởi tạo trạng thái của âm thanh
  const [isMuted, setIsMuted] = useState(false);

  // Hàm xử lý sự kiện khi click vào biểu tượng loa
  const handleToggleMute = () => {
    setIsMuted(!isMuted); // Đảo ngược trạng thái của âm thanh
  };

  return (
    <IntroContainer>
      <ReactPlayer
        playing={true}
        loop ={true}
        url='https://vimeo.com/900211313'
        controls={true}
        width='100%'
        height='100%'
        volume={isMuted ? 0 : 1} // Thiết lập âm lượng dựa trên trạng thái của âm thanh
        muted={isMuted} // Đặt âm thanh thành tắt nếu trạng thái là true
        className='videoIntro'
      />
      <div className='inforIntro'>
        <h1 className='headingIntro'>NETFLIX ETILE</h1>
        <p className='overview'>For a Chinese tea master, each sip is a rich expression of memory.

        Director: Anna-Claria Ostasenko Bogdanoff
        Director of photography: Malte Daniel Hoekstra
        Composer: Wenceslas Ostasenko</p>
      </div>
      {/* Sử dụng biểu tượng âm thanh tùy thuộc vào trạng thái của âm thanh */}
      {isMuted ? (
        <BsVolumeMute className='btn' onClick={handleToggleMute} />
      ) : (
        <BsVolumeUp className='btn' onClick={handleToggleMute} />
      )}

      <div className='faceBottom'></div>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  background-color: #222;
  position: relative;
  color: #fff;
  padding-top: 56%;

  .videoIntro {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .inforIntro {
    position: absolute;
    top: 140px;
    left: 30px;
  }

  .headingIntro {
    font-size: 60px;
    transition: all 0.3s ease;
  }

  .overview {
    max-width: 550px;
    width: 100%;
    line-height: 1.3;
    padding-top: 25px;
    font-size: 18px;
  }

  .btn {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      transform: scale(1.2);
    }
  }
  .faceBottom {
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 120px; /* Điều chỉnh chiều cao nếu cần */
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17)
    );
  }
  
`;

export default Introduce;
