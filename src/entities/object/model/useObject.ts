import { useEffect, useState } from "react";
import { getObjectsInfo } from "@/shared/api/requests";
import { useObjectStore } from "..";

export const useObject = () => {
	const [loading, setLoading] = useState(true);
	const { setNewObjects, objects } = useObjectStore();

	useEffect(() => {
		const fetchData = async () => {
			const res = await getObjectsInfo();
			setNewObjects(res);
			setLoading(false);
		};
		fetchData().catch(e => console.warn(e));
	}, []);

	return { objects, loading };
};
