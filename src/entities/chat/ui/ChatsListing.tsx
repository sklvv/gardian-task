import { ObjectCard, useObjectStore } from "@/entities/object";
import React from "react";
import styles from "./chat.module.scss";
export const ChatsListing = () => {
	const { objects } = useObjectStore();
	return (
		<div className={styles.chatsListing}>
			{objects.map(obj => {
				return (
					<ObjectCard
						chats={obj.chats}
						name={obj.name}
						key={obj.id}
					/>
				);
			})}
		</div>
	);
};
