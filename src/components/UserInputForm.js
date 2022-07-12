import styles from "./UserInputForm.module.css";
import Card from "./UI/Card";
import {useState} from "react";

const UserInputForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            name: inputName,
            age: inputAge,
            id: Math.random().toString()
        }

        console.log(userData)
        props.onSaveUserData(userData);
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <div className={styles['new-user__controls']}>
                    <div className={styles['new-user__control']}>
                        <label>Имя</label>
                        <input type='text' value={inputName} onChange={nameChangeHandler}></input>
                    </div>
                    <div className={styles['new-user__control']}>
                        <label>Возраст</label>
                        <input type='number' min='1' max='200' step='1' value={inputAge} onChange={ageChangeHandler}></input>
                    </div>
                    <div className={styles['new-user__actions']}>
                        <button type='submit'>Добавить пользователя</button>
                    </div>
                </div>
            </form>
        </Card>
    )
}

export default UserInputForm;