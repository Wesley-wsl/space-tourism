import React from "react";

import Logo from "../../assets/shared/logo.svg";
import { Container } from "./styles";

const Header: React.FC = () => {
    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt="space-tourism logo" />
            </div>

            <div className="line" />

            <nav>
                <ul>
                    <li>
                        <a href="#Logo">
                            <span>00</span> HOME
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <span>01</span> DESTINATION
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <span>02</span> CREW
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <span>03</span> TECHNOLOGY
                        </a>
                    </li>
                </ul>
            </nav>
        </Container>
    );
};

export default Header;
