import styled from "styled-components";

export const Container = styled.header`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        background-color: #36363636;
        backdrop-filter: blur(30px);
        border-radius: 4px;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 40px;
        margin-top: 10px;
        padding: 25px 0px 0px 0px;

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
`;
