import React from "react";
import styles from "./chat.module.scss";
export const Message: React.FC<Partial<IMessage>> = ({
	content,
	createdAt,
	isUser,
}) => {
	return (
		<div
			className={isUser ? styles.messageByUser : styles.message}
			data-createdat={createdAt}
		>
			{content}
		</div>
	);
};
