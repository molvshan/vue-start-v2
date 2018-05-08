<template>
  <div class="v-vuex-core-getter">
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            todos: [
              { id: 1, text: '...', done: true },
              { id: 2, text: '...', done: false }
            ]
          }
        })
      </code>
    </pre>
    <p class="v-prism-title">
      如果store中state有一个todos数组状态，此时我们需要从这个todos派生出另一个状态，这个状态的值是todos数组的length。我们可以在组件中这么写：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: {
          doneTodosCount () {
            return this.$store.state.todos.filter(todo => todo.done).length
          }
        }
      </code>
    </pre>
    <p class="v-prism-txt">
      如果有多个组件需要用到此属性，那么我们要么复制这个函数，要么将这个函数抽到一个共享函数中，然后去到处引用它。两种方法都不是很理想，所以就有了getter。
    </p>
    <p class="v-prism-title">
      Vuex允许我们在store中定义getter（getter可以看做是store的计算属性）。就像计算属性一样，getter的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
    </p>
    <p class="v-prism-title">
      getter接受state作为其第一个参数
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            todos: [
              { id: 1, text: '...', done: true },
              { id: 2, text: '...', done: false }
            ]
          },
          getters: {
            todosLength: state => {
              return state.todos.filter(todo => todo.done).length;
            }
          }
        })
      </code>
    </pre>
    <p class="v-prism-note">通过属性访问</p>
    <p class="v-prism-title">
      getter会暴露为store.getters对象，我们可以通过属性方式来访问这些值：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.getters.todosLength
      </code>
    </pre>
    <p class="v-prism-note">通过方法访问</p>
    <p class="v-prism-title">
      我们也可以通过让getter返回一个函数，来实现给getter传参。这对store数组进行查询时非常有用
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        const store = new Vuex.Store({
          state: {
            todos: [
              {
                id: '1',
                label: 'a'
              },
              {
                id: '2',
                label: 'b'
              },
              {
                id: '3',
                label: 'c'
              }
            ]
          },
          getters: {
            getTodoById: state => id => {
              return state.todos.find(todo => todo.id === id)
            }
          }
        })
      </code>
    </pre>
    <pre class="line-numbers">
      <code class="language-js">
        this.$store.getters.getTodoById('2') // => {id: '2', label: 'b'}
      </code>
    </pre>
    <p class="v-prism-note">mapGetters辅助函数</p>
    <p class="v-prism-txt">
      与上一节的mapState辅助函数用法类似，其作用是将store中的getter映射到局部计算属性。
    </p>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  export default {
    name: 'vuex-core-getter',
    mixins: [mixin]
  }
</script>
