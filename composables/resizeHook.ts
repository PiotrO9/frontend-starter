export function useResize(size = 1200) {
	const isDesktop = ref(true);

	function onResize() {
		isDesktop.value = window.innerWidth >= size;
	}

	onMounted(() => {
		window.addEventListener('resize', onResize);
		onResize();
	});

	onUnmounted(() => window.removeEventListener('resize', onResize));

	return { isDesktop };
}
