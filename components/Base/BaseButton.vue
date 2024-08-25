<script setup lang="ts">
import { NotificationTypes } from '~/types/enums/notificationTypes';
import { baseButtonTypes, controlSizes } from '../../types/prop-models/enums/base-button-types';
import { useNotificationStore } from '~/stores/notificationStore';

interface baseButtonPropsModel {
    label: string;
    buttonType: baseButtonTypes;
    size?: controlSizes;
    isLoading?: boolean;
    isDisable?: boolean;
    onClickFunction?: Function;
}

const notificationStore = useNotificationStore();

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

const props = withDefaults(defineProps<baseButtonPropsModel>(), { isLoading: false, isDisable: false, size: controlSizes.small });

function handleButtonClick() {
    notificationStore.setNotification({
        title: "Test notification",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
        type: NotificationTypes.ALERT,
    })
}
</script>

<template>
    <button class="button" :class="styles" @click="handleButtonClick">
        <span class="text">
            {{ props.label }}
        </span>
    </button>
</template>

<style scoped>
.button {
    font-family: var(--main-font);
    border-radius: var(--default-border-radius);
    border: 2px solid var(--const-black);
    width: max-content;
    height: max-content;
    word-break: break-word;
    transition: background-color 0.3s ease, border 0.3s ease color 0.3s ease;

    &.primary {
        background-color: var(--const-primary);
        border: 2px solid var(--const-primary);
        color: var(--const-white);

        &:hover {
            background-color: var(--const-white);
            border: 2px solid var(--const-primary);
            color: var(--const-primary);
        }
    }

    &.secondary {
        background-color: var(--const-white);
        border: 2px solid var(--const-black);
        color: var(--const-black);

        &:hover {
            background-color: var(--const-black);
            border: 2px solid var(--const-white);
            color: var(--const-white);
        }
    }

    &.small {
        padding: 12px 30px;
        max-width: 320px;

        .text {
            font-size: 20px;
        }
    }

    &.medium {
        padding: 15px 40px;
        max-width: 400px;

        .text {
            font-size: 24px
        }
    }

    &.large {
        padding: 20px 40px;
        max-width: 450px;

        .text {
            font-size: 28px
        }
    }

    .text {
        text-align: center;
        color: inherit;
        font-weight: 700;
        letter-spacing: .5px;
    }
}
</style>
