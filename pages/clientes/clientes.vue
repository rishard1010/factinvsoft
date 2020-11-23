<template>
  <v-form ref="form">
    <v-card flat>
      <v-toolbar color="#FFA000" dark extended flat>
        <v-icon>fas fa-user-chart</v-icon>
        <v-toolbar-title class="ml-2"> Clientes </v-toolbar-title>
      </v-toolbar>

      <v-card class="mx-auto border" max-width="1000" style="margin-top: -50px">
        <v-toolbar :src="require('@/static/fondo.svg')" flat>
          <v-toolbar-title class="white--text">
            Ingrese la información del cliente
          </v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>

        <v-card-text style="height: 200px">
          <v-row dense>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="nombreCliente"
                label="Nombre*"
                placeholder="Ingrese nombre cliente"
                outlined
                dense
                hide-details
                :rules="[required('nombre')]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="direccionCliente"
                label="Dirección*"
                placeholder="Ingrese dirección cliente"
                outlined
                dense
                hide-details
                :rules="[required('dirección')]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="telefonoCliente"
                label="Teléfono*"
                placeholder="Ingrese teléfono cliente"
                outlined
                dense
                hide-details
                :rules="[required('telefono')]"
              ></v-text-field>
            </v-col>
            <v-col class="text-center mx-auto" cols="12" md="8">
              <v-btn large color="primary" @click="guardarCliente"
                ><v-icon left> fal fa-save </v-icon>Guardar</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-card>
  </v-form>
</template>

<script>
import validations from '@/utils/validations'
export default {
  data() {
    return {
      ...validations,
      nombreCliente: '',
      direccionCliente: '',
      telefonoCliente: '',
    }
  },
  methods: {
    guardarCliente() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.$notifier.showMessage({
        content: 'Hello, snackbar',
        color: 'primary',
      })
      console.log(this.$auth.user[0])
    },
  },
}
</script>

<style></style>
