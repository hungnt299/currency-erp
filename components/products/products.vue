<template>
    <div>
        <div class="carousel relative container mx-auto" style="max-width:1600px;">
            <div class="carousel-inner relative overflow-hidden w-full">
                <!--Slide 1-->
                <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
                    checked="checked">
                <div class="carousel-item absolute opacity-0" style="height:50vh;">
                    <div class="block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/dinhlucapple.appspot.com/o/banners%2F2.webp?alt=media&token=972d5852-4360-414c-b003-286e1240bfa7');">
                    </div>
                </div>
                <label for="carousel-3"
                    class="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-2"
                    class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                <!--Slide 2-->
                <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0 bg-cover bg-right" style="height:50vh;">
                    <div class="bg-banner block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right"
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/dinhlucapple.appspot.com/o/banners%2F3.webp?alt=media&token=6c3a3258-d71b-4f0c-8228-d6ca27864ba2');">
                    </div>
                </div>
                <label for="carousel-1"
                    class="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-3"
                    class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>

                <!--Slide 3-->
                <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
                <div class="carousel-item absolute opacity-0" style="height:50vh;">
                    <div class="bg-banner block h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
                        style="background-image: url('https://firebasestorage.googleapis.com/v0/b/dinhlucapple.appspot.com/o/banners%2F4.jpg?alt=media&token=ad8b1275-b390-4f41-b0ea-d50b12cf7c46');">
                    </div>
                </div>
                <label for="carousel-2"
                    class="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label for="carousel-1"
                    class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            </div>
        </div>

        <div class="bg-white py-8">
            <div class="container mx-auto flex items-center flex-wrap">

                <nav class="w-full z-30 top-0 px-6 py-1">
                    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                            href="#">
                            Store
                        </a>
                        <div
                            class="relative flex items-center w-[375px] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                            <div class="grid place-items-center h-full w-12 text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text"
                                v-model="searchTerm" id="search" placeholder="Tìm kiếm..." />
                        </div>
                    </div>
                </nav>

                <div class="bg-white"  v-show="filteredProducts.length > 0">
                    <div class="mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <div
                            class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <div v-for="(product, idx) in filteredProducts" :key="idx">
                                <div @click="viewDetail(product)"
                                    class="product-info hover:scale-105 transition-transform aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img :src="product.image" alt="Apple product"
                                        class="h-full w-full object-cover object-center">
                                </div>
                                <h3 class="name-product mt-4 text-center text-lg text-gray-700 font-bold">{{
                                    product.name
                                }}</h3>
                                <h3 class="status-product mt-2 text-center text-sm text-gray-700">{{ product.status }}
                                </h3>
                                <h3 class="pin-product mt-2 text-center text-sm text-gray-700">{{ product.pin }}</h3>
                                <div class="flex align-center relative justify-center">
                                    <p class="price-product mt-1 text-lg font-bold text-gray-900">{{ product.price }}₫
                                    </p>
                                    <button class="add-cart-btn px-2 inline-flex items-center relative group cursor-pointer"
                                        @click="viewDetail(product)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                d="M24 7v2h-.642c-.534 0-1.022.305-1.257.786l-4.101 10.214h-12l-4.102-10.216c-.234-.48-.72-.784-1.255-.784h-.643v-2h3l4.352 11h9.297l4.351-11h3zm-9-1h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm0 5h-6v2h6v-2zm0 3h-6v2h6v-2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loading ref="loading" />
    </div>
</template>

<script>
import Loading from "../../components/common/loading.vue";

export default {
    name: 'Products',
    components: {
        Loading
    },
    data() {
        return {
            products: [],
            searchTerm: '',
            filteredProducts: []
        }
    },
    mounted() {
        this.getProducts()
    },
    watch: {
        searchTerm(val) {
            this.filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(val.toLowerCase())
            )
        }
    },
    methods: {
        viewDetail(item) {
            this.$router.push({ path: '/products', query: { id: item.id } })
        },
        async getProducts() {
            this.$refs.loading.start()
            await this.$fire.firestore.collection('products').get()
                .then((snap) => {
                    this.products = []
                    snap.forEach(doc => {
                        const product = doc.data();
                        product.id = doc.id;
                        this.products.push(product);
                    })
                })
                .finally(() => {
                    this.filteredProducts = this.products
                    this.$refs.loading.finish()
                })
                .catch((e) => {
                    console.log(e);
                    this.toast.error('Lỗi ! Vui lòng liên hệ admin !')
                });
        },
    }
}
</script>

<style lang="scss">
.hover\:grow {
    transition: all 0.3s;
    transform: scale(1);
}

.hover\:grow:hover {
    transform: scale(1.02);
}

.product-info {
    &:hover {
        opacity: 1;
        -webkit-animation: flash 1.5s;
        animation: flash 1.5s;
        cursor: pointer;
    }

    @-webkit-keyframes flash {
        0% {
            opacity: .4;
        }

        100% {
            opacity: 1;
        }
    }

    @keyframes flash {
        0% {
            opacity: .4;
        }

        100% {
            opacity: 1;
        }
    }
}

.add-cart-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transition: transform 250ms;
    transform: translateY(-50%);

    &:hover {
        transform: translateY(-10px);
    }
}

.name-product {
    text-transform: uppercase;
    background-image: linear-gradient(321deg, #a594e5 0%, #44107a 29%, #ff1361 67%, #bfba31 100%);
    background-size: 200% auto;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
}

.price-product {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%);
    background-size: 200% auto;
    color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;

    @keyframes textclip {
        to {
            background-position: 200% center;
        }
    }
}

.status-product,
.pin-product {
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(-225deg, #231557 0%, #241434 29%, #894a5f 67%, #fff800 100%);
    -webkit-background-clip: text;
    text-decoration-line: none;
}

.data-not-found {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    p {
        color: transparent;
        font-weight: bold;
        background-image: linear-gradient(to right, #40230b, #eb4e49);
        -webkit-background-clip: text;
        text-decoration-line: none;
    }
}

.bg-banner {
    background-position: center;
    background-size: contain;
    background-repeat: repeat;
}
</style>
