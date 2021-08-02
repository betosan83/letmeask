import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';

import "../styles/room.scss";
import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    //const {user} = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            andedAt: new Date()
        })
        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
       if (window.confirm('Tem certeza que deseja deletar?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
       }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="letmeask" />
                    <div>
                        <RoomCode code={roomId}></RoomCode>
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>

                {/* Iterates through all the questions creating an Question component for each one */}                
                <div className="question-list">
                {questions.map(question => {
                    return (
                        <Question
                            key={question.content}
                            content={question.content}
                            author={question.author}
                        >
                            <button
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}>
                                <img src={deleteImg} alt="Remover pergunta" />
                            </button>
                        </Question>
                    )
                })}

                </div>
            </main>
        </div>
    )
}