<template>
    <div class="admin-center">
      <p class="text-center font-bold text-lg text-[#5f9ea0]">Vui lòng đăng nhập để thực hiện quyền quản lý !</p>
      <div class="mt-2 flex justify-center gap-4">
        <nuxt-link
          class="bg-[#5f9ea0] px-2 hover:bg-[#5f9ea082] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          to="/">
          Tiếp tục mua sắm
        </nuxt-link>
        <nuxt-link
          class="bg-[#5f9ea0] px-2 hover:bg-[#5f9ea082] text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
          to="login">
          Đăng nhập
        </nuxt-link>
      </div>
    </div>
</template>

<style lang="scss">
.admin-center {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>