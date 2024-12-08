<script setup lang="ts">
import {
	baseButtonTypes,
	controlSizes,
} from '../../types/prop-models/enums/base-button-types';

interface baseButtonPropsModel {
	label: string;
	buttonType: baseButtonTypes;
	size?: controlSizes;
	isLoading?: boolean;
	isDisable?: boolean;
}

const styles = computed(() => {
	const classNames: string[] = [];

	if (props.buttonType != baseButtonTypes.other) {
		classNames.push(props.buttonType);
	}

	if (props.size) {
		classNames.push(props.size);
	}

	return classNames.join(' ');
});

const props = withDefaults(defineProps<baseButtonPropsModel>(), {
	isLoading: false,
	isDisable: false,
	size: controlSizes.small,
});

const emit = defineEmits(['handleButtonClick']);

function handleButtonClick() {
	if (!props.isDisable && !props.isLoading) {
		emit('handleButtonClick');
	}
}
</script>

<template>
	<button
		class="button"
		:class="styles"
		:disabled="props.isDisable || props.isLoading"
		@click="handleButtonClick"
	>
		<span class="text">
			{{ props.label }}
		</span>
	</button>
</template>

<style scoped>
.button {
	border-radius: var(--border-radius);
	border: 2px solid var(--background-color-negative);
	width: max-content;
	height: max-content;
	word-break: break-word;
	transition:
		background-color 0.3s ease-in-out,
		border 0.3s ease-in-out,
		color 0.3s ease-in-out;

	&.primary {
		background-color: var(--button-primary-background);
		border: 2px solid var(--button-primary-border);
		color: var(--button-primary-text);

		&:hover {
			background-color: var(--button-primary-background-hover);
			border: 2px solid var(--button-primary-border-hover);
			color: var(--button-primary-text-hover);
		}
	}

	&.secondary {
		background-color: var(--button-secondary-background);
		border: 2px solid var(--button-secondary-border);
		color: var(--button-secondary-text);

		&:hover {
			background-color: var(--button-secondary-background-hover);
			border: 2px solid var(--button-secondary-border-hover);
			color: var(--button-secondary-text-hover);
		}
	}

	&.small {
		padding: 12px 30px;
		max-width: 320px;

		.text {
			font-size: 1.25rem;
		}
	}

	&.medium {
		padding: 15px 40px;
		max-width: 400px;

		.text {
			font-size: 1.5rem;
		}
	}

	&.large {
		padding: 20px 40px;
		max-width: 450px;

		.text {
			font-size: 28px;
		}
	}

	.text {
		text-align: center;
		color: inherit;
		font-weight: 700;
		letter-spacing: 0.5px;
	}
}
</style>
