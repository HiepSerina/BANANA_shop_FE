<template>
    <div class="dropdown">
      <button @click="toggleDropdown" class="dropdown-button">
        {{ selectedOption }}
        <i class="fa fa-caret-down"></i>
      </button>
      <ul v-if="isOpen" class="dropdown-list">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">{{ option }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props:["options", "optiondefault"],
    data() {
      return {
        isOpen: false,
        selectedOption: "Select an option",
      };
    },
    created(){
        this.selectedOption = this.optiondefault;
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.$emit("filterItem",{type:this.optiondefault,value:this.selectedOption});
        this.$emit("sort",this.selectedOption)
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-button {
    background-color: #2d2f3e;
    border: none;
    color: #E4E8EE;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  }
  
  .dropdown-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    position: absolute;
    top: 100%;
    left: 0;
    width: 150px;
    background-color: #2d2f3e;
    z-index: 2;
  }
  
  .dropdown-list li {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-list li:hover {
    background-color: #f0f0f0;
  }
  </style>
  