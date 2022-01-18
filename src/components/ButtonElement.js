import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#e4174f' : "#010606")};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justifiy-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#e4174f')};
    }
`

export const ButtonHref = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff' : "#e4174f")};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    font-size: ${({fontBig}) => fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justifiy-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#010606' : '#fff')};
    }
`