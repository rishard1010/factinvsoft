<template>
  <v-main style="height: 100vh">
    <v-app class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col
          cols="12"
          xl="7"
          lg="7"
          class="align-center justify-center fill-height d-none d-lg-flex d-xl-flex informacion"
        >
          <v-img
            class="mb-4"
            :src="require('@/static/logo.svg')"
            contain
            :aspect-ratio="16 / 7"
          />
        </v-col>
        <v-col
          cols="12"
          xl="5"
          lg="5"
          class="pa-15 align-center justify-center inicioSesion fill-height"
        >
          <v-img
            class="mb-4"
            :src="require('@/static/logoazul.svg')"
            contain
            :aspect-ratio="16 / 6"
          />
          <v-text-field
            v-model="usuario"
            prepend-icon="fal fa-user"
            label="Usuario"
            outlined
            dark
            placeholder="Ingrese el usuario"
            required
          ></v-text-field>
          <v-text-field
            v-model="clave"
            prepend-icon="far fa-lock-alt"
            :append-icon="show1 ? 'fal fa-eye' : 'fal fa-eye-slash'"
            :type="show1 ? 'text' : 'password'"
            label="Contraseña"
            outlined
            dark
            placeholder="Ingrese la contraseña"
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-btn x-large color="primary" @click="iniciarSesion"
            ><v-icon left> far fa-sign-in </v-icon>Iniciar sesión</v-btn
          >
          <v-snackbar
            v-model="snackbar"
            color="error"
            top="true"
            right="true"
            elevation="24"
          >
            {{ respuestaLogin }}
            <template v-slot:action="{ attrs }">
              <v-btn
                color="primary"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >x</v-btn
              >
            </template>
          </v-snackbar>
        </v-col>
      </v-row>
    </v-app>
  </v-main>
</template>

<script>
export default {
  layout: 'session',

  data() {
    return {
      show1: false,
      password: 'Password',
      usuario: '',
      clave: '',
      snackbar: false,
      respuestaLogin: 'Usuario o contraseña invalida',
    }
  },
  methods: {
    async iniciarSesion() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { usuario: this.usuario, clave: this.clave },
        })
        if (!response.data.success) {
          this.snackbar = true
        }
      } catch (err) {
        this.snackbar = true
      }
    },
  },
}
</script>
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url('~static/login.svg') no-repeat center center;
  background-size: 100% 100%;
  background-position: center top;
}
.informacion {
  background-color: #0f184a !important;
}
.inicioSesion {
  text-align: center;
  background-color: #e23e11 !important;
}
</style>
