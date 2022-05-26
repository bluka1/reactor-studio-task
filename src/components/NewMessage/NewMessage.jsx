import React from 'react';
import Button from '../Button/Button';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as SendIcon } from '../../assets/icons/send.svg';
import styles from './NewMessage.module.css';

const NewMessage = () => {
	return (
		<div className={styles.newMessageContainer}>
			<Button Icon={PlusIcon} />
			<textarea placeholder="Type your message" className={styles.textarea} />
			<Button Icon={SendIcon} text="Send message" />
		</div>
	);
};

export default NewMessage;
