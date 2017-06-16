<template>
  <div id="app">
    <p>Clicked: {{ c2 }} times, count is {{ evenOrOdd }}, isLuckyNum:{{isLuckyNum}} ,{{isLLL}}.</p>
    <p>Clicked: {{ $store.state.count }} times, count is {{ $store.getters.evenOrOdd }}, isLuckyNum:{{$store.getters.isLuckyNum}} .</p>
    <button @click="add">+</button> | <button @click="$store.commit('increment')">+</button>
    <button @click="minus">-</button> | <button @click="$store.commit('def', {num: Number(4)})">提交默认值</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="$store.dispatch('incrementAsync')">Increment async</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {localData: 'loc'};
  },
  //store里面包含四个对象：state, getters, actions, mutations，这四个对象属性取值都为函数，mapState,mapGetters,mapActions,mapMutations四个方法用法如下示例,state,getters在组件的计算属性中引入，actions,mutations在组件的methods中引入，
  computed: {
    //mapState 辅助函数帮助我们生成计算属性
    // ...mapState(['c0'])
    ...mapState({c0: state => state.count, c1: 'count', c2: function(state) {return this.localData + state.count}}),

    // ...mapGetters(['evenOrOdd', 'isLuckyNum', 'isLL'])
    //mapGetters 辅助函数仅仅是将 store 中的 getters 映射到局部计算属性，写成函数会报错哦，如需与data计算，请使用state

    ...mapGetters({evenOrOdd: 'evenOrOdd', isLuckyNum: 'isLuckyNum', isLLL: 'isLL'})
  },
  methods: {
    //mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用，只是个映射，作用只是单纯改变state取值，但可以为方法提供一个载荷对象作为参数
    // ...mapMutations(['increment', 'decrement'])
    ...mapMutations({add: 'increment', minus: 'decrement'}),

    //mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用

    // ...mapActions(['incrementIfOdd','incrementAsync']),
    ...mapActions({incrementIfOdd: 'incrementIfOdd', incrementAsync: 'incrementAsync'}),

  }
}
</script>
