import React, { useCallback, useMemo } from 'react';
import Comment from '../../components/Comment/Comment';
import data from '../../comments.json';
import styles from './Comments.module.css';
import NewMessage from '../../components/NewMessage/NewMessage';
import CommentDate from '../../components/CommentDate/CommentDate';

const Comments = () => {
	const filterChildren = useCallback((children) => {
		const filteredComments = data.data.comments.filter((child) => {
			if (children.includes(child.id)) {
				return child;
			} else {
				return false;
			}
		});
		return filteredComments.map((comment) => {
			return (
				<Comment key={comment.id} commentData={comment}>
					{comment.children && filterChildren(comment.children)}
				</Comment>
			);
		});
	}, []);

	const rendercomments = useMemo(() => {
		return data.data.comments.map((comment) => {
			return (
				<div key={comment.id}>
					{!comment.parent_id && <CommentDate timestamp={comment.timestamp} />}
					{!comment.parent_id && (
						<Comment commentData={comment}>
							{comment.children && filterChildren(comment.children)}
						</Comment>
					)}
				</div>
			);
		});
	}, [filterChildren]);

	return (
		<div className={styles.commentsContainer}>
			<div className={styles.comments}>{rendercomments}</div>
			<NewMessage />
		</div>
	);
};

export default Comments;
