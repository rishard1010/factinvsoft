export default function ({ store, redirect, route }) {
  if (route.path === '/' && !store.state.auth.loggedIn) {
    return redirect('/login')
  } else if (!store.getters.getPermisos.includes(route.path)) {
    return redirect('/nofound')
  }
}
