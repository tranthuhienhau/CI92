import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NetFlixLogo from '../../assets/images/NetFlix.png';
import { IoIosSearch } from 'react-icons/io';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledNavbar scrolling={scrolling}>
      <NavbarContent>
        <LogoContainer>
          <img src={NetFlixLogo} alt="Netflix Logo" />
        </LogoContainer>
        <SearchContainer>
          <IoIosSearch />
          <input type="text" placeholder="Search" />
        </SearchContainer>
      </NavbarContent>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${(props) => (props.scrolling ? 'rgba(34, 34, 34, 0.5)' : '#222')};
  transition: background-color 0.3s ease;
`;

const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const LogoContainer = styled.div`
  width: 100px;

  img {
    width: 100%;
    height: auto;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: #fff;
  }

  input {
    font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;

        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
  }
`;

export default Navbar;
