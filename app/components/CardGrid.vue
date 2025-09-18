<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<template>
    <div class="grid grid-cols-2 gap-[36px] max-md:grid-cols-1">
        <div class="flex flex-col max-w-[618px] last:odd:col-span-2 last:odd:max-w-none max-lp"
            v-for="(item, index) in items" :key="index">
            <InfoCard :title="item.title" :description="item.description">
            </InfoCard>
        </div>
    </div>
</template>

<style scoped>
@media screen and (max-width: 650px) {
    .max-lp {
        grid-column: auto;
        max-width: 100%;
    }
}
</style>