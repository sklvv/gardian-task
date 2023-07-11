import React from "react";
import styles from "./chat.module.scss";
import { Badge } from "@/shared/ui/Badge";
import { useActiveChat } from "..";
import { useObject, useObjectStore } from "@/entities/object";
interface IProps {
	id: string;
	name: string;
	unreadedMessages: number;
}
export const ChatCard: React.FC<IProps> = ({ id, name, unreadedMessages }) => {
	const { changeActiveChat, activeChat } = useActiveChat();
	const { objects, setNewObjects } = useObjectStore();
	const handleClick = () => {
		const allChatsArr = objects
			.map(obj => {
				return obj.chats;
			})
			.flat();
		const newChat = allChatsArr.find(chat => chat.id === id);
		const updatedObjects = objects.map(obj => {
			obj.chats.map(chat => {
				if (chat.id === id) {
					chat.unreadedMessages = 0;
				}
				return chat;
			});
			return obj;
		});
		if (newChat) {
			changeActiveChat(newChat);
			setNewObjects(updatedObjects);
		}
	};
	return (
		<div
			className={styles.chatCard}
			onClick={e => handleClick()}
			style={{
				borderColor: activeChat?.id === id ? "red" : "#b5b5b5",
			}}
		>
			{name}
			{unreadedMessages > 0 && (
				<Badge text={unreadedMessages.toString()} />
			)}
		</div>
	);
};
