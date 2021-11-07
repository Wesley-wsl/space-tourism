/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from "styled-components";

import { IBackground } from "../@types";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
    font-family: Bellefair, sans-serif;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: #fff;
}
`;

export const BackgroundContainer = styled.div`
    transition: background-image 1s ease-in-out;
    background-image: url(${({ backgroundDesktop }: IBackground) => backgroundDesktop});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    overflow: hidden;

    @media (max-width: 1000px) {
        background-image: url(${({ backgroundTablet }: IBackground) => backgroundTablet});
        width: 100%;
        height: 1024px;
    }

    @media (max-width: 571px) {
        background-image: url(${({ backgroundMobile }: IBackground) => backgroundMobile});
        width: 100%;
        height: 856px;
    }
`;

export const IntroPage = styled.h2`
    font-size: 25px;
    font-family: "Barlow Condensed";
    margin-left: 160px;
    margin-top: 30px;
    margin-bottom: 50px;

    span {
        color: #d9d9d9d9;
        font-family: "Barlow Condensed";
        margin-right: 14px;
    }

    @media (max-width: 1000px) {
        font-size: 20px;
        margin-left: 38px;
    }
`;
