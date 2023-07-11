import React, { useState } from "react";
import styles from "./objectCard.module.scss";
import { Badge } from "@/shared/ui/Badge";
import { ChatCard } from "./ChatCard";
// import { ChatCard } from "@/entities/chat/ui/ChatCard";

interface IProps {
	name: string;
	chats: IChat[];
}

export const ObjectCard: React.FC<IProps> = ({ chats, name }) => {
	const [active, setActive] = useState(false);
	const totalUnreadedMessages = chats
		.map(chat => chat.unreadedMessages)
		.reduce((acc, value) => (acc += value), 0);

	return (
		<>
			<div
				className={styles.objectCard}
				onClick={e => setActive(!active)}
			>
				<div className={styles.objectCardName}>
					{name}
					{totalUnreadedMessages > 0 && (
						<Badge text={totalUnreadedMessages.toString()} />
					)}
				</div>
			</div>
			<div
				className={
					active
						? styles.objectCardDropdownActive
						: styles.objectCardDropdown
				}
			>
				{chats.map(chat => {
					return (
						<ChatCard
							unreadedMessages={chat.unreadedMessages}
							name={chat.name}
							key={chat.name}
							id={chat.id}
						/>
					);
				})}
			</div>
		</>
	);
};
