import styled from "styled-components";

import { IMenuMobile } from "../../@types";

export const Container = styled.header`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        background-color: #36363636;
        backdrop-filter: blur(30px);
        border-radius: 4px;
        z-index: 999;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 40px;
        margin-top: 10px;
        padding: 25px 0px 0px 0px;
        height: 70px;

        li > a > span {
            font-weight: 700;
        }

        li > a,
        li > span {
            font-family: "Barlow Condensed";
        }

        li > a:hover {
            border-bottom: 2px solid #ffffff69;
            padding-bottom: 25px;
        }

        .activeNav {
            padding-bottom: 25px;
            border-bottom: 2px solid #fff;
        }

        li:nth-child(1) {
            margin-left: 100px;
            font-family: "Barlow Condensed";
        }

        li:nth-child(4) {
            margin-right: 130px;
            font-family: "Barlow";
        }
    }

    .logo {
        margin-left: 50px;
        padding-top: 12px;
        position: relative;
    }

    @media (max-width: 1000px) {
        nav {
            width: 450px;
        }

        nav > ul > li {
            font-size: 14px;
        }

        nav > ul > li:nth-child(1) {
            margin-left: 40px;
        }

        nav > ul > li:nth-child(4) {
            margin-right: 40px;
        }

        nav > ul > li > a > span {
            display: none;
        }
    }

    @media (max-width: 650px) {
        nav {
            display: none;
        }
    }

    @media (min-width: 1000px) {
        .logo::after {
            content: "";
            width: 35vw;
            height: 1px;
            background-color: #979797;
            opacity: 0.5;
            margin-left: 20px;
            top: 55%;
            position: absolute;
            z-index: 1;

            @media (max-width: 1200px) {
                width: 20vw;
            }
        }
    }
`;

export const MenuMobile = styled.div`
    margin-right: 24px;

    img {
        position: absolute;
        top: 45px;
        right: 40px;
        cursor: pointer;
        z-index: 2;
    }

    nav {
        animation: menuMobileAnimation 0.5s linear;
        display: ${({ isOpen }: IMenuMobile) => (isOpen ? "flex" : "none")};
        width: 300px;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #36363636;
        bottom: 0;
        z-index: 1;
        overflow: hidden;
        ul {
            display: flex;
            margin-top: 100px;
            margin-left: 50px;
            flex-direction: column;
            height: 400px;
            li {
                margin: 0 auto;
                & > a:hover {
                    border-bottom: 2px solid #ffffff69;
                    padding-bottom: 10px;
                }
            }
        }
    }

    nav > ul > li:nth-child(1),
    nav > ul > li:nth-child(4),
    nav > ul > li:nth-child(3) {
        margin-left: 0px;
        margin-right: 0px;
    }

    nav > ul > li > a > span {
        display: none;
    }

    @media (min-width: 650px) {
        display: none;
    }

    @keyframes menuMobileAnimation {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
