<template>
  <div class="v-vuex-core-module">
    <p class="v-txt">
      由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。所以，我们可以使用module将store分割成多个模块。每个模块拥有自己的state，mutation，getter，action，甚至是嵌套子模块。
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const moduleA = {
          state: { ... },
          mutations: { ... },
          actions: { ... },
          getters: { ... }
        }

        const moduleB = {
          state: { ... },
          mutations: { ... },
          actions: { ... }
        }

        const store = new Vuex.Store({
          modules: {
            a: moduleA,
            b: moduleB
          }
        })

        store.state.a // -> moduleA 的状态
        store.state.b // -> moduleB 的状态
      </code>
    </pre>
    <p class="v-note">
      模块的局部状态
    </p>
    <p class="v-txt">
      对于模块内部的mutation和getter，接收的第一个参数，是<b>模块的局部状态对象（state）。</b>
    </p>
    <p class="v-txt">
      对于模块内部的action，局部状态通过context.state暴露出来，根节点状态则为context.rootState
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const moduleA = {
          // ...
          actions: {
            incrementIfOddOnRootSum ({ state, commit, rootState }) {
              if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
              }
            }
          }
        }
      </code>
    </pre>
    <p class="v-txt">
      对于模块内部的getter，根节点状态会作为第三个参数暴露出来。
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const moduleA = {
          // ...
          getters: {
            sumWithRootCount (state, getters, rootState) {
              return state.count + rootState.count
            }
          }
        }
      </code>
    </pre>
    <p class="v-title">
      <b>命名空间</b>待更新...
    </p>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  export default {
    name: 'vuex-core-moudle',
    mixins: [mixin]
  }
</script>
