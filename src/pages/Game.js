import { useEffect, useState } from 'react';
import { items } from '../items/items';
import { seconds } from '../timer';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from "react-redux";
import * as usersAction from '../redux/actions/usersActions';
import Pictures from '../components/pictures';
import { Answer,
         LetterBox, 
         Container, 
         Main, 
         ButtonCounter, 
         Timer, 
         NextButton, 
         List, 
         ListItem, 
         ListTitle,
         ScoreButton,
         ListContainer } from './Game.style';

function Game() {
    const [next, setNext] = useState(0);
    const [item, setItem] = useState(items[next]);
    const [show, setShow] = useState(false);
    const [timer, setTimer] = useState(seconds);
    const { addUserPoint, subtractUserPoint, sortUser } = bindActionCreators(usersAction, useDispatch());
    const users = useSelector((state) => state.users);

    useEffect(() => {
        setItem(items[next]);
    }, [next])

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setTimeout(() => {setTimer(timer - 1)}, 1000);
        } else {
            setShow(true);
            setTimeout(interval)
        }
    }, [timer])

    const handleNext = () => {
        setNext(next + 1);
        setTimer(seconds);
        setShow(false);
    }

    const handlePoint = (user, action) => {
        switch(action) {
            case 'subtract':
                subtractUserPoint(user);
                break;
            default:
                addUserPoint(user);
                break;
        }
    }

    const HandleAnswer = () => {
        return <Answer>{
            item.answer?.split('').map(a => <LetterBox theme={{letter: a, wordLength: item.answer.length}}>{show ? a : a.replace(a, '')}</LetterBox>)}
        </Answer>
    }

    return (
        <Container>
            { item ? 
                <Main>
                    <ButtonCounter>
                        <Timer bgColor={timer <= 5 ? '#e92438' : '#66c8af'}>{timer}</Timer>
                        <NextButton display={timer == 0 ? 'block' : 'none'} onClick={handleNext} disabled={!show}>Next</NextButton>
                    </ButtonCounter>
                    <Pictures pictures={item.pictures} />
                    <HandleAnswer />
                </Main>
                :
                <h1>No More! Wag kang makulet!</h1>
            }
            <ListContainer>
                <ListTitle>SCORE BOARD!</ListTitle>
                <List>
                    {users.map((user, index) => 
                        <ListItem key={index}>
                            <p>{user.user}</p>
                            <div>
                                <ScoreButton theme={{color: '#e92438', shadow: '#b61c2b'}} onClick={() => handlePoint(user.id, 'subtract')}>-</ScoreButton>
                                <ScoreButton theme={{color: '#66c8af', shadow: '#468575'}} onClick={() => handlePoint(user.id, 'add')}>+</ScoreButton>
                                <span>{user.score}</span>
                            </div>
                        </ListItem>
                    )}
                </List>
            </ListContainer>
        </Container>
    )
}

export default Game;