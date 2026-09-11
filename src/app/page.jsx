import Link from "next/link";
import Image from "next/image";


export default function Home() {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <span className="eyebrow">✦ O mundo mágico em um só lugar</span>


                    <h1>
                        Bem-vindo à
                        <span> WizardDex</span>
                    </h1>


                    <p>
                        Explore uma enciclopédia digital com informações
                        sobre os personagens do universo mágico de Harry Potter.
                    </p>


                    <div className="hero-buttons">
                        <Link href="/personagens" className="primary-button">
                            Explorar personagens
                        </Link>


                        <Link href="/sobre" className="secondary-button">
                            Conheça o projeto
                        </Link>
                    </div>
                </div>


                <div className="hero-image">
                    <Image
                        src="/banner.svg"
                        alt="Ilustração temática da WizardDex"
                        fill
                        priority
                        sizes="(max-width: 900px) 90vw, 550px"
                    />
                </div>
            </section>


            <section className="home-section">
                <div className="section-heading">
                    <span>✦ SOBRE A WIZARDDEX</span>
                    <h2>Uma enciclopédia feita para fãs da magia</h2>
                    <p>
                        A WizardDex foi desenvolvida como uma aplicação web
                        para explorar informações dos personagens do universo
                        mágico de forma simples, moderna e interativa.
                    </p>
                </div>


                <div className="feature-grid">
                    <div className="feature-card">
                        <span>🧙</span>
                        <h3>Personagens</h3>
                        <p>
                            Consulte informações sobre diversos personagens.
                        </p>
                    </div>


                    <div className="feature-card">
                        <span>❤️</span>
                        <h3>Favoritos</h3>
                        <p>
                            Salve seus personagens preferidos.
                        </p>
                    </div>


                    <div className="feature-card">
                        <span>📖</span>
                        <h3>Detalhes</h3>
                        <p>
                            Veja informações completas em um modal interativo.
                        </p>
                    </div>
                </div>
            </section>


            <section className="technologies">
                <div className="section-heading">
                    <span>✦ TECNOLOGIAS</span>
                    <h2>Feitiços utilizados no desenvolvimento</h2>
                </div>


                <div className="tech-list">
                    <span>Next.js 16</span>
                    <span>React</span>
                    <span>Axios</span>
                    <span>React Toastify</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                </div>
            </section>
        </main>
    );
}

