<template>
  <div class="v-vuex-core-mutation">
    <p class="v-txt">
      更改Vuex的store中的状态的唯一方法是提交mutation。vuex中的mutation非常类似于事件：每个mutation都有一个字符串的<b>事件类型（type）</b>和一个<b>回调函数（handler）</b>。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数。
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            count: 0,
          },
          mutations: {
            increment(state) {
              state.count++
            }
          }
        })
      </code>
    </pre>
    <p class="v-txt">
      你不能直接调用mutation handler。这个选项更像是事件注册：“当触发一个类型为increment的mutation时，调用此函数。”要唤醒一个handler，我们需要以相应的type调用store.commit方法：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.commit('increment')
      </code>
    </pre>
    <p class="v-note">
      提交载荷（Payload）——传参
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            count: 0,
          },
          mutations: {
            increment(state, n) {
              state.count += n;
            }
          }
        })
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.commit('increment', 10);
      </code>
    </pre>
    <p class="v-txt">
      （大多数情况下，参数应该是一个对象，这样会包含多个字段，并且记录的mutation会更易读。）
    </p>
    <p class="v-note">
      对象风格的提交方式
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            count: 0,
          },
          mutations: {
            increment(state, obj) {
              state.count += obj.num;
            }
          }
        })
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.commit({ type: 'increment', num: 2 });
      </code>
    </pre>
    <p class="v-note">
      mutation必须是同步函数
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        mutations: {
          someMutation (state) {
            api.callAsyncMethod(() => {
              state.count++
            })
          }
        }
      </code>
    </pre>
    <p class="v-txt">
      现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。
    </p>
    <p class="v-note">
      在组件中提交mutation
    </p>
    <p class="v-title">一、</p>
    <p class="v-txt">
      使用this.$store.commit('xxx') 提交 mutation
    </p>
    <p class="v-title">二、</p>
    <p class="v-txt">
      使用mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        import { mapMutations } from 'vuex'

        export default {
          // ...
          methods: {
            ...mapMutations([
              'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

              // `mapMutations` 也支持载荷：
              'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
            ]),
            ...mapMutations({
              add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
            })
          }
        }
      </code>
    </pre>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  export default {
    name: 'vuex-core-mutation',
    mixins: [mixin],
    methods: {
      testmutation() {
        this.$store.commit({ type: 'increment', num: 2 });
        console.log(this.$store.state.count);
      }
    }
  }
</script>
