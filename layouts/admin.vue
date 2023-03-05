<template>
    <div class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <!--Nav-->
        <div id="header" class="w-full z-30 top-0 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-end mt-0 px-6 py-3 relative">
                <div class="header-name w-[max-content] order-1 md:order-2">
                    <a class="gradient-header justify-center gap-4 flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-lg md:text-[28px]"
                        href="/">
                            <div
                                class="text-lg relative z-50 font-bold tracking-widest text-gray-900 rounded-lg focus:outline-none focus:shadow-outline">krisngo</div>
                            <svg class="h-11 z-40 absolute -top-2 -left-3" viewBox="0 0 79 79" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M35.2574 2.24264C37.6005 -0.100501 41.3995 -0.100505 43.7426 2.24264L76.7574 35.2574C79.1005 37.6005 79.1005 41.3995 76.7574 43.7426L43.7426 76.7574C41.3995 79.1005 37.6005 79.1005 35.2574 76.7574L2.24264 43.7426C-0.100501 41.3995 -0.100505 37.6005 2.24264 35.2574L35.2574 2.24264Z"
                                    fill="#65DAFF" />
                            </svg>
                    </a>
                </div>

                <div class="flex order-2 md:order-3 items-center" id="nav-content">
                    <div class="pl-3 inline-block no-underline hover:text-black hover:cursor-pointer" @click="logout">
                        <svg class="fill-current hover:text-black icon" width="22" height="22" viewBox="0 0 1024 1024"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <nuxt />

    </div>
</template>

<script>
export default {
    name: 'default',
    data() {
        return {}
    },
    methods: {
        async logout() {
            await this.$fire.auth.signOut()
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss" scoped>
.header-name {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}</style>