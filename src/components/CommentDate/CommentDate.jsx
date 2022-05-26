import React from 'react';
import { format } from 'date-fns';

import styles from './CommentDate.module.css';

const CommentDate = ({ timestamp }) => {
	const commentDate = new Date(timestamp);
	return (
		<p className={styles.commentDate}>
			{format(commentDate, 'EEEE')}, {format(commentDate, 'dd.MM.yyyy.')}
		</p>
	);
};

export default CommentDate;
