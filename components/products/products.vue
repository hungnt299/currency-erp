<template>
    <div>
        <div class="bg-white py-8">
            <div class="container mx-auto flex items-center flex-wrap">
                <nav class="w-full z-30 top-0 px-6 py-1">
                    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">

                        <a class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                            href="#">
                            Currency Store
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

                <div class="bg-white" v-show="filteredProducts.length > 0">
                    <div class="mx-auto py-4 px-4 sm:px-6 lg:px-8">
                        <div
                            class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            <div v-for="(product, idx) in filteredProducts" :key="idx">
                                <div
                                    class="product-info hover:scale-105 transition-transform aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                    <img :src="product.image" alt="Currency product"
                                        class="h-full w-full object-cover object-center">
                                </div>
                                <h3 class="name-product mt-4 text-center text-lg text-gray-700 font-bold">{{
                                    product.name
                                }}</h3>
                                <h3 class="status-product mt-2 text-center text-sm text-gray-700">{{ product.status }}
                                </h3>
                                <div class="flex align-center relative justify-center">
                                    <p class="price-product mt-1 text-lg font-bold text-gray-900">{{ product.price }}₫
                                    </p>
                                    <button class="add-cart-btn px-2 inline-flex items-center relative group cursor-pointer">
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
    </div>
</template>

<script>

export default {
    name: 'Products',
    data() {
        return {
            products: [
				{
					name: "Tiền 2 USD Số đẹp",
					image: require('@/assets/images/products/image-1.jpg'),
					status: 'New',
					price: '332.000'
				},
				{
					name: "Tiền hình mèo số đẹp",
					image: require('@/assets/images/products/image-2.jpg'),
					status: 'New',
					price: '776.000'
				},
				{
					name: "Tiền hình mèo mạ vàng",
					image: require('@/assets/images/products/image-3.jpg'),
					status: 'New',
					price: '435.000'
				},
				{
					name: "Tiền hình phật ASF",
					image: require('@/assets/images/products/image-4.jpg'),
					status: 'New',
					price: '940.000'
				},
				{
					name: "Tiền hình phật Campuchia",
					image: require('@/assets/images/products/image-5.jpg'),
					status: 'New',
					price: '220.000'
				},
				{
					name: "Tiền 2 USD Số đẹp",
					image: require('@/assets/images/products/image-6.jpg'),
					status: 'New',
					price: '180.000'
				},
				{
					name: "Tiền 2 USD Số đẹp",
					image: require('@/assets/images/products/image-1.jpg'),
					status: 'New',
					price: '133.000'
				},
				{
					name: "Tiền hình mèo số đẹp",
					image: require('@/assets/images/products/image-2.jpg'),
					status: 'New',
					price: '110.000'
				}
			],
            searchTerm: '',
            filteredProducts: []
        }
    },
    watch: {
        searchTerm(val) {
            this.filteredProducts = this.products.filter(product =>
                product.name.toLowerCase().includes(val.toLowerCase())
            )
        }
    },
	mounted() {
		this.filteredProducts = this.products
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

.status-product {
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(-225deg, #231557 0%, #241434 29%, #894a5f 67%, #fff800 100%);
    -webkit-background-clip: text;
    text-decoration-line: none;
}
</style>
