<script setup lang="ts">
import type baseButtonPropsModel from '../../types/prop-models/base/baseButtonPropsModel';
import { baseButtonTypes } from '../../types/prop-models/enums/base-button-types';
import { controlSizes } from '../../types/prop-models/enums/control-sizes';
import { computed } from 'vue';

const styles = computed(() => {
    let classNames: string[] = [];
    if (props.buttonType != baseButtonTypes.other) {
        classNames.push(props.buttonType);
    }

    if (props.size) {
        classNames.push(props.size)
    }

    return classNames.join(" ");
})

const props = withDefaults(defineProps<baseButtonPropsModel>(), { isLoading: false, isDisable: false, size: controlSizes.small });
</script>
<template>
    <button class="button" :class="styles">
        <span class="text">
            {{ props.label }}
        </span>
    </button>
</template>
<style scoped lang="scss">
.button {
    font-family: var(--main-font);
    border-radius: var(--default-border-radius);
    border: 2px solid var(--const-black);
    width: max-content;
    height: max-content;
    word-break: break-word;
    transition: background-color 0.3s, border 0.3s, color 0.3s;

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