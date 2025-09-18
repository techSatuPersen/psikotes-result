<template>
    <div class="mx-auto w-full max-w-7xl mt-[101px] mb-[60px] max-xl:max-w-[90%]">
        <div class="flex flex-col gap-[102px]">
            <EQViews />
            <div class="border-2 border-[#E1E1E1]"></div>
            <MBTIViews />
            <div class="border-2 border-[#E1E1E1]"></div>
            <CreativityViews />
            <div class="border-2 border-[#E1E1E1]"></div>
        </div>
    </div>
</template>

<script setup>
import CreativityViews from '~/views/CreativityViews.vue';
import EQViews from '~/views/EqViews.vue';
import MBTIViews from '~/views/MBTIViews.vue';
</script>