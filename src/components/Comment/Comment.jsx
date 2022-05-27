import React from 'react';
import { format } from 'date-fns';

import styles from './Comment.module.css';

const Comment = ({ commentData, children }) => {
	const { parent_id, author, text, timestamp } = commentData;
	const { name, picture } = author;
	const classes = parent_id
		? `${styles.commentContainer} ${styles.childComponent}`
		: styles.commentContainer;

	return (
		<>
			<div className={classes}>
				<img src={picture} alt={name} className={styles.picture} />
				<div className={styles.comment}>
					<div className={styles.commentMessage}>
						<p className={styles.name}>{name}</p>
						<p className={styles.text}>{text}</p>
					</div>
					<div className={styles.commentInfo}>
						<span className={styles.time}>
							{format(new Date(timestamp), 'p')}
						</span>
						<span className={styles.bulletPoint}>&#183;</span>
						<button className={styles.reply}>Reply</button>
					</div>
				</div>
			</div>
			{children && <div className={styles.childrenContainer}>{children}</div>}
		</>
	);
};

export default Comment;
