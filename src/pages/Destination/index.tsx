/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";

import backgroundDestinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import Europa from "../../assets/destination/image-europa.png";
import Mars from "../../assets/destination/image-mars.png";
import Moon from "../../assets/destination/image-moon.png";
import Titan from "../../assets/destination/image-titan.png";
import Header from "../../components/Header";
import data from "../../services/data.json";
import { BackgroundContainer } from "../../styles/GlobalStyle";
import { MainContent } from "./styles";

const Destination: React.FC = () => {
    const [destination, setDestination] = useState("Moon");
    const [planet, setPlanet] = useState(Object);

    useEffect(() => {
        const planetSelected = data.destinations.filter(
            planet => planet.name === destination,
        );

        setPlanet(planetSelected[0]);
    }, [destination]);

    return (
        <BackgroundContainer background={backgroundDestinationDesktop}>
            <Header />
            <MainContent>
                <h2>
                    <span>01</span>
                    PICK YOUR DESTINATION
                </h2>

                <section>
                    <div className="planet">
                        {destination === "Moon" ? (
                            <img src={Moon} alt="Planet" />
                        ) : (
                            ""
                        )}

                        {destination === "Europa" ? (
                            <img src={Europa} alt="Planet" />
                        ) : (
                            ""
                        )}
                        {destination === "Titan" ? (
                            <img src={Titan} alt="Planet" />
                        ) : (
                            ""
                        )}
                        {destination === "Mars" ? (
                            <img src={Mars} alt="Planet" />
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="info">
                        <ul>
                            <li
                                className="active"
                                onClick={() => setDestination("Moon")}
                            >
                                MOON
                            </li>
                            <li onClick={() => setDestination("Mars")}>MARS</li>
                            <li onClick={() => setDestination("Europa")}>
                                EUROPA
                            </li>
                            <li onClick={() => setDestination("Titan")}>
                                TITAN
                            </li>
                        </ul>

                        <div className="information-planet">
                            <p>{planet.name}</p>
                            <p>{planet.description}</p>
                        </div>
                        <div className="data">
                            <div>
                                <p>Avg. Distance</p>
                                <p>{planet.distance}</p>
                            </div>
                            <div>
                                <p>EST. TRAVEL TIME</p>
                                <p>{planet.travel}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </MainContent>
        </BackgroundContainer>
    );
};

export default Destination;
