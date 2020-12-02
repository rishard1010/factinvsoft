<template>
  <v-form ref="form">
    <v-card class="mx-auto border">
      <v-toolbar :src="require('@/static/fondo.svg')" flat>
        <v-toolbar-title class="white--text"> Compañias </v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>

      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="compania.RAZONSOCIAL"
              label="Razón social*"
              placeholder="Razón social compañia"
              outlined
              dense
              hide-details
              :rules="[required('Razón social')]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="compania.CODIGO"
              label="Código*"
              placeholder="Código compañia"
              outlined
              dense
              hide-details
              :rules="[required('código')]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="compania.NIT"
              label="Nit*"
              placeholder="Nit compañia"
              outlined
              dense
              hide-details
              :rules="[required('nit')]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              v-model="compania.DIGITOVERIFICACION"
              label="Dígito verificación*"
              placeholder="Dígito verificación"
              outlined
              dense
              hide-details
              :rules="[required('dígito verificación')]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="compania.CODMONEDA"
              label="Moneda*"
              dense
              outlined
              :items="monedas"
              item-value="codreferencia"
              item-text="nomreferencia"
              hide-details
              :rules="[required('moneda')]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="compania.RESOLCONTRIBUYENTE"
              label="Resolución gran contribuyente"
              placeholder="Resolución gran contribuyente"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu
              v-model="fechaContribuyente"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="compania.FECHARESOLCONTRIBUYENTE"
                  label="Fecha contribuyente"
                  prepend-icon="fal fa-calendar-alt"
                  readonly
                  outlined
                  dense
                  hide-details
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="compania.FECHARESOLCONTRIBUYENTE"
                color="secondary"
                header-color="primary"
                @input="fechaContribuyente = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="compania.RESOLAUTORETENEDOR"
              label="Resolución autoretenedor"
              placeholder="Resolución autoretenedor"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-menu
              v-model="fechaAutoretenedor"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="compania.FECHARESOLAUTORETENEDOR"
                  label="Fecha autoretenedor"
                  prepend-icon="fal fa-calendar-alt"
                  readonly
                  hide-details
                  outlined
                  dense
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="compania.FECHARESOLAUTORETENEDOR"
                color="secondary"
                header-color="primary"
                @input="fechaAutoretenedor = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="compania.CODPAIS"
              label="Pais compañia*"
              dense
              outlined
              :items="paises"
              item-value="codpais"
              item-text="nombrepais"
              hide-details
              :rules="[required('pais')]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="compania.CODDEPARTAMENTO"
              label="Departamento compañia*"
              dense
              outlined
              :items="departamentos"
              item-value="coddepartamento"
              item-text="nomdepartamento"
              hide-details
              :rules="[required('departamento')]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-select
              v-model="compania.CODCIUDAD"
              label="Ciudad compañia*"
              dense
              outlined
              :items="ciudades"
              item-value="codciudad"
              item-text="nomciudad"
              hide-details
              :rules="[required('ciudad')]"
            ></v-select>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="compania.DIRECCION"
              label="Dirección"
              placeholder="Dirección compañia"
              outlined
              dense
              hide-details
            ></v-text-field>
          </v-col>
          <v-col class="text-center mx-auto" cols="12" md="4">
            <v-text-field
              v-model.number="compania.TELEFONO"
              label="Número telefono*"
              type="number"
              outlined
              dense
              hide-details
              :rules="[required('telefono')]"
            ></v-text-field>
          </v-col>
          <v-col class="text-center mx-auto" cols="12" md="4">
            <v-text-field
              v-model="compania.EMAIL"
              label="Correo electrónico*"
              placeholder="Correo electrónico"
              outlined
              dense
              hide-details
              :rules="[emailFormat('correo electrónico')]"
            ></v-text-field>
          </v-col>
          <v-col class="text-center mx-auto" cols="12" md="4">
            <v-switch
              v-model="compania.ACTIVA"
              true-value="1"
              false-value="0"
              label="Activa"
              hide-details
              dense
              class="mt-2 pt-0"
              color="primary"
            />
          </v-col>
          <v-col class="text-center mx-auto" cols="12">
            <v-btn large color="primary" @click="guardarCliente"
              ><v-icon left> fal fa-save </v-icon>Guardar</v-btn
            >
          </v-col>
        </v-row>
      </v-card-text>
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
      fechaContribuyente: false,
      fechaAutoretenedor: false,
      compania: {},
      monedas: [],
      resolucionesDian: [],
      paises: [],
      ciudades: [],
      departamentos: [],
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
    },
  },
}
</script>

<style></style>
