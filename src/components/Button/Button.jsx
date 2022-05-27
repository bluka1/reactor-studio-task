import React from 'react';
import styles from './Button.module.css';

const Button = ({ Icon, text }) => {
	return (
		<button className={styles.button}>
			<Icon />
			{text && text}
		</button>
	);
};

export default Button;
