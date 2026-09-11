"use client";

import Image from "next/image";

export default function CharacterModal({ personagem, onClose }) {
  if (!personagem) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="modal-image">
          {personagem.image ? (
            <Image
              src={personagem.image}
              alt={personagem.name}
              fill
              sizes="350px"
            />
          ) : (
            <div className="no-image">🧙</div>
          )}
        </div>

        <div className="modal-content">
          <span className="modal-house">
            {personagem.house || "Casa desconhecida"}
          </span>

          <h2>{personagem.name}</h2>

          <div className="details-grid">
            <div>
              <span>Espécie</span>
              <strong>{personagem.species || "Não informado"}</strong>
            </div>

            <div>
              <span>Patrono</span>
              <strong>{personagem.patronus || "Não informado"}</strong>
            </div>

            <div>
              <span>Data de nascimento</span>
              <strong>{personagem.dateOfBirth || "Não informado"}</strong>
            </div>

            <div>
              <span>Cor dos olhos</span>
              <strong>{personagem.eyeColour || "Não informado"}</strong>
            </div>

            <div>
              <span>Cor do cabelo</span>
              <strong>{personagem.hairColour || "Não informado"}</strong>
            </div>

            <div>
              <span>Ator/Atriz</span>
              <strong>{personagem.actor || "Não informado"}</strong>
            </div>

            <div>
              <span>Situação</span>
              <strong className={personagem.alive ? "alive" : "dead"}>
                {personagem.alive ? "● Vivo" : "● Morto"}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
