import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 0; 
  text-align: center;
  width: 100%; 

  @media screen and (max-width: 700px) {
    padding: 40px 20px; 
    width: 100%; 
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px; 
  width: 100%;
  margin: 0 auto; 
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const LogoLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
  text-align: justify;

`;

const BulletPoint = styled.span`
  color: #fff;
  font-size: 18px;
  margin-right: 10px;
`;

const FooterTextItem = styled.span`
  color: #fff;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContent className="container">
        <LogoContainer>
          <div className="logo">
            <LogoImage src="https://github.com/trananhtuat/react-movie/blob/main/src/assets/tmovie.png?raw=true" alt="image footer" />
            <LogoLink href="/">Movies Chill</LogoLink>
          </div>
        </LogoContainer>
        <FooterText>Phim chất lượng cao online của XemPhim khác biệt so với các trang phim khác ở những điểm sau:</FooterText>
        <FooterList>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Là phim bluray (reencoded) với độ phân giải thấp nhất là Full HD (1080p), trong khi hầu hết các trang phim khác chỉ có tới độ phân giải HD (720p) là cao nhất.</FooterTextItem></FooterListItem>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Chất lượng cao với lượng dữ liệu trên giây (bitrate) gấp từ 5 - 10 lần so với phim online thông thường. Đây là yếu tố quyết định độ nét của phim, thậm chí còn quan trọng hơn độ phân giải.</FooterTextItem></FooterListItem>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Âm thanh 5.1 (6 channel) thay vì stereo (2 channel) như các trang phim khác, kể cả Youtube.</FooterTextItem></FooterListItem>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Phù hợp để xem trên màn hình TV, máy tính, laptop có độ phân giải cao.</FooterTextItem></FooterListItem>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Nếu không hài lòng với phụ đề có sẵn, bạn có thể tự upload phụ đề của riêng mình để xem online.</FooterTextItem></FooterListItem>
          <FooterListItem><BulletPoint>&#8226;</BulletPoint><FooterTextItem>Có lựa chọn hiện phụ đề song ngữ (tiếng Anh & tiếng Việt), phù hợp với những người muốn học tiếng Anh qua phụ đề phim.</FooterTextItem></FooterListItem>
        </FooterList>
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;