import Vue from 'vue'
import {
  VTextField,
  VTextarea,
  VAutocomplete,
  VSelect,
  VSwitch,
} from 'vuetify/lib'

const textProps = {
  outlined: { type: Boolean, default: true },
  dense: { type: Boolean, default: true },
  hideDetails: { type: Boolean, default: true },
  placeholder: { type: String, default: ' ' },
  contentClass: { type: String, default: 'primary' },
}

Vue.component('STextField', {
  extends: VTextField,
  props: { ...textProps },
})

Vue.component('SAutocomplete', {
  extends: VAutocomplete,
  props: {
    ...textProps,
  },
})

Vue.component('SSelect', {
  extends: VSelect,
  props: {
    ...textProps,
  },
})

Vue.component('STextarea', {
  extends: VTextarea,
  props: {
    ...textProps,
    rows: { type: Number, default: 2 },
    noResize: { type: Boolean, default: true },
  },
})

Vue.component('SSwitch', {
  extends: VSwitch,
  props: {
    ...textProps,
    inset: { type: Boolean, default: true },
    trueValue: { type: Number, default: 1 },
    falseValue: { type: Number, default: 0 },
  },
})
