import styled from "styled-components";

interface iProps {
    background: string;
}

export const Container = styled.div`
    background-image: url(${({ background }: iProps) => background});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    /* filter: saturate(250%); */

    main {
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
`;
