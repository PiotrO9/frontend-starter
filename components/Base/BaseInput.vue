<script setup lang="ts">
import type baseInputPropsModel from '../../types/prop-models/base/baseInputPropsModel';

const props = defineProps<baseInputPropsModel>();
</script>

<template>
    <div class="input-wrapper">
        <label :for="props.name" class="label">
            {{ props.label }}
        </label>
        <input :type="props.type" class="input" :name="props.name" :style="{ borderColor: props.borderColor }">
    </div>
</template>

<style scoped lang="scss">
.input-wrapper {
    max-width: 320px;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    .label {
        position: absolute;
        bottom: 13px;
        left: 15px;
        transition: transform 0.3s;
        background-color: var(--const-white);
        padding: 2px 5px;

        &:has(+ input:focus) {
            transform: translateY(-20px);
        }
    }

    .input {
        height: 45px;
        margin-top: 20px;
        padding: 10px;
        border: 2px solid var(--const-primary);
        border-radius: var(--default-border-radius);
    }
}
</style>
