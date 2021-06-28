import { Link } from 'react-router-dom'

import { Button } from "../components/Button";
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../App';

export function NewRoom() {
    const { user } = useContext(AuthContext);

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" />
                        <Button className="button" type="submit">
                            Criar sala
                        </Button>
                        <p>
                            Quer entrar numa sala existente? <Link to="/">clique aqui</Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    )
}