<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="6">
        <v-text-field v-model="usuario" label="Usuario" outlined></v-text-field>
      </v-col>

      <v-col cols="12" sm="6" md="6">
        <v-text-field
          v-model="clave"
          label="Contraseña"
          type="password"
          outlined
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center" justify="space-around">
      <v-btn depressed color="primary" @click="iniciarSesion"> Login </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'session',

  data() {
    return {
      usuario: '',
      clave: '',
    }
  },
  methods: {
    async iniciarSesion() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: { usuario: this.usuario, clave: this.clave },
        })
        console.log(response)
        if (response.data.success) {
          console.log('inició sesión')
        } else {
          console.log('Usuario no identificado')
        }
      } catch (err) {
        console.log('Usuario no identificado')
      }
    },
  },
}
</script>
<style></style>
