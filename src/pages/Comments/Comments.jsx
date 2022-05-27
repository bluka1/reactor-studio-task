import React, { useMemo } from 'react';
import Comment from '../../components/Comment/Comment';
import data from '../../comments.json';
import styles from './Comments.module.css';
import NewMessage from '../../components/NewMessage/NewMessage';
import CommentDate from '../../components/CommentDate/CommentDate';

const Comments = () => {
	const comments = useMemo(() => {
		return data.data.comments.map((comment) => {
			return (
				<div key={comment.id}>
					{!comment.parent_id && <CommentDate timestamp={comment.timestamp} />}
					{!comment.parent_id && (
						<Comment commentData={comment}>
							{data.data.comments.map((reply) => {
								if (comment.id === reply.parent_id) {
									return <Comment key={reply.id} commentData={reply} />;
								}
								return false;
							})}
						</Comment>
					)}
				</div>
			);
		});
	}, []);

	return (
		<div className={styles.commentsContainer}>
			<div className={styles.comments}>{comments}</div>
			<NewMessage />
		</div>
	);
};

export default Comments;
