<template>
  <div class="container">
    <h2>Buttons</h2>
    <div class="row">
      <div class="col">
        <h4>Primary</h4>
        <div class="spacer">
          <v-button
            type="primary"
            icon="ci-folder_plus"
            :loading="false"
            :onClick="onClick"
          >
            Create Order
          </v-button>
        </div>
        <div class="spacer">
          <v-button
            type="primary"
            icon="ci-folder_plus"
            :loading="true"
            :onClick="onClick"
            >Create Order</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="primary" icon="ci-folder_plus" :disabled="true"
            >Create Order</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="primary" :onClick="onClick">Create Order</v-button>
        </div>
      </div>
      <div class="col">
        <h4>Secondary</h4>
        <div class="spacer">
          <v-button type="secondary" icon="ci-user" :loading="false"
            >Back to Search</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="secondary" icon="ci-user" :loading="true"
            >Back to Search</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="secondary" icon="ci-user" :disabled="true"
            >Back to Search</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="secondary">Back to Search</v-button>
        </div>
      </div>
      <div class="col">
        <h4>Tetritary</h4>
        <div class="spacer">
          <v-button type="tetritary" icon="icon-Cloud_Check" :loading="false"
            >Edit Info</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="tetritary" icon="icon-Cloud_Check" :loading="true"
            >Edit Info</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="tetritary" icon="icon-Cloud_Check" :disabled="true"
            >Edit Info</v-button
          >
        </div>
        <div class="spacer">
          <v-button type="tetritary">Edit Info</v-button>
        </div>
      </div>
    </div>
    <h2 style="margin-top: 40px">Inputs</h2>
    <div class="row">
      <div><h3 class="row__title">Input</h3></div>
      <div class="col">
        <v-input
          label="Email"
          placeholder="dmewebhajs@gmail.com"
          :required="true"
          noteMessage="Invalid password format. Use numbers 0-9 and symbols A-Z, !, #."
        />
      </div>
      <div class="col">
        <v-input
          label="First Name"
          :required="true"
          :clearable="true"
          placeholder="Search, item,id..."
          prependIcon="ci-search"
          appendIcon="ci-close_big"
          noteMessage="Invalid password format. Use numbers 0-9 and symbols A-Z, !, #."
          v-model="data"
        />
      </div>
      <div class="col">
        <v-input
          label="First Name"
          placeholder="Patric"
          errorMessage="Invalid Name"
          :error="true"
        />
      </div>
    </div>
    <div class="row">
      <div class="row__title"><h3>Quantity</h3></div>
      <div class="col">
        <v-quantity
          label="Quantity"
          :max="10"
          :min="3"
          v-model="count"
          prependIcon="ci-minus"
          appendIcon="ci-plus"
          noteMessage="Invalid password format"
        />
      </div>
      <div class="col">
        <v-quantity
          label="Disabled"
          :max="10"
          :min="3"
          prependIcon="ci-minus"
          appendIcon="ci-plus"
          :disabled="true"
          v-model="count"
        />
      </div>
      <div class="col">
        <v-quantity
          label="Quantity Error"
          :max="10"
          :min="3"
          errorMessage="dsfsdf"
          prependIcon="ci-minus"
          appendIcon="ci-plus"
          :error="true"
          v-model="count"
        />
      </div>
    </div>
    <div class="row">
      <div>
        <h3 class="row__title">Boolean</h3>
      </div>
      <div class="col">
        <v-boolean
          label="Used Email"
          trueText="Yes"
          falseText="No"
          v-model="boolean"
        />
      </div>
    </div>
    <div class="row">
      <div>
        <h3>Textarea</h3>
      </div>
      <div class="col">
        <v-textarea
          label="Text Area"
          placeholder="Write the text..."
          noteMessage="Invalid password format"
          v-model="textarea"
          :required="true"
        />
      </div>
      <div class="col">
        <v-textarea
          label="Text Area"
          placeholder="Write the text..."
          v-model="textarea"
          :disabled="true"
        />
      </div>
      <div class="col">
        <v-textarea
          label="Text Area"
          placeholder="Write the text..."
          v-model="textarea"
          :error="true"
          errorMessage="Invalid textarea"
        />
      </div>
    </div>
    <div class="row">
      <div>
        <h3>Select</h3>
      </div>
      <div class="col">
        <v-select
          label="Select"
          :options="options"
          noteMessage="Invalid password format"
          :required="true"
          v-model="select"
          itemKey="id"
          itemText="title"
        />
      </div>
      <div class="col">
        <v-select
          label="Select"
          :options="options"
          :disabled="true"
          v-model="select"
          itemKey="id"
          itemText="title"
        />
      </div>
      <div class="col">
        <v-select
          label="Select"
          :options="options"
          :error="true"
          errorMessage="Invalid textarea"
          v-model="select"
          itemKey="id"
          itemText="title"
        />
      </div>
    </div>

    <div class="row">
      <div>
        <h3>Checkbox</h3>
      </div>
      <div class="col">
        <v-checkbox v-model="checkbox" :trueValue="true" :falseValue="false" />
      </div>
    </div>

    <h2 style="margin-top: 40px">Tables</h2>
    <div class="row">
      <div class="col">
        <div class="table">
          <v-table-header>
            <template v-slot:left><h3>Last orders</h3></template>
            <template v-slot:right>
              <v-table-settings
                :items="headers"
                :showAll="true"
                icon="ci-plus"
              />
            </template>
          </v-table-header>
          <VTable
            v-model:server-options="serverOptions"
            :server-items-length="serverItemsLength"
            :loading="loading"
            :headers="headers.filter((el) => el.enabled === true)"
            :items="items"
          >
          </VTable>
        </div>
      </div>
    </div>

    <h2 style="margin-top: 40px">Lists</h2>
    <div class="row">
      <div class="col">
        <v-list>
          <v-list-header>
            <v-icon>ci-calendar_check</v-icon>
            <h4>Title</h4>
          </v-list-header>
          <v-list-item v-for="{ key, value } in list" :key="key">
            <template v-slot:left>{{ key }}</template>
            <template v-slot:right>{{ value }}</template>
          </v-list-item>
        </v-list>
      </div>
      <div class="col">
        <v-list :disabled="true">
          <v-list-header>
            <v-icon>ci-calendar_check</v-icon>
            <h4>Title</h4>
          </v-list-header>
          <v-list-item v-for="{ key, value } in list" :key="key">
            <template v-slot:left>{{ key }}</template>
            <template v-slot:right>{{ value }}</template>
          </v-list-item>
        </v-list>
      </div>
    </div>
    <h2 style="margin-top: 40px">Icons</h2>
    <div class="row">
      <div class="col">
        <v-icon>ci-search</v-icon>
        <v-icon>ci-close_big</v-icon>
        <v-icon>ci-close_big</v-icon>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import vButton from "./components/buttons/v-button.vue";
import vInput from "./components/form/inputs/v-input.vue";
import vQuantity from "./components/form/inputs/v-quantity.vue";
import vBoolean from "./components/form/inputs/v-boolean.vue";
import vTextarea from "./components/form/inputs/v-textarea.vue";
import vSelect from "./components/form/inputs/v-select.vue";
import vCheckbox from "./components/form/inputs/v-checkbox.vue";
import vTableHeader from "./components/tables/v-table-header.vue";
import vTableSettings from "./components/tables/v-table-settings.vue";
import vList from "./components/lists/v-list.vue";
import vListItem from "./components/lists/v-list-item.vue";
import vListHeader from "./components/lists/v-list-header.vue";
import vIcon from "./components/icons/v-icon.vue";
import helpers from "./helpers.js";

//button
function onClick() {
  console.log("dsfsf");
}

//input
const data = ref("");

//quantity
const count = ref(3);

//boolean
const boolean = ref();

//textarea
const textarea = ref();

//select
const select = ref(2);
const options = ref([
  { id: 1, title: "item1" },
  { id: 2, title: "item2" },
  { id: 3, title: "item3" },
  { id: 4, title: "item4" },
]);

//checkbox
const checkbox = ref(true);

//table
const headers = ref([
  { text: "Status", value: "status", enabled: true },
  { text: "Patient Name", value: "name", enabled: true },
  { text: "DOB", value: "dob", sortable: true, enabled: true },
  { text: "HCSPC", value: "hcspc", sortable: true, enabled: true },
  { text: "Diagnosis", value: "diagnosis", sortable: true, enabled: true },
  { text: "Supplier", value: "supplier", enabled: true },
  { text: "Action", value: "action", enabled: false },
]);
const { items, loading, serverItemsLength, serverOptions } =
  helpers.tableData();

//list
const list = ref([
  { key: "Type", value: "Secondary" },
  { key: "Patient Relationship", value: "Self" },
  { key: "Insurance Number", value: "235543545" },
  { key: "Payer Name", value: "AK Medicare Part B" },
  { key: "Payer ID", value: "00831" },
  { key: "Services", value: "1500 ERA Eligibility Attachments" },
  { key: "Effective Date", value: "01.02.2020" },
  { key: "Expire Date", value: "01.02.2022" },
  { key: "Address", value: "01.02.2022" },
]);
</script>
<style lang="less" scoped>
.container {
  padding: 20px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 200px;
}
.spacer {
  margin: 20px 0;
}
.row {
  padding: 20px;
  background-color: #f5f7fb;
  display: flex;
}
.row__title {
  width: 100px;
  font-size: 18px;
}
.col {
  margin: 0 40px;
  min-width: 300px;
}
.table {
  display: flex;
  flex-direction: column;
}
</style>
