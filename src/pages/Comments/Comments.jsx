import React, { useCallback, useMemo } from 'react';
import Comment from '../../components/Comment/Comment';
import data from '../../comments.json';
import styles from './Comments.module.css';
import NewMessage from '../../components/NewMessage/NewMessage';
import CommentDate from '../../components/CommentDate/CommentDate';

const Comments = () => {
	const filterChildren = useCallback((pId) => {
		const filteredComments = data.data.comments.filter((child) => {
			if (child.parent_id === pId) {
				return child;
			} else {
				return false;
			}
		});
		if (filteredComments.length > 0) {
			return filteredComments.map((comment) => {
				return (
					<Comment key={comment.id} commentData={comment}>
						{filterChildren(comment.id)}
					</Comment>
				);
			});
		} else {
			return false;
		}
	}, []);

	const comments = useMemo(() => {
		return data.data.comments.map((comment) => {
			return (
				<div key={comment.id}>
					{!comment.parent_id && <CommentDate timestamp={comment.timestamp} />}
					{!comment.parent_id && (
						<Comment commentData={comment}>
							{filterChildren(comment.id)}
						</Comment>
					)}
				</div>
			);
		});
	}, [filterChildren]);

	return (
		<div className={styles.commentsContainer}>
			<div className={styles.comments}>{comments}</div>
			<NewMessage />
		</div>
	);
};

export default Comments;
