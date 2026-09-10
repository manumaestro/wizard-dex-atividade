import Link from "next/link";

export default function NotFound() {
    return (
        <main className="not-found">
            <div className="not-found-content">
            <span className="not-found-number">404</span>

            <span className="eyebrow">FEITIÇO NÃO ENCONTRADO</span>

            <h1>
                Essa página
                <span> desapareceu</span>
            </h1>

            <p>
                Parece que você tentou acessar uma página que não existe nos arquivos da WizardDex.
            </p>

            <Link href="/" className="primary-button">Voltar para home</Link>

            </div>
        </main>
    );
}