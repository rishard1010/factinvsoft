<template>
  <div>
    <v-list v-if="item.items && item.items.length" dense>
      <v-list-group class="contenido" color="white">
        <v-list-item-content slot="activator">
          <v-list-item-title class="white--text">
            <v-icon color="white" left>
              {{ item.ICONO || 'mdi-chevron-right' }}
            </v-icon>
            {{ item.DESCRIPCION }}
          </v-list-item-title>
        </v-list-item-content>
        <app-menu-item
          v-for="subchild in item.items"
          :key="subchild.MENU + subchild.OPCION"
          class="pl-1"
          :name="subchild.MENU"
          :item="subchild"
        />
      </v-list-group>
    </v-list>
    <v-list-item v-else :to="item.RUTA">
      <v-list-item-content>
        <v-list-item-title class="white--text">
          <v-icon small color="white" left>
            {{ item.ICONOOPCION || 'mdi-arrow-right' }}
          </v-icon>
          {{ item.DESCRIPCION }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'AppMenuItem',
  props: {
    item: {
      type: Object,
      default: () => [],
    },
  },
}
</script>
<style scoped>
.contenido {
  width: fit-content;
}
</style>
