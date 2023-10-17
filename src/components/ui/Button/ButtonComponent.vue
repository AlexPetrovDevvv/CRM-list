<template>
    <button class="button">
        {{ text }}
    </button>
</template>

<script setup lang="ts">

//@ts-ignore
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
    preloader: {
        type: Boolean,
        default: false
    }
 })



</script>

<style scoped>

    .button {
        display: block;
        padding: 10px 20px;
        font-size: 16px;
        color: #000;
        background-color: #fff;
        border: 1px solid #000;
        border-radius: 3px;
        transition: .3s ease-in-out;
        transition-property: background-color, border, color;
    }
    .button:hover {
        background-color: #4C8BF7;
        border: 1px solid #4077D6;
        color: #fff;
    }

</style>