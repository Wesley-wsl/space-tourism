import styled from "styled-components";

export const MainContent = styled.main`
    section {
        display: flex;
        max-width: 1014px;
        justify-content: space-between;
        margin: 0 auto;

        > div > h2 {
            font-size: 32px;
            color: #d9d9d9d9;
            margin-bottom: 5px;
            margin-top: 25px;
            text-transform: uppercase;
        }

        > div > h1 {
            font-size: 56px;
            margin-bottom: 27px;
            text-transform: uppercase;
        }

        > div > p {
            font-size: 18px;
            color: #d0d6f9;
            font-family: Barlow;
            max-width: 444px;
            height: 160px;
        }

        div > img {
            height: 480px;
            width: 400px;
            margin-top: -60px;
        }
    }

    @media (max-width: 1000px) {
        section {
            flex-direction: column;
            max-width: 458px;
            margin: 0 auto;

            div > p,
            div > h1,
            div > h2 {
                text-align: center;
            }

            div > h1 {
                margin-top: 8px;
                margin-bottom: 16px;
                font-size: 40px;
            }

            div > h2 {
                font-size: 24px;
            }

            div > p {
                font-size: 16px;
                height: 120px;
            }

            div > img {
                margin-top: 50px;
                border-bottom: 1px solid #d9d9d989;
            }

            div > div {
                justify-content: center;
                z-index: 0;
            }
        }
    }

    @media (max-width: 571px) {
        section {
            flex-direction: column-reverse;

            > div {
                max-width: 450px;
                margin: 0 auto;

                img {
                    width: 250px;
                    height: 350px;
                    margin: 0 auto;
                }
            }
        }
    }
`;

export const ChangeCrew = styled.div`
    display: flex;

    div {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #d9d9d942;
        margin-right: 15px;
        &:hover {
            background-color: #d9d9d9d9;
            cursor: pointer;
        }
    }

    .active {
        background-color: #fff;
    }
`;
