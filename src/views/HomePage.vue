<template>
  <div>
    <TheListItem urlImg="https://buff.163.com/static/images/site/index-section1-bg.jpg" :listItem="listItemPopular"
      header="Popular" />
    <TheListItem urlImg="https://buff.163.com/static/images/site/index-section2-bg.jpg" :listItem="listItemNewlyListed"
      header="Newly Listed" />
    <TheListItem urlImg="https://buff.163.com/static/images/site/index-section3-bg.jpg" :listItem="listItemBuyOrders"
      header="Buy Orders" />
  </div>
</template>

<script>
import TheListItem from "../components/layout/listItem/TheListItem.vue";
import { getAllItem } from "../service/item.js"
export default {
  name: "HomePage",
  components: {
    TheListItem,
  },
  data() {
    return {
      listItem: [],
      listItemPopular: [],
      listItemNewlyListed: [],
      listItemBuyOrders: [],
    };
  },
  created() {
    this.getAllItem();
  },
  methods: {
    async getAllItem() {
      const res = await getAllItem();
      this.listItem = res.data;
      this.listItemPopular = this.select10Item();
      this.listItemBuyOrders = this.select10Item();
      this.listItemNewlyListed = this.select10Item();
    },
    select10Item() {
      const selectedItems = [];

      while (selectedItems.length < 10) {
        const randomIndex = Math.floor(Math.random() * this.listItem.length);
        const selectedItem = this.listItem[randomIndex];

        if (!selectedItems.includes(selectedItem)) {
          selectedItems.push(selectedItem);
        }
      }
      return selectedItems;
    }
  }
};
</script>
