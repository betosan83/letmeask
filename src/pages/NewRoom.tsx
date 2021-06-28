import { Link } from 'react-router-dom'

import { Button } from "../components/Button";
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
// import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
    // const { user } = useAuth();

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