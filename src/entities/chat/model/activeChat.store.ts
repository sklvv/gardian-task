import { create } from "zustand";

interface IActiveChat {
	activeChat: IChat | null;
	changeActiveChat: (newChat: IChat) => void;
}

export const useActiveChat = create<IActiveChat>()(set => ({
	activeChat: null,
	changeActiveChat: newChat => set(state => ({ activeChat: newChat })),
}));
