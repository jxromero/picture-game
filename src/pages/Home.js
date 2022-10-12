import { useState } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from "react-redux";
import * as usersAction from '../redux/actions/usersActions';
import { HomeContainer,
         UserInput,
         StartButton,
         AddUser,
         Users,
         User } from './Home.style';

function Home () {
    const [ user, setUser ] = useState('');
    const { addUser, deleteUser } = bindActionCreators(usersAction, useDispatch());
    const users = useSelector((state) => state.users);

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handleSubmit = (e) => {
        const userObj = {
            id: Math.floor(Math.random() * 100000),
            user: user,
            score: 0
        }
        addUser(userObj);
        setUser('');
    }

    const handleDelete = (id) => {
        deleteUser(id);
    }
    
    return (
        <HomeContainer>
            <Link to="/game">
                <StartButton>
                    Start na BULLSHIT!
                </StartButton>
            </Link>
            
            <div className='inputUser'>
                <UserInput type='text' onChange={handleUser} value={user} />
                <br />
                <AddUser onClick={handleSubmit}>Add User</AddUser>
            </div>

            <Users>
                {users.map((user, index) => 
                    <User key={index} onClick={() => handleDelete(user.id)}>{user.user}</User>
                )}
            </Users>
        </HomeContainer>
    );
}

export default Home;