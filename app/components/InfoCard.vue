<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div>
        <h1 class="bg-header-card font-extrabold text-[18px] leading-[100%] px-[17px] py-[26px] rounded-t-[10px]">
            {{ title }}
        </h1>
        <div v-html="description" class="px-[26px] py-[24px] rounded-b-[10px] bg-[#F7F8F8]"></div>
    </div>
</template>

<style scoped>
.bg-header-card {
    background: linear-gradient(161.12deg, #4C4C4C 1.38%, #111010 48.76%);
    color: white;
}

::v-deep(p),
::v-deep(ul),
::v-deep(ol),
::v-deep(li) {
    @apply text-[15px] leading-[204%] text-[#1D252D];
}

::v-deep(ul),
::v-deep(ol) {
    padding-left: 0;
}

::v-deep(li) {
    margin-left: 1.25rem;
    list-style-type: disc;
}
</style>