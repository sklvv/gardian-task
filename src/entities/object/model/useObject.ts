import { useEffect, useState } from "react";
import { getObjectsInfo } from "@/shared/api/requests";
import { useObjectStore } from "..";

export const useObject = () => {
	const [objects, setObjects] = useState<IObject[]>([]);
	const [loading, setLoading] = useState(true);
	const { setNewObjects } = useObjectStore();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getObjectsInfo();
			setNewObjects(res);
			setLoading(false);
		};
		fetchData().catch(e => console.warn(e));
	}, []);

	return { objects, loading, setObjects };
};
