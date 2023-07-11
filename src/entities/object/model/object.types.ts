interface IObject {
	id: string;
	name: string;
	chats: IChat[];
}
interface IChat {
	id: string;
	name: string;
	messages: IMessage[];
	unreadedMessages: number;
}
interface IMessage {
	id: string;
	content: string;
	createdAt: string;
	isUser: boolean;
}
