<template>
  <div class="py-6 px-6">
    <div v-if="isLoggedIn" class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <div class="pb-1 flex align-center justify-between bg-white">
        <div
          class="relative flex items-center w-[375px] h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input class="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" v-model="searchTerm"
            id="search" placeholder="Tìm kiếm..." />
        </div>
        <div class="my-auto">
          <button type="button" @click="handleCreate" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Tạo mới</button>
          <button type="button" @click="handleDetail" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Khách đặt hàng</button>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="gradient-header py-3 px-6">
              Tên sản phẩm
            </th>
            <th scope="col" class="gradient-header py-3 px-6">
              Hình ảnh
            </th>
            <th scope="col" class="gradient-header py-3 px-6">
              Trạng thái
            </th>
            <th scope="col" class="gradient-header py-3 px-6">
              Pin
            </th>
            <th scope="col" class="gradient-header py-3 px-6">
              Giá
            </th>
            <th scope="col" class="gradient-header py-3 px-6">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, idx) in filteredProducts" :key="idx" class="bg-white border-b hover:bg-gray-50">
            <th scope="row" class="gradient-header py-4 px-6 font-bold whitespace-nowrap">
              {{ product.name }}
            </th>
            <td class="py-4 px-6">
              <img class="w-[80px] h-[100px]" :src="product.image" alt="img" />
            </td>
            <td class="gradient-header font-bold py-4 px-6">
              {{ product.status }}
            </td>
            <td class="gradient-header font-bold py-4 px-6">
              {{ product.pin }}
            </td>
            <td class="gradient-header font-bold py-4 px-6">
              {{ product.price }}₫
            </td>
            <td class="py-4 px-6">
              <button type="button" @click="handleEdit(product)" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sửa</button>
              <button type="button" @click="handleDelete(product)" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <unAuthorize v-if="!isLoggedIn" />

    <div v-if="drawer && isLoggedIn" class="p-4">
      <!-- drawer container -->
      <div class="fixed h-full w-full z-50 left-0 top-0">
        <div class="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
        <div class="drawer-card fixed h-full w-[375px] right-0 top-0 bg-white shadow-lg p-4">
          <form @submit.prevent="onSubmit">
            <div class="flex items-center justify-end gap-4">
            <button type="button" @click="handleClose" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Hủy</button>
              <button type="submit" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{ productItem.id ? 'Sửa' : 'Tạo' }}</button>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Tên sản phẩm
              </label>
              <input v-model="productItem.name"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
                Trạng thái
              </label>
              <input v-model="productItem.status"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="pin">
                Pin
              </label>
              <input v-model="productItem.pin"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
                Giá
              </label>
              <input v-model="productItem.price"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="image">
                Hình ảnh
              </label>
              <form enctype="multipart/form-data" novalidate>
                <div class="dropbox">
                  <input type="file" multiple @change="onFileChange" accept="image/jpg, image/jpeg, image/png"
                    class="input-file">
                  <p>
                    Kéo (các) tệp vào đây <br> hoặc nhấp để tải lên
                  </p>
                </div>
                <span>{{ uploading ? 'Tệp đang được tải lên, vui lòng chờ' : '' }}</span>
              </form>
            </div>
            <div v-if="productItem.image">
              <img :src="productItem.image" alt="img" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- end drawer container -->

    <!-- drawer container -->
    <div v-if="drawerDetail && isLoggedIn" class="p-4">
      <div class="fixed h-full w-full z-50 left-0 top-0">
        <div class="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-[-1]"></div>
        <div class="drawer-card fixed h-full w-full right-0 top-0 bg-white shadow-lg p-4">
          <div class="flex items-center justify-end mb-4">
            <button type="button" @click="handleCloseDetail" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Đóng</button>
          </div>
          <table v-if="paidInfos.length > 0" class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="gradient-header py-3 px-6">
                  Tên khách hàng
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Số điện thoại
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Địa chỉ
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Tên sản phẩm
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Giá
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Hình ảnh
                </th>
                <th scope="col" class="gradient-header py-3 px-6">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(info, idx) in paidInfos" :key="idx" class="bg-white border-b hover:bg-gray-50">
                <th scope="row" class="gradient-header py-4 px-6 font-bold whitespace-nowrap">
                  {{ info.customerName }}
                </th>
                <td class="gradient-header font-bold py-4 px-6">
                  {{ info.phoneNumber }}
                </td>
                <td class="gradient-header font-bold py-4 px-6">
                  {{ info.address }}
                </td>
                <td class="gradient-header font-bold py-4 px-6">
                  {{ info.productInfo.name }}
                </td>
                <td class="gradient-header font-bold py-4 px-6">
                  {{ info.productInfo.price }}
                </td>
                <td class="py-4 px-6">
                  <img class="w-[80px] h-[100px]" :src="info.productInfo.image" alt="img" />
                </td>
                <td class="py-4 px-6">
                  <button type="button" @click="handleApprove(info)" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Duyệt</button>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-else>
            <div class="gradient-header font-bold buy-not-found">
              <p>Chưa có khách đặt hàng...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end drawer container -->
    <loading ref="loading" />
  </div>
</template>

<script>
import unAuthorize from ".././components/admin/unAuthorize.vue";
import Loading from ".././components/common/loading.vue";
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "Admin",
  components: {
    unAuthorize,
    Loading
  },
  layout: 'admin',
  data() {
    return {
      drawer: false,
      drawerDetail: false,
      uploading: false,
      productItem: {
        id: null,
        name: '',
        status: '',
        pin: '',
        price: '',
        image: ''
      },
      products: [],
      searchTerm: '',
      paidInfos: [],
      filteredProducts: []
    }
  },
  watch: {
    drawer(val) {
      if (!val) {
        Object.assign(this.productItem, {
          id: null,
          image: '',
          name: '',
          status: '',
          pin: '',
          price: ''
        })
      }
    },
    searchTerm(val) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(val.toLowerCase())
      )
    }
  },
  mounted() {
    this.getProducts()
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },
  methods: {
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

    async handleDetail() {
      this.$refs.loading.start()
      await this.$fire.firestore.collection('customers').get()
        .then((snap) => {
          this.paidInfos = []
          snap.forEach(doc => {
            const info = doc.data();
            info.id = doc.id;
            this.paidInfos.push(info);
          })
        })
        .finally(() => {
          this.drawerDetail = true
          this.$refs.loading.finish()
        })
        .catch((e) => {
          console.log(e);
          this.toast.error('Lỗi ! Vui lòng liên hệ admin !')
        });
    },

    handleCloseDetail() {
      this.drawerDetail = false
    },

    handleCreate() {
      this.drawer = true
    },

    handleEdit(item) {
      this.productItem = Object.assign({}, item)
      this.drawer = true
    },

    async handleDelete(item) {
      if (confirm("Bạn có chắc chắn muốn xóa!") == true) {
        this.$refs.loading.start()
        const storage = this.$fire.storage
        const imageRef = storage.refFromURL(item.image)
        await this.$fire.firestore
          .collection("products")
          .doc(item.id)
          .delete()
          .then(() => {
            imageRef.delete()
            this.getProducts()
          })
          .finally(() => {
            this.$toast.success('Xóa thành công !')
            this.$refs.loading.finish()
          })
      } else {
        this.drawer = false
      }
    },

    async handleApprove(item) {
      if (confirm("Bạn đã giao đơn hàng này?") == true) {
        this.$refs.loading.start()
        await this.$fire.firestore
          .collection("customers")
          .doc(item.id)
          .delete()
          .then(() => {
            this.handleDetail()
            this.$toast.success('Duyệt thành công !')
          })
          .catch(() => {
            this.$toast.error('Duyệt thất bại !')
          })
          .finally(() => {
            this.$refs.loading.finish()
          })
      } else {
        this.drawer = false
      }
    },

    handleClose() {
      // const storage = this.$fire.storage
      // if (this.productItem.image) {
      //   const imageClear = storage.refFromURL(this.productItem.image)
      //   imageClear.delete()
      // }
      this.drawer = false
    },

    async onSubmit() {
      if (!this.productItem.image || !this.productItem.name || !this.productItem.price) {
        this.$toast.error('Vui lòng điền đầy đủ các trường (Tên, Giá, Ảnh) !')
      } else {
        this.$refs.loading.start()
        if (this.productItem.id) {
          await this.$fire.firestore
            .collection("products")
            .doc(this.productItem.id)
            .update({
              name: this.productItem.name,
              status: this.productItem.status,
              pin: this.productItem.pin,
              price: this.productItem.price,
              image: this.productItem.image
            })
            .then(() => {
              this.$toast.success('Cập nhật thành công !')
            })
        } else {
          await this.$fire.firestore
            .collection("products")
            .add({
              id: uuidv4(),
              name: this.productItem.name,
              status: this.productItem.status,
              pin: this.productItem.pin,
              price: this.productItem.price,
              image: this.productItem.image
            })
            .then(() => {
              this.$toast.success('Thêm mới thành công !')
            })
        }
        await this.getProducts().finally(() => {
          this.drawer = false
          this.$refs.loading.finish()
        })
      }
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },

    createImage(file) {
      this.$refs.loading.start()

      this.uploading = true
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);

      const metadata = {
        contentType: file.type
      }

      const storage = this.$fire.storage
      if (this.productItem.image) {
        const imageClear = storage.refFromURL(this.productItem.image)
        imageClear.delete()
      }
      const imageRef = storage.ref(`images/${uuidv4()}${file.name}`)

      const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
        return snapshot.ref.getDownloadURL().then((url) => {
          return url
        })
      }).catch((error) => {
        console.error('Error uploading image', error)
        this.uploading = false
        this.$refs.loading.finish()
        this.$toast.error('Lỗi upload, thử lại !')
      })

      uploadTask.then((url) => {
        this.productItem.image = url
        this.uploading = false
      }).finally(() => {
        this.$refs.loading.finish()
      })
    }
  }
}
</script>

<style lang="scss">
.dropbox {
  outline: 2px dashed grey;
  /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 50px;
  /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0;
  /* invisible but it's there! */
  width: 100%;
  height: 50px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue;
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 5px 0;
}

.drawer-card {
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #916d6d;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #916d6d;
  }
}

.buy-not-found {
  position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
}
</style>
