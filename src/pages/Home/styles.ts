import styled from "styled-components";

export const MainContent = styled.main`
    display: flex;
    justify-content: space-around;
    margin-top: 170px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 274px;
        height: 274px;
        border-radius: 50%;
        margin-top: 20px;
        cursor: pointer;
        z-index: 1;
        position: relative;

        &:after {
            content: "";
            position: absolute;
            width: 200px;
            height: 200px;
            background: #ffffff;
            opacity: 0;
            border-radius: 50%;
            transition: opacity 0.5s ease, width 0.3s ease, height 0.3s ease;
        }

        &:hover:after {
            content: "";
            position: absolute;
            width: 400px;
            height: 400px;
            background: #ffffff;
            opacity: 0.1;
            border-radius: 50%;
        }

        p {
            color: #000;
            font-size: 32px;
        }
    }

    section > p:nth-child(1) {
        font-size: 28px;
        color: #d0d6f9;
    }

    section > p:nth-child(2) {
        font-size: 150px;
    }

    section > p:nth-child(3) {
        font-size: 18px;
        max-width: 400px;
        text-align: justify;
        color: #d0d6f9;
    }

    @media (max-width: 1000px) {
        align-items: center;
        flex-direction: column;
        max-width: 450px;
        margin: 170px auto;

        section {
            margin-bottom: 156px;
        }

        div {
            width: 242px;
            height: 242px;
            z-index: 0;
            &:hover:after {
                width: 300px;
                height: 300px;
            }
        }
    }

    @media (max-width: 571px) {
        section {
            max-width: 327px;
            margin-bottom: 81px;
        }

        section > p:nth-child(1),
        section > p:nth-child(2) {
            text-align: center;
        }

        section > p:nth-child(1) {
            font-size: 16px;
        }
        section > p:nth-child(2) {
            font-size: 80px;
        }
        section > p:nth-child(3) {
            font-size: 15px;
            text-align: center;
        }

        div {
            width: 150px;
            height: 150px;

            p {
                font-size: 20px;
                max-width: 327px;
            }
        }
    }

    @media (max-width: 571px) {
        margin-top: 80px;
    }
`;
