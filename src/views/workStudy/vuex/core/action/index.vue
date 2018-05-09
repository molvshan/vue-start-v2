<template>
  <div class="v-vuex-core-action">
    <p class="v-title">
      action类似于mutation，不同之处在于：
    </p>
    <ul class="v-lists">
      <li class="v-list">Action提交的是mutation，而不是直接变更状态</li>
      <li class="v-list">action可以包含任意异步操作</li>
    </ul>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            count: 14,
          mutations: {
            increment(state) {
              state.count++
            }
          },
          actions: {
            increment (context) {
              context.commit('increment')
            }
          }
        })
      </code>
    </pre>
    <p class="v-txt">
      Action函数接受一个与store实例具有相同属性和方法的context对象，因此，我们可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getter
    </p>
    <p class="v-txt">
      <b>注意：</b>context对象不是store实例本身
    </p>
    <p class="v-txt">
      实践中，我们经常使用es6的参数解构来简化代码
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        actions: {
          increment ({ commit }) {
            commit('increment')
          }
        }
      </code>
    </pre>
    <p class="v-note">
      分发Action
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.dispatch('increment');
      </code>
    </pre>
    <p class="v-txt">
      action支持同样的载荷方式和对象方式进行分发
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        // 以载荷形式分发
        store.dispatch('incrementAsync', {
          amount: 10
        })

        // 以对象形式分发
        store.dispatch({
          type: 'incrementAsync',
          amount: 10
        })
      </code>
    </pre>
    <p class="v-note">
      在组件中分发action
    </p>
    <ul class="v-lists">
      <li class="v-list">一、使用 this.$store.dispatch('xxx') 分发 action。</li>
      <li class="v-list">二、使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）。</li>
    </ul>
    <p class="v-note">
      组合Action
    </p>
    <p class="v-txt">
      Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？
    </p>
    <p class="v-txt">
      <b>首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise：</b>
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        actions: {
          actionA ({ commit }) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                commit('someMutation')
                resolve()
              }, 1000)
            })
          }
        }
      </code>
    </pre>
    <p class="v-txt">
      现在，我们可以这样做
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.dispatch('actionA').then(() => {
          // ...
        })
      </code>
    </pre>
    <p class="v-txt">
      在另外一个action中也可以这样做
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        actions: {
          // ...
          actionB ({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
              commit('someOtherMutation')
            })
          }
        }
      </code>
    </pre>
    <p class="v-txt">
      最后，如果我们利用 async / await，我们可以如下组合 action：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        // 假设 getData() 和 getOtherData() 返回的是 Promise
        actions: {
          async actionA ({ commit }) {
            commit('gotData', await getData())
          },
          async actionB ({ dispatch, commit }) {
            await dispatch('actionA') // 等待 actionA 完成
            commit('gotOtherData', await getOtherData())
          }
        }
      </code>
    </pre>
    <p class="v-title">
      一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行。
    </p>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  export default {
    name: 'vuex-core-action',
    mixins: [mixin]
  }
</script>
