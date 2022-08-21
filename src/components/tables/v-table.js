import { ref, watch } from "vue";

export default function () {
  const items = ref([{
    status: "Intake",
    name: "Curry",
    dob: "03.06.1945",
    hcspc: "A2356",
    diagnosis: "C12.21",
    supplier: "Rainbow Supply - Far Rockway",
    action: "dgfdg",
  },
  {
    status: "Intake",
    name: "Curry",
    dob: "03.06.1945",
    hcspc: "A2356",
    diagnosis: "C12.21",
    supplier: "Rainbow Supply - Far Rockway",
    action: "dgfdg",
  },
  {
    status: "Intake",
    name: "Curry",
    dob: "03.06.1945",
    hcspc: "A2356",
    diagnosis: "C12.21",
    supplier: "Rainbow Supply - Far Rockway",
    action: "dgfdg",
  },
  {
    status: "Intake",
    name: "Curry",
    dob: "03.06.1945",
    hcspc: "A2356",
    diagnosis: "C12.21",
    supplier: "Rainbow Supply - Far Rockway",
    action: "dgfdg",
  },
  {
    status: "Intake",
    name: "Curry",
    dob: "03.06.1945",
    hcspc: "A2356",
    diagnosis: "C12.21",
    supplier: "Rainbow Supply - Far Rockway",
    action: "dgfdg",
  }]);

  const loading = ref(false);
  const serverItemsLength = ref(0);
  const serverOptions = ref({
    page: 1,
    rowsPerPage: 5,
    sortBy: 'age',
    sortType: 'desc',
  });

  const loadFromServer = async () => {
    loading.value = false;
    // const {
    //   serverCurrentPageItems,
    //   serverTotalItemsLength,
    // } = await mockServerItems(serverOptions.value);
    // items.value = serverCurrentPageItems;
    // serverItemsLength.value = serverTotalItemsLength;
    loading.value = false;
  };

  // initial load
  loadFromServer();

  watch(serverOptions, (value) => { loadFromServer(); }, { deep: true });

  return {
    items,
    loading,
    serverItemsLength,
    serverOptions
  }
}
