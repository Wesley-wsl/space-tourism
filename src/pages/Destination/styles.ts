import styled from "styled-components";

export const MainContent = styled.div`
    h2 {
        font-size: 25px;
        font-family: "Barlow Condensed";
        margin-left: 166px;
        margin-top: 30px;
        margin-bottom: 50px;

        span {
            color: #d9d9d9d9;
            font-family: "Barlow Condensed";
            margin-right: 14px;
        }
    }

    img {
        width: 350px;
    }

    section {
        display: flex;
        justify-content: space-around;
        max-width: 980px;
        margin: 0 auto;
    }

    div > ul {
        display: flex;
        gap: 40px;
        padding: 10px 0px;

        li {
            cursor: pointer;

            &:hover {
                border-bottom: 2px solid #ffffff69;
            }
        }
    }
    .active {
        padding-bottom: 5px;
        border-bottom: 2px solid #fff;
    }
    .planet {
        flex: 1;
    }

    .info {
        flex: 1;
        max-width: 445px;

        li a {
            color: #d0d6f9;
        }

        .information-planet {
            padding-bottom: 50px;
            border-bottom: 2px solid #39444999;
            margin-bottom: 30px;

            p:nth-child(1) {
                font-size: 100px;
                text-transform: uppercase;
            }

            p:nth-child(2) {
                font-size: 18px;
                color: #d0d6f9;
            }
        }
    }

    .data {
        display: flex;
        gap: 60px;

        div > p:nth-child(1) {
            font-size: 14px;
            color: #d0d6f9;
            margin-bottom: 4px;
        }
        div > p:nth-child(2) {
            font-size: 28px;
            text-transform: uppercase;
        }
    }
`;
