export function uniqueIdGenerator() {
	return Math.floor(Date.now() + Math.random() * 5e9);
}
