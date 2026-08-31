import './globals.css';
import Navbar from "../components/Navbar";
import ToastProvider from "components/ToastProvider";

export const metadata = {
    title: 'FrontEnd - Codeverse',
    description: 'Uma enciclopédia digital dos personagens do universo mágico',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>
                <Navbar/>
                <ToastProvider/>
                {children}
            </body>
        </html>
    );
}
