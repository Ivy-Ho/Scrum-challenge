<template>
  <div class="sortable">
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable
          class="list-group list-group--1"
          group="people"
          @change="log"
        >
          <img class="box" src="@/assets/img/task1-box1.png" alt="box image" />
          <img class="box" src="@/assets/img/task1-box2.png" alt="box image" />
          <img class="box" src="@/assets/img/task1-box1.png" alt="box image" />
          <img class="box" src="@/assets/img/task1-box2.png" alt="box image" />
        </draggable>
      </div>

      <div class="col-3">
        <h3>Draggable 2</h3>
        <draggable
          class="list-group list-group--2"
          group="people"
          @change="log"
        >
          <img class="box" src="@/assets/img/task1-box2.png" alt="box image" />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start",
  display: "Two Lists",
  order: 1,
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  methods: {
    add: function () {
      this.list.push({ name: "Juan" });
    },
    replace: function () {
      this.list = [{ name: "Edgard" }];
    },
    clone: function (el) {
      return {
        name: el.name + " cloned",
      };
    },
    log: function (evt) {
      window.console.log(evt);
    },
  },
};
</script>
<style lang="scss">
.list-group-item {
  cursor: pointer;
  color: white;
}
.box {
  width: 256px;
  height: 104px;
}
.list-group {
  width: 100%;
  height: 500px;
}
</style>
