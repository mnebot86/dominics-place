import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
	const [ref, setRef] = useState(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setVisible(entry.isIntersecting);
		}, options);

		if (ref) {
			observer.observe(ref);
		}

		return () => {
			if (ref) {
				observer.unobserve(ref);
			}
		};
	}, [ref, options]);

	return [setRef, visible];
};

export default useIntersectionObserver;
