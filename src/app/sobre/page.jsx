export default function Sobre() {
    return (
        <main className="about-page">
            <section className="page-header">
                <span>SOBRE O PROJETO</span>

                <h1>
                    Conheça a <strong>WizardDex</strong>
                </h1>

                <p>
                    Um projeto acadêmico desenvolvido para colocar em prática conceitos de desenvolvimento web moderno.
                </p>
            </section>

            <section className="about-container">
                <div className="about-card">
                    <span className="about-icon">🏰</span>

                    <h2>Informações acadêmicas</h2>

                    <div className="about-info">
                        <div>
                            <span>Curso</span>
                            <strong>Desenvolvimento de Sistemas</strong>
                        </div>

                        <div>
                            <span>Turma</span>
                            <strong>COLOQUE SUA TURMA</strong>
                        </div>

                        <div>
                            <span>Professores</span>
                            <strong>COLOQUE OS PROFESSORES</strong>
                        </div>
                    </div>
                </div>

                <div className="about-card">
                    <span className="about-icon">🧙</span>

                <h2>Integrantes do grupo</h2>

                <ul className="members-list">
                    <li>Nome completo do integrante 1</li>
                    <li>Nome completo do integrante 2</li>
                    <li>Nome completo do integrante 3</li>
                </ul>
                </div>

            </section>

            <section className="about-project">
                <span> OBJETIVO</span>

                <h2>Aprender desenvolvendo</h2>

                <p>
                    A WizardDex tem como objetivo aplicar conceitos de componentes, estados, requisições HTTP, consumo de APIs, navegação entre páginas e criação de interfaces responsivas utilizando Next.js e React.
                </p>
            </section>
        </main>
    );
}