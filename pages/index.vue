<script setup lang='ts'>
import { baseButtonTypes } from '~/types/prop-models/enums/base-button-types';

definePageMeta({
    layout: 'homepage'
})
</script>

<template>
    <div>
        <BaseSearchInput placeholder="test" />
        <BaseInput label="test" type="text" />
        <BaseButton label="test" :button-type="baseButtonTypes.primary" />
    </div>
</template>