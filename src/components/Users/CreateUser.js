import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import React, {Fragment, useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();
        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;
        if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
            setError({title: 'Некорректный ввод', message: 'Эти поля не могут быть пустыми'});
            return;
        }

        // + - преобразует строку в число
        if (+inputUserAge < 1) {
            setError({title: 'Некорректный возраст', message: 'Возраст должен быть больше 0'});
            return;
        }

        props.onCreateUser(inputUserName, inputUserAge);
        // Не рекомендуется делать так, лучше State. Для считывания - refs норм
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(false);
    }

    return (
        <Fragment>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor='name'>Имя</label>
                    <input type='text' id='name' ref={nameInputRef}/>
                    <label htmlFor='age'>Возраст</label>
                    <input type='number' id='age' ref={ageInputRef}/>
                    <Button type='submit'>Добавить пользователя</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default CreateUser;