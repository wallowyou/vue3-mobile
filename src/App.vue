<template>
  <div class="tree">
      <img src="./assets/avatar.png" />
      <div>头像-{{prive}}</div>
      <HelloVue></HelloVue>
  </div>
</template>

<script lang="ts">
import { ref , defineComponent} from 'vue';
import HelloVue from './components/Hello.vue';
export default defineComponent({
  components: {
    HelloVue
  },
  setup(){
      let prive = ref(123);
      return {
          prive
      }
  }
})
</script>

<style lang="scss" scoped>
  .tree{
      width:100px;
      height: 100px;
      margin: 0 auto;
  }
  .tree>img{
      width: 100%;
      height:100%;
  }
</style>