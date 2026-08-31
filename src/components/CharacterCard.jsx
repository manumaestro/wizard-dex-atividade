import Image from "next/image";

export default function CharacterCard({
    personagem,
    favorito,
    onFavoritar,
    onClick,
}) {
    return (
        <article className="character-card">
            <button
            className={`favorite-button ${favorito ? "active" : ""}`}
            onClick={(event) => {
                event.stopPropagation();
                onFavoritar();
            }}
            aria-label={
                favorito ? `Remover ${personagem.name} dos favoritos`
                : `Favoritar ${personagem.name}`
            }
         >
            {favorito ? "♥" : "♡"}
            </button>

            <button className="character-click" onClick={onClick}>
                <div className="character-image">
                    {personagem.image ? (
                        <Image 
                        src={personagem.image}
                        alt={personagem.name}
                        fill sizes="(max-width: 768px) 100vw, 250px"
                        />
                    ) : (
                        <div className="no-image">🧙</div>

                    )}
                </div>

                <div className="character-info">
                    <span className="character-house">
                        {personagem.house || "Casa desconhecida"}
                    </span>

                    <h2>{personagem.name}</h2>

                    <p>
                        <strong>Ator/Atriz:</strong>{" "}
                        {personagem.actor || "Não informado"}
                    </p>

                    <span className="see-more">
                        Ver detalhes →
                    </span>
                </div>
            </button>
        </article>
    );
}