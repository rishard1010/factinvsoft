<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      color="#0F184A"
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
          router
          exact
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: { Snackbar },
  data() {
    return {
      nombreUsuario: this.$auth.user[0].NOMBREUSUARIO,
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
          to: '/clientes',
        },
        {
          icon: 'fas fa-toolbox',
          title: 'Inventario',
          to: '/productos',
        },
        {
          icon: 'fas fa-shopping-bag',
          title: 'Ventas',
          to: '/ventas',
        },
        {
          icon: 'fas fa-chart-pie',
          title: 'Facturación',
          to: '/facturacion',
        },
        {
          icon: 'fas fa-user-unlock',
          title: 'Usuarios',
          to: '/usuarios',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
