import styles from "./UserList.css";
import UserEntry from "./UserEntry";
import Card from "./UI/Card";

const UserList = (props) => {
    if (props.users.length === 0) {
        return <Card>
            <div className={styles['user-list']}>
                <h2>Нет юзеров</h2>
            </div>
        </Card>
    }

    return <Card>
        <div className={styles['user-list']}>
            <h2>Юзер лист</h2>
            <ul>
                {props.users.map(user => {
                    return <UserEntry key={user.id}>
                        {user.name} - {user.age}
                    </UserEntry>
                })}
            </ul>
        </div>
    </Card>
}

export default UserList;