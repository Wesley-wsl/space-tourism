import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../../assets/shared/logo.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
    const location = useLocation();
    useEffect(() => {
        const li = document.querySelectorAll("li[data-li]");
        switch (location.pathname) {
            case "/":
                li[0].classList.add("activeNav");
                break;
            case "/destination":
                li[1].classList.add("activeNav");
                break;
            case "/crew":
                li[2].classList.add("activeNav");
                break;
            case "/technology":
                li[3].classList.add("activeNav");
                break;
            default:
                break;
        }
    });

    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt="space-tourism logo" />
            </div>

            <div className="line" />

            <nav>
                <ul>
                    <li data-li>
                        <Link to="/">
                            <span>00</span> HOME
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="destination">
                            <span>01</span> DESTINATION
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="/crew">
                            <span>02</span> CREW
                        </Link>
                    </li>
                    <li data-li>
                        <Link to="/technology">
                            <span>03</span> TECHNOLOGY
                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;
