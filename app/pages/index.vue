<template>
    <div class="mx-auto w-full max-w-7xl mt-[101px] mb-[60px]">
        <div class="flex flex-col gap-[55px]">
            <div class="flex flex-row gap-[109px]">
                <div class="flex flex-col gap-[23px] max-w-[436px]">
                    <p class="text-[#1D252D]">Bagian X.X:</p>
                    <h1 class="font-extrabold leading-[118%] text-[28px] text-[#1D252C]">Kecerdasan Emosional (EQ)</h1>
                    <img src="/images/1.png" alt="EQ"
                        class="w-[436px] h-[234px] object-center bg-cover rounded-[10px]" />
                </div>
                <div class="flex flex-col gap-[33px] max-w-[727px]">
                    <div class="flex flex-col gap-[23px]">
                        <p class="text-[#1D252D] text-[16px]">Skor Loremipsum Test:</p>
                        <h1 class="text-[#AF04FF] font-extrabold text-[24px] leading-[100%]">100 (Skor detail)</h1>
                        <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                            <div class="h-full rounded-full w-10/12 bg-gradient-to-l from-[#AF04FF] to-[#FF92AC]"
                                :style="{ width: progress + '%' }"></div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[26px] text-[#1D252D] text-[16px] leading-[150%]">
                        <p class="border-2 border-[#A9A5A5] px-[24px] py-[13px]">Loremipsum dolor sit amet dalam
                            kategori
                            <b>Tinggi</b>
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="flex flex-col">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const progress = 83;
</script>