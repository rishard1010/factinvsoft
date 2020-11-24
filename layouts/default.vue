<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :src="require('@/static/fondolat.svg')"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          class="white--text"
          :to="item.to"
          dense
        >
          <v-list-item-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list slot="append" dense>
        <v-divider></v-divider>
        <v-list-item dense @click="$auth.logout()">
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
          class="mr-2"
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
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: { Snackbar },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'fas fa-home',
          title: 'Inicio',
          to: '/',
        },
        {
          icon: 'fas fa-user',
          title: 'Clientes',
          to: '/clientes/clientes',
        },
        {
          icon: 'fas fa-toolbox',
          title: 'Inventario',
          to: '/inventario/inventario',
        },
        {
          icon: 'fas fa-shopping-bag',
          title: 'Ventas',
          to: '/ventas/ventas',
        },
        {
          icon: 'fas fa-chart-pie',
          title: 'Facturación',
          to: '/facturacion/facturacion',
        },
        {
          icon: 'fas fa-user-unlock',
          title: 'Usuarios',
          to: '/usuarios/usuarios',
        },
      ],
      miniVariant: false,
      title: 'Sistema facturación e inventarios',
    }
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
</style>
