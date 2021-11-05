import styled, { createGlobalStyle } from "styled-components";

import { backgroundType } from "../@types";

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
    background-image: url(${({ background }: backgroundType) => background});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    filter: saturate(250%);
`;
