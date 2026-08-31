import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="navbar">
            <div className="nav-container">
            <Link href="/" className="nav-logo">
                <Image
                    src="logo.png"
                    alt="WizardDex"
                    width={55}
                    height={55}
                />

                <div>
                    <strong>Wizard<span>Dex</span></strong>
                    <small>Enciclopédia dos Bruxos</small>
                </div>
            </Link>

            <nav>
                <Link href="/">Home</Link>
                <Link href="/personagens">Personagens</Link>
                <Link href="/sobre">Sobre</Link>
            </nav>
        </div>
    </header>
    );
}