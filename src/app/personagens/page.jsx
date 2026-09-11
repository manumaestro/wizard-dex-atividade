"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import CharacterCard from "../../components/CharacterCard";
import CharacterModal from "../../components/CharacterModal";

export default function Personagens() {
  const [personagens, setPersonagens] = useState([]);
  const [personagenmSelecionado, setPersonagemSelecionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarPersonagens() {
      try {
        setLoading(true);
        setErro("");

        const resposta = await axios.get(API_URL);

        setPersonagens(resposta.data);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar os personagens. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }

    buscarPersonagens();
  }, []);

  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("wizarddex-favoritos");

    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos));
    }
  }, []);

  function alternarFavorito(personagem) {
    const jaFavoritado = favoritos.includes(personagem.id);

    let novosFavoritos;

    if (jaFavoritado) {
      novosFavoritos = favoritos.filter((id) => id !== personagem.id);

      toast.info(`${personagem.name} foi removido dos favoritos.`);
    } else {
      novosFavoritos = [...favoritos, personagem.id];

      toast.success(`${personagem.name} foi adicionado aos favoritos!`);
    }

    setFavoritos(novosFavoritos);

    localStorage.setItem("wizarddex-favoritos", JSON.stringify(novosFavoritos));
  }

  return (
    <main className="characters-page">
      <section className="page-header">
        <span>✦ WIZARDDEX</span>

        <h1>
          Conheça os <strong>bruxos</strong>
        </h1>

        <p>
          Explore os personagens e descubra informações sobre suas casas,
          atores, patronos e muito mais.
        </p>
      </section>

      {loading && (
        <div className="loading-container">
          <div className="magic-loader">✦</div>
          <h2>Consultando os arquivos mágicos...</h2>
          <p>Buscando personagens na API.</p>
        </div>
      )}

      {!loading && erro && (
        <div className="error-container">
          <span>⚠️</span>
          <h2>Algo deu errado</h2>
          <p>{erro}</p>

          <button
            className="primary-button"
            onClick={() => window.location.reload()}
          >
            Tentar novamente
          </button>
        </div>
      )}

      {!loading && !erro && (
        <section className="characters-container">
          <div className="results-info">
            <span>{personagens.length} personagens encontrados</span>

            <span>♥ {favoritos.length} favoritos</span>
          </div>

          <div className="characters-grid">
            {personagens.map((personagem, index) => (
              <CharacterCard
                key={personagem.id || `${personagem.name}-${index}`}
                personagem={personagem}
                favorito={favoritos.includes(personagem.id)}
                onFavoritar={() => alternarFavorito(personagem)}
                onClick={() => setPersonagemSelecionado(personagem)}
              />
            ))}
          </div>
        </section>
      )}

      <CharacterModal
        personagem={personagemSelecionado}
        onClose={() => setPersonagemSelecionado(null)}
      />
    </main>
  );
}
