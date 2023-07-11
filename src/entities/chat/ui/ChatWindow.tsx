import { useActiveChat } from "..";
import { Message } from "./Message";
import styles from "./chat.module.scss";
export const ChatWindow = () => {
	const { activeChat } = useActiveChat();
	return (
		<div className={styles.chatWindow}>
			{activeChat !== null ? (
				activeChat.messages.map(message => {
					return (
						<Message
							content={message.content}
							createdAt={message.createdAt}
							key={message.id}
							isUser={message.isUser}
						/>
					);
				})
			) : (
				<div className={styles.chatWindowPlaceholder}>Выберите чат</div>
			)}
		</div>
	);
};
