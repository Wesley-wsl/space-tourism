/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";

import backgroundCrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import backgroundCrewMobile from "../../assets/crew/background-crew-mobile.jpg";
import backgroundCrewTablet from "../../assets/crew/background-crew-tablet.jpg";
import AnoushehAnsari from "../../assets/crew/image-anousheh-ansari.webp";
import DouglasHurley from "../../assets/crew/image-douglas-hurley.png";
import MarkShuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import VictorGlover from "../../assets/crew/image-victor-glover.png";
import Header from "../../components/Header";
import data from "../../services/data.json";
import { BackgroundContainer, IntroPage } from "../../styles/GlobalStyle";
import activeEffect from "../../utils/activeEffect";
import { ChangeCrew, MainContent } from "./styles";

const Crew: React.FC = () => {
    const [crewName, setCrewName] = useState("Douglas Hurley");
    const [crew, setCrew] = useState(Object);

    useEffect(() => {
        const crewSelected = data.crew.filter(crew => crew.name === crewName);

        setCrew(crewSelected[0]);
    }, [crewName]);

    return (
        <BackgroundContainer
            backgroundDesktop={backgroundCrewDesktop}
            backgroundTablet={backgroundCrewTablet}
            backgroundMobile={backgroundCrewMobile}
        >
            <Header />
            <MainContent>
                <IntroPage>
                    <span>02</span>
                    MEET YOUR CREW
                </IntroPage>

                <section>
                    <div>
                        <h2>{crew.role}</h2>
                        <h1>{crew.name}</h1>
                        <p>{crew.bio}</p>
                        <ChangeCrew>
                            <div
                                className="active"
                                role="button"
                                tabIndex={0}
                                aria-label="click for more information about Douglas Hurley"
                                onClick={e => {
                                    activeEffect(e);
                                    setCrewName("Douglas Hurley");
                                }}
                            />
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label="click for more information about Mark Shuttleworth"
                                onClick={e => {
                                    activeEffect(e);
                                    setCrewName("Mark Shuttleworth");
                                }}
                            />
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label="click for more information about Victor Glover"
                                onClick={e => {
                                    activeEffect(e);
                                    setCrewName("Victor Glover");
                                }}
                            />
                            <div
                                role="button"
                                tabIndex={0}
                                aria-label="click for more information about Anousheh Ansari"
                                onClick={e => {
                                    activeEffect(e);
                                    setCrewName("Anousheh Ansari");
                                }}
                            />
                        </ChangeCrew>
                    </div>
                    <div>
                        {crewName === "Douglas Hurley" ? (
                            <img src={DouglasHurley} alt="Crew" />
                        ) : (
                            ""
                        )}
                        {crewName === "Mark Shuttleworth" ? (
                            <img src={MarkShuttleworth} alt="Crew" />
                        ) : (
                            ""
                        )}
                        {crewName === "Victor Glover" ? (
                            <img src={VictorGlover} alt="Crew" height="480px" />
                        ) : (
                            ""
                        )}
                        {crewName === "Anousheh Ansari" ? (
                            <img src={AnoushehAnsari} alt="Crew" />
                        ) : (
                            ""
                        )}
                    </div>
                </section>
            </MainContent>
        </BackgroundContainer>
    );
};

export default Crew;
