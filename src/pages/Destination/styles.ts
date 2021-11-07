import styled from "styled-components";

export const MainContent = styled.div`
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

    @media (max-width: 1000px) {
        section {
            flex-direction: column;
            align-items: center;
            max-width: 450px;
            margin: 60px auto;

            img {
                margin-bottom: 60px;
                width: 300px;
                height: 300px;
            }

            .info ul {
                width: 350px;
                margin: 0 auto;
            }

            .info > .information-planet > p:nth-child(1) {
                text-align: center;
                font-size: 80px;
                margin-bottom: 8px;
                margin-top: 32px;
            }

            .info > .information-planet > p:nth-child(2) {
                text-align: center;
                font-size: 16px;
            }

            .data {
                max-width: 320px;
                margin: 0 auto;
            }
        }
    }

    @media (max-width: 571px) {
        section {
            img {
                width: 170px;
                height: 170px;
            }

            .info > .information-planet > p:nth-child(1) {
                font-size: 56px;
                margin-bottom: 1px;
                margin-top: 20px;
            }

            .info > .information-planet > p:nth-child(2) {
                font-size: 15px;
            }

            .data {
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
        }
    }
`;
