<script setup lang="ts">
const defaultLayoutName = 'default';

const isModalVisible = ref(false);

onMounted(() => {
	setTimeout(() => {
		isModalVisible.value = true;
	}, 1000);
});
</script>

<template>
	<Notification />
	<Dialog v-model="isModalVisible">
		<template #header>
			<span> Tytył testowy </span>
		</template>
		<div>zawartość modala</div>
	</Dialog>
	<NuxtLayout :name="defaultLayoutName">
		<NuxtPage />
	</NuxtLayout>
</template>
