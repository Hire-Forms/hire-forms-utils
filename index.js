export function castArray(array) => {
	return (Array.isArray(array)) ? array : [array];
};