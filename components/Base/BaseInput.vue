<script setup lang="ts">
import type baseInputPropsModel from '../../types/prop-models/base/baseInputPropsModel';

const props = defineProps<baseInputPropsModel>();

console.log("props");
console.log(props);

</script>
<template>
    <div class="input-wrapper">
        <label :for="props.name" class="label">
            {{ props.label }}
        </label>
        <input :type="props.type" class="input" :name="props.name">
    </div>
</template>

<style scoped lang="scss">
.input-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 100%;
    position: relative;

    .label {
        position: absolute;
        bottom: 10px;
    }

    .input {
        border: 2px solid var(--const-green);
        color: var(--const-green);
        margin-top: 20px;
        height: 45px;
        border-radius: var(--default-border-radius);

        padding: 10px;

        &::placeholder {}
    }
}
</style>