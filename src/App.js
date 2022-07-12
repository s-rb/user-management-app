import UserInputForm from "./components/UserInputForm";
import UserList from "./components/UserList";
import {useState} from "react";

const INITIAL_USERS = [];

function App() {

    const [users, setUsers] = useState(INITIAL_USERS);

    const saveUserDataHandler = (userData) => {
        console.log("App: " + JSON.stringify(userData))
        setUsers(prevUsers => {
            return [userData, ...prevUsers]
        });
    }

    return (
        <div>
            <UserInputForm onSaveUserData={saveUserDataHandler}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
