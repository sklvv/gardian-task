import { ChatWindow } from "./ChatWindow";
import { ChatsListing } from "./ChatsListing";
import styles from "./chat.module.scss";
export const Chat = () => {
	return (
		<div className={styles.chat}>
			<ChatsListing />
			<ChatWindow />
		</div>
	);
};
