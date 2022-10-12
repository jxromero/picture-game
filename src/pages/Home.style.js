import styled from "styled-components";

export const HomeContainer = styled.div`
    text-align: center;
    margin: 100px 0;
`;

export const StartButton = styled.div`
    display: inline-block;
    margin-bottom: 40px;
    padding: 10px 30px;
    border-radius: 30px;
    background: #73c15b;
    border-bottom: 3px solid #579244;
    color: #fff;
    text-transform: uppercase;
`;

export const UserInput = styled.input`
    text-align: center;
    border: 0;
    border-bottom: 2px solid #5d3b15;
    background: transparent;
    font-size: 24px;
    margin-bottom: 20px;
`;

export const AddUser = styled.button`
    margin-bottom: 40px;
    padding: 10px 30px;
    border-radius: 30px;
    background: #73c15b;
    border-bottom: 3px solid #579244;
    color: #fff;
    text-transform: uppercase;
`;

export const Users = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const User = styled.li`
    background: url('img/paper-bg.jpg');
    padding: 10px 30px;
    margin-right: 10px;
    cursor: pointer;
`;