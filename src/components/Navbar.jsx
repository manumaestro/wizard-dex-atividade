"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [tema, setTema] = useState("dark");

    useEffect(() => {
        const cookieTema = document.cookie
            .split("; ")
            .find((row) => row.startsWith("theme="))
            ?.split("=")[1];

        const temaAtual = cookieTema || "dark";

        setTema(temaAtual);

        document.documentElement.setAttribute(
            "data-theme",
            temaAtual
        );
    }, []);

    function alternarTema() {
        const novoTema = tema === "dark" ? "light" : "dark";

        setTema(novoTema);

        document.documentElement.setAttribute(
            "data-theme",
            novoTema
        );

        document.cookie = `theme=${novoTema}; path=/; max-age=31536000`;
    }

    return (
        <header className="navbar">
            <div className="nav-container">

                <Link href="/" className="nav-logo">
                    <Image
                        src="/logo.svg"
                        alt="WizardDex"
                        width={55}
                        height={55}
                    />

                    <div>
                        <strong>
                            Wizard<span>Dex</span>
                        </strong>

                        <small>
                            Enciclopédia dos Bruxos
                        </small>
                    </div>
                </Link>

                <nav>
                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/personagens">
                        Personagens
                    </Link>

                    <Link href="/favoritos">
                        Favoritos
                    </Link>

                    <Link href="/sobre">
                        Sobre
                    </Link>

                    <button
                        className="theme-button"
                        onClick={alternarTema}
                        aria-label="Alterar tema"
                        title={
                            tema === "dark"
                                ? "Ativar modo claro"
                                : "Ativar modo escuro"
                        }
                    >
                        <span className="theme-icon">
                            {tema === "dark" ? "🌙" : "☀️"}
                        </span>
                    </button>
                </nav>

            </div>
        </header>
    );
}