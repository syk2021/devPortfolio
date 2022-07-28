import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import palette from './lib/palette';
import './Navbar.css';
import portfolioInfo from './lib/portfolioInfo';

const NavbarWrapper = styled.div`
    margin-top: 1rem;
    .navbar-link {
        display: inline-flex;
        text-decoration: none;
        color: ${palette.gray[5]};
        text-align: center;
        padding-left: 17px;
        padding-right: 17px;
        padding-top: 10px;
        padding-bottom: 10px;
        :visited {
            text-decoration: none;
            color: ${palette.gray[5]};
        }
        :hover {
            background-color: ${palette.purple[0]};
        }
    }
    .navbar-title {
        :visited {
            text-decoration: none;
        }
        :hover {
            size: 110%;
        }
        color: ${palette.purple[7]};
        padding-left: 30px;
        display: inline-flex;
        text-decoration: none;
        font-weight: 600;
        font-size: 35px;
        padding-right: 30px;
    }
`;

const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavLink to="/" className="navbar-title">{portfolioInfo.navbarTitle}</NavLink>
            <NavHashLink smooth to="#whatido" className="navbar-link">What I Do</NavHashLink>
            <NavHashLink smooth to="#news" className="navbar-link">News</NavHashLink>
            <NavHashLink smooth to="#opensourceprojects" className="navbar-link">Open Source Projects</NavHashLink>
            <NavHashLink smooth to="#blog" className="navbar-link">Blog Shorts</NavHashLink>
            <NavHashLink smooth to="#education" className="navbar-link">Education</NavHashLink>
        </NavbarWrapper>
    );
};

export default Navbar;