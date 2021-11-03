import backgroundHomeDesktop from "../../assets/home/background-home-desktop.jpg";
import Header from "../../components/Header";
import { Container } from "./styles";

interface HomeTypes {
    background: string;
}

const Home: React.FC<HomeTypes> = () => {
    return (
        <>
            <Container background={backgroundHomeDesktop}>
                <Header />
                <main>
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
                </main>
            </Container>
        </>
    );
};

export default Home;
