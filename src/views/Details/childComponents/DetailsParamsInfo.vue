<template>
  <div>
    <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0 ">
      <table class="size-table" v-for="(table,index) in paramsInfo.rule.tables " :key=" index">
        <tr>
          <th :colspan="table[0].length">{{paramsInfo.rule.key}}</th>
        </tr>
        <tr v-for="(tr,indey) in table" :key="indey">
          <td class="size-td" v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
    </div>
    <hr :style="{color: 'gray'}">
    <div v-if="paramsInfo.info">
      <table class="params-table">
        <tr v-for="(tr,index) in paramsInfo.info.set">
          <td class="params-key">{{tr.key}}</td>
          <td class="params-value">{{tr.value}}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {

    }
  },
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {

  },
  components: {

  }
}
</script>

<style scoped>
.size-table {
  font-size: var(--font-size);
  width: 100%;
  border-spacing: 0px;
  border-collapse: collapse;
  text-align: center;
}
.size-td {
  border: 1px solid gray;
}
.params-table {
  font-size: var(--font-size);
  width: 50%;
}
.params-table tr td {
  height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 5px 0 2px;
}
.params-key {
  width: 60px;
  text-align: center;
}
.params-value {
  text-indent: 4px;
  color: var(--color-high-text);
}
</style>
