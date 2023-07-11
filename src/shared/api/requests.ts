const BASE_URL = "https://64ad1bb3b470006a5ec55c74.mockapi.io";

export const getObjectsInfo = async () => {
	const response = await fetch(`${BASE_URL}/data`);
	const result = (await response.json()) as IObject[];

	return result;
};
