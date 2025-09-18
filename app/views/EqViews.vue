<template>
    <div class="flex flex-col gap-[55px]">
        <div class="flex flex-row gap-[109px] justify-between max-md:gap-[30px] max-sm:flex-col ">
            <div class="flex flex-col gap-[23px] max-w-[436px] max-lg:max-w-[50%] max-sm:max-w-full md:shrink-0">
                <p class="text-[#1D252D]">Bagian X.X:</p>
                <h1 class="font-extrabold leading-[118%] text-[28px] text-[#1D252C]">Kecerdasan Emosional (EQ)
                </h1>
                <img src="/images/1.png" alt="EQ"
                    class="w-[436px] h-[234px] object-center bg-cover rounded-[10px] max-sm:max-w-full" />
            </div>
            <div class="flex flex-col gap-[33px] max-w-[727px] max-lg:max-w-[50%] max-sm:max-w-full">
                <div class="flex flex-col gap-[23px]">
                    <p class="text-[#1D252D] text-[16px]">Skor Loremipsum Test:</p>
                    <h1 class="text-[#AF04FF] font-extrabold text-[24px] leading-[100%]">100 (Skor detail)</h1>
                    <div class="w-full bg-gray-200 rounded-[3px] h-4 overflow-hidden">
                        <div class="h-full rounded-full w-10/12 bg-gradient-to-l from-[#AF04FF] to-[#FF92AC]"
                            :style="{ width: progress + '%' }"></div>
                    </div>
                </div>
                <div class="flex flex-col gap-[26px] text-[#1D252D] text-[16px] leading-[150%]">
                    <p class="border-2 border-[#A9A5A5] rounded-[8px] px-[24px] py-[13px]">Loremipsum dolor sit
                        amet
                        dalam
                        kategori
                        <b>Tinggi</b>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <CardGrid :items="cardData" />
    </div>
</template>

<script setup>
const progress = 83;

const cardData = [
    {
        title: 'Loremipsum Dolor Sit Amet 1',
        description: '<p>Deskripsi untuk kartu pertama. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>'
    },
    {
        title: 'Loremipsum Dolor Sit Amet 2',
        description: '<p>Deskripsi untuk kartu kedua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
    },
    {
        title: 'Loremipsum Dolor Sit Amet 3',
        description: '<p>Deskripsi untuk kartu ketiga yang akan memanjang jika jumlahnya ganjil. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>'
    }
]
</script>