export const state = () => ({
  permisos: ['/login', '/', '/nofound'],
  menu: [],
})

export const mutations = {
  alterarPermisos(state, permisos) {
    state.permisos = permisos
  },
  asignarMenu(state, menu) {
    state.menu = menu
  },
}

export const actions = {
  cargarPermisos({ commit, getters }, permisos) {
    const permisosPorDefecto = getters.getPermisos
    commit('alterarPermisos', permisosPorDefecto.concat(permisos))
  },

  alterarPermisos({ commit }, permisos) {
    commit('alterarPermisos', permisos)
  },

  async cargarMenu({ commit, dispatch }) {
    const opciones = await this.$axios.$get('/api/auth/menu')
    const permisos = opciones.map((m) => m.RUTA)
    dispatch('cargarPermisos', permisos)
    const menu = []
    ;[...opciones].forEach((row) => {
      let modulo = menu.find((m) => m.MENU === row.MENU)

      if (!modulo) {
        modulo = {
          ICONO: row.ICONOMENU,
          MENU: row.MENU,
          DESCRIPCION: row.DESCRIPCIONMENU,
          items: [],
        }
        menu.push(modulo)
      }
      if (row.SUBMENU) {
        let submodulo = modulo.items.find((s) => s.MENU === row.SUBMENU)
        if (!submodulo) {
          submodulo = {
            MENU: row.SUBMENU,
            DESCRIPCION: row.DESCRIPCIONSUBMENU,
            items: [],
          }
          modulo.items.push(submodulo)
        }
        submodulo.items.push(row)
      } else {
        modulo.items.push(row)
      }
    })
    commit('asignarMenu', [...menu])
  },
}
export const getters = {
  getPermisos: (state) => {
    return state.permisos
  },
  getMenu: (state) => {
    return state.menu
  },
}
