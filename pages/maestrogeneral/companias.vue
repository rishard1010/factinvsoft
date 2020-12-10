<template>
  <v-form ref="form">
    <v-card class="mx-auto border">
      <v-toolbar :src="require('@/static/fondo.svg')" flat>
        <v-icon class="mr-2" dark>fal fa-building</v-icon>
        <v-toolbar-title class="white--text"> Compañias </v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>

      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4">
            <s-text-field
              v-model="compania.RAZONSOCIAL"
              label="Razón social*"
              placeholder="Razón social compañia"
              :rules="[required('Razón social')]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <s-text-field
              v-model="compania.CODIGO"
              label="Código*"
              placeholder="Código compañia"
              :rules="[required('código')]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <s-text-field
              v-model="compania.NIT"
              label="Nit*"
              placeholder="Nit compañia"
              :rules="[required('nit')]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <s-text-field
              v-model.number="compania.DIGITOVERIFICACION"
              label="Dígito verificación*"
              placeholder="Dígito verificación"
              type="number"
              :rules="[
                required('dígito verificación'),
                maxLength('dígito verificación', 1),
              ]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <s-select
              v-model="compania.CODMONEDA"
              label="Moneda*"
              :items="monedas"
              item-value="CODREFERENCIA"
              item-text="NOMREFERENCIA"
              :rules="[required('moneda')]"
            ></s-select>
          </v-col>
          <v-col cols="12" md="3">
            <s-text-field
              v-model="compania.RESOLCONTRIBUYENTE"
              label="Resolución gran contribuyente"
              placeholder="Resolución gran contribuyente"
            ></s-text-field>
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
                <s-text-field
                  v-model="compania.FECHARESOLCONTRIBUYENTE"
                  label="Fecha contribuyente"
                  prepend-icon="fal fa-calendar-alt"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></s-text-field>
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
            <s-text-field
              v-model="compania.RESOLAUTORETENEDOR"
              label="Resolución autoretenedor"
              placeholder="Resolución autoretenedor"
            ></s-text-field>
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
                <s-text-field
                  v-model="compania.FECHARESOLAUTORETENEDOR"
                  label="Fecha autoretenedor"
                  prepend-icon="fal fa-calendar-alt"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></s-text-field>
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
            <s-select
              v-model="compania.CODPAIS"
              label="Pais compañia*"
              :items="paises"
              item-value="CODPAIS"
              item-text="NOMBREPAIS"
              :rules="[required('pais')]"
              @change="cargarDepartamentos"
            ></s-select>
          </v-col>
          <v-col cols="12" md="3">
            <s-autocomplete
              v-model="compania.CODDEPARTAMENTO"
              label="Departamento compañia*"
              :items="departamentos"
              item-value="CODDEPARTAMENTO"
              item-text="NOMDEPARTAMENTO"
              :loading="cargaDepart"
              :rules="[required('departamento')]"
              @change="cargarCiudades"
            ></s-autocomplete>
          </v-col>
          <v-col cols="12" md="3">
            <s-autocomplete
              v-model="compania.CODCIUDAD"
              label="Ciudad compañia*"
              :items="ciudades"
              item-value="CODCIUDAD"
              item-text="NOMCIUDAD"
              :loading="cargaCiudades"
              :rules="[required('ciudad')]"
            ></s-autocomplete>
          </v-col>
          <v-col cols="12" md="3">
            <s-text-field
              v-model="compania.DIRECCION"
              label="Dirección"
              placeholder="Dirección compañia"
              :rules="[required('Dirección compañia')]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <s-text-field
              v-model.number="compania.TELEFONO"
              label="Número telefono*"
              type="number"
              :rules="[required('telefono')]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <s-text-field
              v-model="compania.EMAIL"
              label="Correo electrónico*"
              placeholder="Correo electrónico"
              :rules="[
                required('correo electronico'),
                emailFormat('correo electrónico'),
              ]"
            ></s-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <s-switch
              v-model="compania.ACTIVA"
              label="Activa"
              class="mt-2 pt-0"
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
      cargaDepart: false,
      cargaCiudades: false,
      compania: {
        ACTIVA: 1,
      },
      monedas: [],
      resolucionesDian: [],
      paises: [],
      ciudades: [],
      departamentos: [],
    }
  },
  async mounted() {
    await this.cargarCombos()
  },
  methods: {
    async cargarCombos() {
      this.monedas = await this.$axios.$get('/api/misc/referencias', {
        params: {
          codclasereferencia: 2,
        },
      })
      this.paises = await this.$axios.$get('/api/misc/paises')
    },
    async cargarDepartamentos() {
      if (this.compania.CODPAIS) {
        this.cargaDepart = true
        this.departamentos = await this.$axios.$get(
          `/api/misc/departamentos/${this.compania.CODPAIS}`
        )
        this.cargaDepart = false
      }
    },
    async cargarCiudades() {
      if (this.compania.CODDEPARTAMENTO) {
        this.cargaCiudades = true
        this.ciudades = await this.$axios.$get(
          `/api/misc/ciudades/${this.compania.CODDEPARTAMENTO}`
        )
        this.cargaCiudades = false
      }
    },
    guardarCliente() {
      if (!this.$refs.form.validate()) {
        return
      }
      console.log('Empresa', this.compania)
      this.$notifier.showMessage({
        content: 'Hello, snackbar',
        color: 'primary',
      })
    },
  },
}
</script>

<style></style>
