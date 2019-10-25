/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
window.Vue = require("vue");

import VueEvents from "vue-events";
Vue.use(VueEvents);

/**
 * VueTable2 (Bootstrap Styles) Import Components
 *
 */

import Vuetable from "vuetable-2";
Vue.component("vuetable", Vuetable);

import VueTableCssForBootstrap4 from "./vt2/VuetableCssBootstrap4.js";
Vue.prototype.$VueTableCssForBootstrap4 = VueTableCssForBootstrap4;

import VuetablePagination from "./vt2/VuetablePaginationBootstrap4.vue";
Vue.component("vuetable-pagination", VuetablePagination);

Vue.component("filter-bar", require("./vt2/FilterBar.vue").default);
Vue.component("per-page-option", require("./vt2/PerPageOption.vue").default);

import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo";
Vue.component("vuetable-pagination-info", VuetablePaginationInfo);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
Vue.component(
    "vc-items",
    require("./components/pages/items/Items.vue").default
);
Vue.component(
    "vc-items-table",
    require("./components/pages/items/items-vuetable/ItemsTables.vue").default
);
Vue.component(
    "vc-items-choose-itemtype-modal",
    require("./components/pages/items/ItemsChooseTypeModal.vue").default
);
Vue.component(
    "vc-items-create",
    require("./components/pages/items/ItemsCreate.vue").default
);

Vue.component(
    "vc-items-delete-modal",
    require("./components/pages/items/ItemsDelete.vue").default
);

Vue.component(
    "vc-items-update-modal",
    require("./components/pages/items/ItemsUpdate.vue").default
);

Vue.component(
    "vc-items-in-modal",
    require("./components/pages/items/ItemsIn.vue").default
);

Vue.component(
    "vc-items-out-modal",
    require("./components/pages/items/ItemsOut.vue").default
);

Vue.component(
    "vc-items-additional-modal",
    require("./components/pages/items/ItemsAdditional.vue").default
);



Vue.component(
    "vc-records",
    require("./components/pages/records/Records.vue").default
);

Vue.component(
    "vc-records-table",
    require("./components/pages/records/RecordsTable.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app"
});
