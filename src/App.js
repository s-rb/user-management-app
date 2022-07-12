import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";
import {useState, Fragment} from "react";

function App() {

    const [userList, setUserList] = useState([])
    const createUserHandler = (name, age) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: name, age: age, id: Math.random().toString()}];
        })
    }

    return (
        <Fragment>
            <CreateUser onCreateUser={createUserHandler}/>
            <UserList users={userList}/>
        </Fragment>
    );
}

export default App;
