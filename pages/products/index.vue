<template>
    <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-4 md:py-8 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="Ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                    :src="product.image">
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 class="gradient-header text-sm title-font text-gray-500 tracking-widest">APPLE</h2>
                    <h1 class="gradient-header text-gray-900 text-3xl title-font font-medium mb-1">{{ product.name }}
                    </h1>
                    <div class="flex mb-4">
                        <span class="flex items-center">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z">
                                </path>
                            </svg>
                            <span class="text-gray-600 ml-3"
                                v-html="`${product?.name?.length ? product?.name?.length : 7} đánh giá`"></span>
                        </span>
                        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                    </path>
                                </svg>
                            </a>
                            <a class="ml-2 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    class="w-5 h-5" viewBox="0 0 24 24">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                    </path>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <p class="gradient-header leading-relaxed">{{ product.pin }}</p>
                    <p class="gradient-header leading-relaxed">{{ product.status }}</p>
                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                        <div class="flex">
                            <span class="gradient-header mr-3">Màu sắc</span>
                            <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                            <button
                                class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        </div>
                    </div>
                    <div class="flex">
                        <span class="gradient-header title-font font-medium text-2xl text-gray-900">{{ product.price
}}₫</span>
                            <button type="button" @click="handlePayment" class="flex ml-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Thanh toán</button>
                        <button @click="$router.push('/')"
                            class="rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center ml-4">
                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z"
                                    fill-rule="nonzero" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- drawer container -->
        <div class="p-4">
            <div class="fixed z-50 left-0 top-0 overflow-hidden" :class="drawer ? 'h-full w-full' : ''">
                <div class="fixed left-0 top-0 bg-black bg-opacity-50 z-[-1]" :class="drawer ? 'h-full w-full' : ''">
                </div>
                <div class="drawer-card transition-card fixed h-full w-[375px] right-0 top-0 bg-white shadow-lg p-4"
                    :class="drawer ? 'active' : 'inactive'">
                    <form @submit.prevent="onSubmit">
                        <div class="mb-4">
                            <label class="gradient-header block text-gray-700 text-sm font-bold mb-2" for="name">
                                Họ và tên
                            </label>
                            <input v-model="info.customerName"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label class="gradient-header block text-gray-700 text-sm font-bold mb-2" for="status">
                                Số điện thoại
                            </label>
                            <input v-model="info.phoneNumber"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label class="gradient-header block text-gray-700 text-sm font-bold mb-2" for="pin">
                                Địa chỉ
                            </label>
                            <input v-model="info.address"
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        </div>
                        <div class="mb-4">
                            <label class="gradient-header block text-gray-700 text-sm font-bold mb-2" for="price">
                                Phương thức thanh toán
                            </label>
                            <p class="gradient-header text-[13px]">Thanh toán khi nhận hàng</p>
                        </div>
                        <div class="flex items-center justify-end gap-4">
                            <button type="button" @click="handleClose" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hủy</button>
                            <button type="submit" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hoàn Thành</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- end drawer container -->
        <loading ref="loading" />
    </section>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import Loading from "../../components/common/loading.vue";

export default {
    name: "Detail",
    components: {
        Loading
    },
    data() {
        return {
            drawer: false,
            product: {},
            info: {
                customerName: '',
                phoneNumber: '',
                address: ''
            }
        }
    },
    mounted() {
        this.getById()
    },
    methods: {
        handlePayment() {
            this.drawer = true
        },
        handleClose() {
            this.drawer = false
        },
        async getById() {
            this.$refs.loading.start()
            await this.$fire.firestore.collection('products').get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        if (doc.id === this.$route.query.id) {
                            this.product = doc.data()
                        }
                    });
                })
                .finally(() => {
                    this.$refs.loading.finish()
                })
                .catch((e) => {
                    console.log(e);
                    this.toast.error('Lỗi ! Vui lòng liên hệ admin !')
                });
        },
        async onSubmit() {
            if (!this.info.customerName || !this.info.phoneNumber || !this.info.address) {
                this.$toast.warning('Vui lòng nhập đầy đủ thông tin!')
            } else {
                await this.$fire.firestore
                    .collection("customers")
                    .add({
                        id: uuidv4(),
                        customerName: this.info.customerName,
                        phoneNumber: this.info.phoneNumber,
                        address: this.info.address,
                        productInfo: this.product
                    })
                this.$router.push({ path: '/paid', query: { name: this.product.name } })
            }
        }
    }
}
</script>

<style lang="scss">
.transition-card {
    transition: right .5s cubic-bezier(0.820, 0.085, 0.395, 0.895);
}

.inactive {
    right: -550px;
}
</style>