<template>
    <div class="flex flex-col gap-[55px]">
        <div class="flex flex-row gap-[109px] justify-between max-md:gap-[30px] max-sm:flex-col ">
            <div
                class="flex flex-col gap-[23px] max-w-[436px] max-lg:max-w-[50%] max-sm:max-w-full md:shrink-0 order-2">
                <img src="/images/3.png" alt="EQ"
                    class="w-full max-h-[253px] h-full object-center bg-cover rounded-[10px] max-sm:max-w-full" />
            </div>
            <div class="flex flex-col gap-[33px] max-w-[727px] max-lg:max-w-[50%] max-sm:max-w-full order-1">
                <div class="flex flex-col gap-[23px]">
                    <p class="text-[#1D252D]">Bagian X.X:</p>
                    <h1 class="leading-[118%] text-[28px] text-[#1D252C]"><span class="font-extrabold">MBTI</span>
                        (Myers-Briggs Type
                        Indicator)
                    </h1>
                </div>
                <div class="flex flex-col gap-[12px] px-[26px] py-[24px] bg-[#F7F8F8] rounded-[10px]">
                    <h2 class="text-[#1D252C] leading-[100%] font-extrabold text-[18px]">Deskripsi Umum</h2>
                    <p class="text-[#1D252D] text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                        vel explicabo voluptate totam suscipit soluta modi earum maxime quod labore voluptates tenetur
                        natus, eaque dolorem quisquam, repudiandae deleniti rem quia?</p>
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
        title: '1. Loremipsum Dolor Sit Amet 1',
        description: '<ul><li><b>Portofolio Proyek:</b> Buat portofolio yang menampilkan proyek-proyek praktis yang telah kamu kerjakan. Sertakan foto, deskripsi, dan hasil konkret dari proyek tersebut.</li><li><b>Blog atau Vlog Teknikal:</b> Pertimbangkan untuk membuat blog atau vlog yang berfokus pada keterampilan teknis dan proyek DIY (Do It Yourself). Ini dapat menunjukkan kemampuanmu dalam memecahkan masalah praktis.</li></ul>'
    },
    {
        title: 'Loremipsum Dolor Sit Amet 2',
        description: '<ul><li>Deskripsi untuk kartu kedua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li></ul>'
    },
    {
        title: 'Loremipsum Dolor Sit Amet 3',
        description: '<ul><li>Deskripsi untuk kartu ketiga yang akan memanjang jika jumlahnya ganjil. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li></ul>'
    }
]
</script>