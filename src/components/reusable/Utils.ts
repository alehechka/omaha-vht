export const scrollToRef = (ref: React.RefObject<any>) =>
	ref.current.scrollIntoView({
		behavior: 'smooth',
		block: 'start',
	});
