export default function ({ $axios, $toast, store, redirect }) {
  $axios.onResponse((response) => {
    return response
  })

  $axios.onError((error) => {
    const code = error.response?.status
    if (code === 401) {
      return redirect('/login')
    }

    $toast.error(error.response?.data?.message)

    if (error.response?.data?.error?.fields) {
      store.commit('form/VALIDATION_ERRORS', error.response?.data?.error?.fields)
    }
  })
}
