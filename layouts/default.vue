<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :src="require('@/static/fondolat.svg')"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense>
        <app-menu-item
          v-for="item in $store.getters.getMenu"
          :key="item.OPCION"
          :item="item"
        />
      </v-list>
      <v-list slot="append" dense>
        <v-divider></v-divider>
        <v-list-item dense @click="cerrarSesion">
          <v-list-item-action
            ><v-icon color="white" left
              >fas fa-sign-out</v-icon
            ></v-list-item-action
          >
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Cerrar sesión
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="bordernav"
      dark
      :src="require('@/static/fondo.svg')"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon to="/">
        <v-img
          contain
          :src="require('@/static/logobanner.svg')"
          max-width="48"
          class="mr-2 seleccion"
        />
      </v-btn>
      <v-toolbar-title class="pl-2" v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="">
        <v-icon>fas fa-user-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import AppMenuItem from '@/components/app/AppMenuItem'
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: { Snackbar, AppMenuItem },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      title: 'Sistema facturación e inventarios',
    }
  },
  methods: {
    cerrarSesion() {
      this.$store.dispatch('alterarPermisos', ['/login', '/', '/nofound'])
      this.$auth.logout()
    },
  },
}
</script>
<style scoped>
.margenlogo {
  margin-top: 74px;
}
.bordernav {
  border-radius: 0px 20px 0px 20px !important;
}
.seleccion:hover {
  cursor: pointer;
}
</style>
