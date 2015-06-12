export const castArray = (array) => {
	return (Array.isArray(array)) ? array : [array];
};