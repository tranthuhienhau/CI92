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
    left: 5vw; /* Sử dụng vw cho khoảng cách từ mép trái của cửa sổ */
    width: 90vw; /* Sử dụng vw cho chiều rộng của phần nội dung */
  }

  .headingIntro {
    font-size: 6vw; /* Sử dụng vw cho kích thước của tiêu đề */
    transition: all 0.3s ease;
  }

  .overview {
    max-width: 90vw; /* Sử dụng vw cho chiều rộng tối đa của nội dung */
    width: 100%;
    line-height: 1.3;
    padding-top: 2vw; /* Sử dụng vw cho khoảng cách trên */
    font-size: 1.8vw; /* Sử dụng vw cho kích thước văn bản */
  }

  .btn {
    position: absolute;
    height: 4vw; /* Sử dụng vw cho kích thước của nút */
    width: 4vw;
    right: 5vw; /* Sử dụng vw cho khoảng cách từ mép phải của cửa sổ */
    top: 5vw; /* Sử dụng vw cho khoảng cách từ đỉnh của cửa sổ */
    cursor: pointer;
    border-radius: 50%;
    padding: 1vw; /* Sử dụng vw cho kích thước của padding */
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s ease;
  }
  .faceBottom {
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 12vw; /* Sử dụng vw cho chiều cao */
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17)
    );
  }

  @media (max-width: 700px) {
    .headingIntro {
      font-size: 8vw;
    }
    .overview {
      font-size: 3vw;
    }
    .btn {
      right: 2vw;
      top: 2vw;
    }
    .faceBottom {
      height: 12vw;
    }
  }
`;

export default Introduce;
