"use client";

import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard";
import CharacterModal from "../../components/CharacterModal";
import { toast } from "react-toastify";

export default function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);
    const [personagemSelecionado, setPersonagemSelecionado] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const favoritosSalvos = sessionStorage.getItem("wizarddex-favoritos");

        if (favoritosSalvos) {
            setFavoritos(JSON.parse(favoritosSalvos));
        }

        setLoading(false);
    }, []);

    function removerFavorito(personagem) { 
        const novosFavoritos = favoritos.filter(
            (item) => item.id !== personagem.id
        );

        setFavoritos(novosFavoritos);

        sessionStorage.setItem(
            "wizarddex-favoritos",
            JSON.stringify(novosFavoritos)
        );

        localStorage.setItem(
            "wizarddex-favoritos",
            JSON.stringify(novosFavoritos)
        );

        toast.info(`${personagem.name} foi removido dos favoritos.`);
    }

    return (
        <main className="favorites-page">
            <section className="page-header">
                <span>MINHA COLEÇÃO</span>

                <h1>
                    Meus <strong>favoritos</strong>
                </h1>

                <p>
                    Aqui estão os personagens que você escolheu guardar na sua coleção mágica.
                </p>

                {loading && (
                    <div className="loading-container">
                        <div className="magic-loader">✦</div>
                        <h2>Carregando Favoritos...</h2>
                    </div>
                )}

                {!loading && favoritos.length === 0 && (
                    <div className="empty-favorites">
                        <div className="empty-icon">♡</div>

                        <h2>Nenhum personagem favoritado</h2>

                        <p>
                            Você ainda não adicionou nenhum personagem aos seus favoritos.
                        </p>

                        <a href="/personagens" className="primary-button">
                        Explorar personagens</a>
                    </div>
                )}

                {!loading && favoritos.length > 0 && (
                    <section className="characters-container">
                        <div className="results-info">
                            <span>
                                {favoritos.length} personagem
                                {favoritos.length !== 1 ? "s" : ""} favoritado
                                {favoritos.length !== 1 ? "s" : ""}
                            </span>

                            <span>♥ Minha coleção</span>
                        </div>

                        <div className="characters-grid">
                            {favoritos.map((personagem, index) => (
                            <CharacterCard 
                            key={
                                personagem.id || `${personagem.name}-${index}`
                            }

                            personagem={personagem}
                            favorito={true}
                            onFavoritar={() => 
                                removerFavorito(personagem)
                            }
                            onClick={() =>
                                setPersonagemSelecionado(personagem)
                            }
                        />
                    ))}
                    </div>
                    </section>
                )}

                <CharacterModal
                personagem={personagemSelecionado}
                onClose={() =>
                    setPersonagemSelecionado(null)
                }
                />
            </section>
        </main>
    );
}
