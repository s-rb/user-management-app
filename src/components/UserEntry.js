import styles from "./UserEntry.css";

const UserEntry = (props) => {
    return (
        <li className="user-item">
            {props.children}
        </li>
    );
}

export default UserEntry;