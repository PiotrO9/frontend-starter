<script setup lang="ts">
interface DialogPropsModel {
	modelValue?: boolean;
}

const props = defineProps<DialogPropsModel>();

const dialogElement = ref<HTMLDialogElement | null>(null);
const alreadyClosing = ref(false);
const containerVisible = ref(false);

const slots = useSlots();

const emits = defineEmits(['update:modelValue', 'dialogClosed']);

watch(
	() => props.modelValue,
	(status) => (status ? showModal() : handleCloseDialog()),
);

onMounted(() => {
	dialogElement.value?.addEventListener('close', listenCloseDialog);
	dialogElement.value?.addEventListener('mousedown', listenMouseDownDialog);
});

onUnmounted(() => {
	dialogElement.value?.removeEventListener('close', listenCloseDialog);
	dialogElement.value?.removeEventListener('mousedown', listenMouseDownDialog);
});

function showModal() {
	alreadyClosing.value = false;
	containerVisible.value = true;
	dialogElement.value?.showModal();
	dialogElement.value?.removeAttribute('inert');
}

function listenCloseDialog() {
	alreadyClosing.value = true;
	emits('update:modelValue', false);
	emits('dialogClosed');
}

function listenMouseDownDialog(event: Event) {
	event.stopPropagation();

	const dialog = event.target as HTMLDialogElement;

	if (dialog.nodeName === 'DIALOG') {
		dialogElement.value?.classList.add('hide');
		dialogElement.value?.addEventListener(
			'webkitAnimationEnd',
			function caller() {
				dialogHide();
				dialogElement.value?.removeEventListener(
					'webkitAnimationEnd',
					caller,
					false,
				);
			},
		);
	}
}

function dialogHide() {
	dialogElement.value?.classList.remove('hide');
	dialogElement.value?.close('dismiss');
	dialogElement.value?.setAttribute('inert', '');
	containerVisible.value = false;
}

function handleCloseDialog() {
	if (!alreadyClosing.value) {
		dialogElement.value?.classList.add('hide');
		dialogElement.value?.addEventListener(
			'webkitAnimationEnd',
			function caller() {
				dialogHide();
				dialogElement.value?.removeEventListener(
					'webkitAnimationEnd',
					caller,
					false,
				);
			},
		);
	}
}

function slotExists(slotName: string) {
	return Object.keys(slots).includes(slotName);
}
</script>

<template>
	<dialog ref="dialogElement" class="dialog">
		<div class="scroll-container">
			<div class="content-wrapper">
				<header v-if="slotExists('header')" class="header">
					<div class="title">
						<slot name="header" />
					</div>
					<button
						class="close"
						type="button"
						title="Close"
						@click="handleCloseDialog"
					>
						<Icon name="material-symbols:close" />
					</button>
				</header>
				<main class="inner">
					<slot :cancel="handleCloseDialog" />
				</main>
			</div>
		</div>
	</dialog>
</template>

<style scoped>
@keyframes show-dialog {
	from {
		scale: 0.9;
		opacity: 0;
	}

	to {
		scale: 1;
		opacity: 1;
	}
}

@keyframes hide-dialog {
	from {
		scale: 1;
		opacity: 1;
	}

	to {
		scale: 0.9;
		opacity: 0;
	}
}

@keyframes show-backdrop {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes hide-backdrop {
	to {
		opacity: 0;
	}
}

.dialog {
	border: none;
	padding: 0;
	box-shadow:
		0 10px 20px rgb(48 49 51 / 7%),
		0 2px 7px rgb(40 41 42 / 10%);
	border-radius: 5px;
	background-color: #fff;
	overflow: hidden;
	max-height: unset;
	outline: none;
	position: fixed;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
}

.scroll-container {
	padding: 20px;
	overflow: auto;
	height: fit-content;
	max-height: calc((100vh - 6px) - 2em);
	background-color: #fff;
	transition: filter 0.15s ease-in-out;
}

.content-wrapper {
	display: grid;
	gap: 15px;
}

.inner {
	background-color: #fff;
	min-height: 50px;
}

.dialog[open] {
	animation: show-dialog 0.15s ease-in-out normal;
}

.dialog[open]::backdrop {
	animation: show-backdrop 0.15s ease-in-out normal;
}

.dialog.hide {
	animation: hide-dialog 0.15s ease-in-out normal;
}

.dialog.hide::backdrop {
	animation: hide-backdrop 0.15s ease-in-out normal;
}

.dialog::backdrop {
	background-color: rgb(0 0 0 / 50%);
	backdrop-filter: saturate(0);
}

.dialog:has(.dialog[open]) .dialog::backdrop {
	opacity: 0;
	animation: none;
}

.dialog:has(.dialog[open]) > .scroll-container {
	filter: brightness(0.5);
}

.header {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 15px;
	align-items: center;
}

.title {
	font-size: 1rem;
	font-weight: 700;
	word-break: break-all;
}

.title:deep(h2) {
	font-size: inherit;
	margin: 0;
}

.close {
	display: flex;
	padding: 3px;
	border-radius: 50%;
	outline: none;
}
</style>
