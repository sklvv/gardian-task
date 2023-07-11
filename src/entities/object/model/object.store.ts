import { create } from "zustand";

interface IObjectsStore {
	objects: IObject[];
	setNewObjects: (newObjects: IObject[]) => void;
}

export const useObjectStore = create<IObjectsStore>()(set => ({
	objects: [],
	setNewObjects: newObjects => set(state => ({ objects: newObjects })),
}));
