import { backgroundType } from "../../@types/index";
import backgroundHomeDesktop from "../../assets/home/background-home-desktop.jpg";
import Header from "../../components/Header";
import { BackgroundContainer } from "../../styles/GlobalStyle";
import { MainContent } from "./styles";

const Home: React.FC<backgroundType> = () => {
    return (
        <>
            <BackgroundContainer background={backgroundHomeDesktop}>
                <Header />
                <MainContent>
                    <section>
                        <p>SO, YOU WANT TO TRAVEL TO</p>
                        <p>SPACE</p>
                        <p>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </section>

                    <div>
                        <p>EXPLORE</p>
                    </div>
                </MainContent>
            </BackgroundContainer>
        </>
    );
};

export default Home;
