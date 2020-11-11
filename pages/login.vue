<template>
  <div class="bg">
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4" md="4" xs="12">
        <v-card elevation="5">
          <v-card-text class="pb-0">
            <v-row justify="center">
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="usuario"
                  label="Usuario"
                  outlined
                  placeholder="Ingrese el usuario"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="clave"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="Contraseña"
                  outlined
                  placeholder="Ingrese la contraseña"
                  required
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="space-around">
              <v-btn depressed color="primary" @click="iniciarSesion"
                >Iniciar sesión</v-btn
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
                  <v-btn text v-bind="attrs" @click="snackbar = false">x</v-btn>
                </template>
              </v-snackbar>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
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
.fondoLogin {
  background: url('~static/login.svg');
  background-size: 100% 100%;
  background-position: center top;
}
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
</style>
>
