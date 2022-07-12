import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React, {Fragment} from "react";
import reactDom from "react-dom";

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}

const Modal = (props) => {
    return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onCloseModal}>Закрыть</Button>
        </footer>
    </Card>
}

const ErrorModal = (props) => {
    return (
        <Fragment>
            {reactDom.createPortal(<Backdrop onCloseModal={props.onCloseModal}/>, document.getElementById('backdrop'))}
            {reactDom.createPortal(<Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal}/>,
                document.getElementById("modal"))}
        </Fragment>
    );
};

export default ErrorModal;
