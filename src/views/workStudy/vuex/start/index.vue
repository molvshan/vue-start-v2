<template>
  <div class="container v-vuex-start">
    <p class="v-title">首先上代码</p>
    <pre class="line-numbers">
      <code class="language-js">
        import Vue from 'vue'
        import Vuex from 'vuex'

        Vue.use(Vuex)

        const store = new Vuex.Store({
          state: {
            count: 0
          },
          mutations: {
            increment(state) {
              state.count++
            }
          }
        })

        export default store
      </code>
    </pre>
    <p class="v-txt">
      以上是vue-cli的写法，首先在项目src目录下新建一个stroe文件夹，然后在store文件夹下新建一个js文件，js文件内容为上面代码。首先引用vue和vuex，然后通过.use()方法注册vuex，最后new一个vuex实例(当然，前提是已经<a target="_blank" href="https://vuex.vuejs.org/zh-cn/installation.html">通过npm将vuex安装到项目</a>)
    </p>
    <p class="v-title">
      当使用如下代码改变state中count的值，并打印这个值时:
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.commit('increment');
        console.log(this.$store.state.count) // => 1
      </code>
    </pre>
    <p class="v-note">注意：</p>
    <p class="v-txt">
      我们不能直接改变store中的状态，改变store中的状态的唯一途径就是显式地<b>提交 (commit) mutation</b>。
    </p>
    <p class="v-note">写在最后：</p>
    <p class="v-txt">
      每一个 Vuex 应用的核心就是 store（仓库）。“store”基本上就是一个容器，它包含着你的应用中大部分的状态 (state)。Vuex 和单纯的全局对象有以下两点不同：
    </p>
    <p class="v-txt">
      1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
    </p>
    <p class="v-txt">
      2.你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具帮助我们更好地了解我们的应用。
    </p>
    <p class="v-txt">
      (再次强调，我们通过提交 mutation 的方式，而非直接改变 store.state.count，是因为我们想要更明确地追踪到状态的变化。这个简单的约定能够让你的意图更加明显，这样你在阅读代码的时候能更容易地解读应用内部的状态改变。此外，这样也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。有了它，我们甚至可以实现如时间穿梭般的调试体验。)
    </p>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  export default {
    name: 'vuex-start',
    mixins: [mixin],
    created() {
      this.$store.commit('increment');
      console.log(this.$store.state.count) // => 1
    }
  }
</script>
