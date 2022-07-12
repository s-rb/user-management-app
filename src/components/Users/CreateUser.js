import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";

const CreateUser = (props) => {

    const createUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={styles.input}>
            <form onSubmit={createUserHandler}>
                <label htmlFor='name'>Имя</label>
                <input type='text' id='name'/>
                <label htmlFor='age'>Имя</label>
                <input type='number' id='age'/>
                <Button type='submit'>Добавить пользователя</Button>
            </form>
        </Card>
    )
}

export default CreateUser;