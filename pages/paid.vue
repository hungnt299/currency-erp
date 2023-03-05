<template>
    <div class="payment">
        <div
            class="sub-payment relative justify-center gap-4 sm:gap-[55px] flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md py-5 pl-6 pr-8 sm:pr-6">
            <div class="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                <div class="text-green-500">
                    <svg class="w-6 sm:w-5 h-6 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="text-sm font-bold ml-4">
                    <span>Đặt hàng thành công</span>
                    <span class="price-product text-base">{{ ` ${productName}` }}</span>
                </div>
            </div>
            <div class="gradient-header font-bold text-sm tracking-wide text-gray-500">Đơn hàng của bạn sẽ được giao trong
                vòng 3-5 ngày</div>
        </div>
        <nuxt-link
            class="gradient-header go-shopping justify-center gap-4 flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-[14px]"
            to="/">
            Tiếp tục mua hàng
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'PaymentSuccess',
    data() {
        return {
            productName: ''
        }
    },
    mounted() {
        this.productName = this.$route.query.name
    }
}
</script>

<style lang="scss" scoped>
.payment {
    height: calc(100vh - 265px);
    position: relative;

    .sub-payment {
        width: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .go-shopping {
        position: absolute;
        top: 20%;
        transform: translate(-50%, -50%);
        left: 50%;
    }
}
</style>