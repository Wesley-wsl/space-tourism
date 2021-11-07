import styled from "styled-components";

export const MainContent = styled.main`
    max-width: 1200px;
    margin: 0 0 0 auto;
    section {
        display: flex;
        justify-content: space-between;
        margin-top: 70px;

        .rocket-informations {
            p:nth-child(1) {
                color: #d9d6f9;
                font-family: "Barlow Condensed";
            }

            p:nth-child(3) {
                max-width: 444px;
                color: #d0d6f9;
                font-size: 18px;
                font-family: Barlow;
            }

            h1 {
                font-size: 56px;
                margin-bottom: 17px;
                margin-top: 11px;
                text-transform: uppercase;
            }
        }

        div > img {
            margin-top: -80px;
            height: 460px;
        }
    }

    @media (min-width: 1000px) {
        .image-responsive > img {
            display: none;
        }
    }

    @media (max-width: 1000px) {
        max-width: 770px;
        margin: 0 auto;
        section {
            flex-direction: column-reverse;

            .rocket-informations {
                max-width: 450px;
                margin: 0 auto;
                p:nth-child(1) {
                    font-family: "Barlow Condensed";
                    text-align: center;
                }

                p:nth-child(3) {
                    max-width: 444px;
                    font-size: 16px;
                    text-align: center;
                    font-family: Barlow;
                }

                h1 {
                    font-size: 40px;
                    text-align: center;
                }
            }
        }

        .image-responsive > img {
            width: 768px;
            margin-top: 0px;
            height: 310px;
            margin-bottom: 56px;
        }

        .imageDesktop > img {
            display: none;
        }
    }

    @media (max-width: 768px) {
        .rocket-informations {
            max-width: 330px;
            margin: 0 auto;
            p:nth-child(1) {
                font-size: 14px;
            }

            p:nth-child(3) {
                max-width: 327px;
                font-size: 15px;
            }

            h1 {
                font-size: 24px;
            }
        }

        .image-responsive > img {
            max-width: 100%;
            margin-top: 0px;
            height: 310px;
            margin-bottom: 56px;
        }
    }

    @media (max-width: 580px) {
        .image-responsive > img {
            height: 300%;
        }
    }
`;

export const ChangeRocket = styled.div`
    div {
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
        border-radius: 50%;
        border: 1px solid #d9d9d942;
        color: #fff;
        position: relative;
        font-size: 32px;
        &:after {
            position: absolute;
            top: 30%;
            right: 41%;
        }

        &:hover {
            cursor: pointer;
            border: 1px solid #ffff;
        }
    }

    div:nth-child(1):after {
        content: "1";
    }
    div:nth-child(2):after {
        content: "2";
    }
    div:nth-child(3):after {
        content: "3";
    }

    .active {
        background-color: #fff;
        color: #000;
    }

    @media (max-width: 1000px) {
        max-width: 400px;
        margin: 0 auto;
        display: flex;
        div {
            width: 60px;
            height: 60px;
            margin-right: 14px;
            margin-top: 50px;
            &:after {
                top: 20%;
                right: 38%;
            }
        }
    }
    @media (max-width: 768px) {
        div {
            width: 40px;
            height: 40px;
            font-size: 16px;
            &:after {
                top: 30%;
                right: 38%;
            }
        }
    }
`;
