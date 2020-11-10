<template>
  <v-container>
    <v-card elevation="5">
      <v-card-text>
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
        <v-card-actions>
          <v-row align="center" justify="space-around">
            <v-btn depressed color="primary" @click="iniciarSesion"
              >Iniciar sesión</v-btn
            >
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
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
    }
  },
  methods: {
    async iniciarSesion() {
      const resultado = await this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'info',
        iconColor: '#d33',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      })
      if (resultado.isConfirmed) {
        this.$swal('Deleted!', 'Your file has been deleted.', 'success')
      }
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
<style scoped></style>
>
