<template>
    <div class="mx-auto w-full max-w-7xl mt-[101px] mb-[60px] max-xl:max-w-[90%]">
        <div class="flex flex-col gap-[102px]">
            <section id="fondasi-kepribadian">
                <EQViews />
            </section>
            <div class="border-2 border-[#E1E1E1]"></div>
            
            <section id="mozaik-kepribadian">
                <MBTIViews />
            </section>
            <div class="border-2 border-[#E1E1E1]"></div>
            
            <section id="lorem-ipsum">
                <CreativityViews />
            </section>
            <div class="border-2 border-[#E1E1E1]"></div>
            
            <section id="adipiscing-connector">
                <!-- Placeholder for Adipiscing Connector section -->
                <h2 class="text-2xl font-bold mb-4">Adipiscing Connector</h2>
                <p>Content for Adipiscing Connector section will go here.</p>
            </section>
            <div class="border-2 border-[#E1E1E1]"></div>
            
            <section id="pengujian-pengenalan">
                <!-- Placeholder for Pengujian Pengenalan section -->
                <h2 class="text-2xl font-bold mb-4">Pengujian Pengenalan Penemuan Diri: Sebuah Awal yang Baru</h2>
                <p>Content for Pengujian Pengenalan section will go here.</p>
            </section>
        </div>
    </div>
</template>

<script setup>
import CreativityViews from '~/views/CreativityViews.vue';
import EQViews from '~/views/EqViews.vue';
import MBTIViews from '~/views/MBTIViews.vue';
</script>