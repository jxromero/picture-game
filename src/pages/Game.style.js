import styled from "styled-components";

export const ButtonCounter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Container = styled.div`
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
    padding: 50px;
`;

export const Main = styled.div`
    flex-basis: 60%;
`;

export const Timer = styled.p`
    background-color: ${props => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    color: white;
    font-size: 18px;
    border-radius: 50%;
`;

export const NextButton = styled.button`
    display: ${props => props.display};
    border-radius: 30px;
    padding: 7px 25px;
    border: 0;
    background: #69c7af;
    color: white;
    border-bottom: solid 3px #468575;
`;

export const Answer = styled.h2`
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const LetterBox = styled.span`
    border: 1px solid #fff;
    display: inline-block;
    height: ${props => (props.theme.wordLength > 8) ? '40px' : '50px'};
    width: ${props => (props.theme.wordLength > 8) ? '40px' : '50px'};
    border-radius: 5px;
    margin-right: 5px;
    color: white;
    text-align: center;
    font-size: ${props => (props.theme.wordLength > 8) ? '35px' : '40px'};
    background: ${props => (props.theme.letter === ' ') ? '#fff' : 'transparent'};
`;

export const ScoreButton = styled.button`
    border-radius: 30px;
    padding: 5px 15px;
    margin-right: 10px;
    border: 0;
    background: ${props => props.theme.color};
    color: white;
    border-bottom: solid 3px ${props => props.theme.shadow};
`;

export const ListContainer = styled.div`
    flex-basis: 30%;
    background: url('img/paper-bg.jpg');
    background-size: cover;
    height: 590px;
    overflow: hidden;
`;

export const List = styled.ul`
    background-position: center;
    padding: 0 20px;
    height: calc(100% - 64px);
    overflow-y: scroll;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 10px 0;
`;

export const ListTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    padding: 20px 0;
`;