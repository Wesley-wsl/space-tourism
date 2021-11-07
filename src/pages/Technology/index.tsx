/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";

import backgroundTechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import backgroundTechnologyMobile from "../../assets/technology/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import LaunchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import SpaceCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import SpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import SpaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";
import Header from "../../components/Header";
import data from "../../services/data.json";
import { BackgroundContainer, IntroPage } from "../../styles/GlobalStyle";
import activeEffect from "../../utils/activeEffect";
import { ChangeRocket, MainContent } from "./styles";

const Technology: React.FC = () => {
    const [rocketName, setRocketName] = useState("Launch vehicle");
    const [rocket, setRocket] = useState(Object);

    useEffect(() => {
        const technologySelected = data.technology.filter(
            rocket => rocket.name === rocketName,
        );

        setRocket(technologySelected[0]);
    }, [rocketName]);
    return (
        <BackgroundContainer
            backgroundDesktop={backgroundTechnologyDesktop}
            backgroundTablet={backgroundTechnologyTablet}
            backgroundMobile={backgroundTechnologyMobile}
        >
            <Header />
            <MainContent>
                <IntroPage>
                    <span>03</span>
                    SPACE LAUNCH 101
                </IntroPage>
                <section>
                    <ChangeRocket>
                        <div
                            className="active"
                            role="button"
                            tabIndex={0}
                            aria-label="click for more information that Launch vehicle rocket"
                            onClick={e => {
                                activeEffect(e);
                                setRocketName("Launch vehicle");
                            }}
                        />
                        <div
                            role="button"
                            tabIndex={0}
                            aria-label="click for more information that Spaceport rocket"
                            onClick={e => {
                                activeEffect(e);
                                setRocketName("Spaceport");
                            }}
                        />
                        <div
                            role="button"
                            tabIndex={0}
                            aria-label="click for more information that Space capsule rocket"
                            onClick={e => {
                                activeEffect(e);
                                setRocketName("Space capsule");
                            }}
                        />
                    </ChangeRocket>
                    <div className="rocket-informations">
                        <p>THE TERMINOLOGY…</p>
                        <h1>{rocket.name}</h1>
                        <p>{rocket.description}</p>
                    </div>
                    <div className="imageDesktop">
                        {rocketName === "Launch vehicle" ? (
                            <img src={LaunchVehiclePortrait} alt="rocket" />
                        ) : (
                            ""
                        )}
                        {rocketName === "Spaceport" ? (
                            <img src={SpaceportPortrait} alt="rocket" />
                        ) : (
                            ""
                        )}
                        {rocketName === "Space capsule" ? (
                            <img src={SpaceCapsulePortrait} alt="rocket" />
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="image-responsive">
                        {rocketName === "Launch vehicle" ? (
                            <img src={LaunchVehicleLandscape} alt="rocket" />
                        ) : (
                            ""
                        )}
                        {rocketName === "Spaceport" ? (
                            <img src={SpaceportLandscape} alt="rocket" />
                        ) : (
                            ""
                        )}
                        {rocketName === "Space capsule" ? (
                            <img src={SpaceCapsuleLandscape} alt="rocket" />
                        ) : (
                            ""
                        )}
                    </div>
                </section>
            </MainContent>
        </BackgroundContainer>
    );
};

export default Technology;
