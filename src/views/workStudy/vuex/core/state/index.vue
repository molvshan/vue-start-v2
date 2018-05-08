<template>
  <div class="v-vuex-core-state">
    <p class="v-prism-note">单一状态树</p>
    <p class="v-prism-txt">
      单一状态树即用一个对象就包含了全部的应用层级状态。所以，这个对象就作为整个应用里唯一的数据源而存在。其意义就是每个应用实例仅有一个store实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。<b>单状态树和模块化并不冲突。</b>
    </p>
    <p class="v-prism-note">
      获得vuex状态
    </p>
    <p class="v-prism-title">
      在vue-cli项目中，我们可以通过如下方式将vuex状态从根组件注入到每一个子组件中（通过vue的store选项），这样子组件就能通过this.$store来访问到store状态。代码如下：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        // 在上一节，已经在src目录下新建了store文件夹以及store文件夹下的一个js文件，js文件先命名为index.js文件，其内容如下
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
    <p class="v-prism-txt">
      访问store状态代码如下：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        created() {
          console.log(this.$store.count) // => 0
        }
      </code>
    </pre>
    <p class="v-prism-title">
      如果每次从vuex中取状态都以this.$store的方式取的话，无疑是很麻烦的。因为vuex的状态存储是响应式的，所以从stroe中读取状态最简单的方法就是在计算属性中返回某个状态
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: {
          count() {
            return this.store.state.count;
          }
        }
      </code>
    </pre>
    <p class="v-prism-note">辅助函数mapState</p>
    <p class="v-prism-title">
      但是当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用mapState辅助函数帮助我们生成计算属性：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: mapState({
          count: state => state.count,
          countAlias: 'count',
          countPlusLocalState(state) {
            return state.count + this.localCount;
          }
        }),
        data() {
          return {
            localCount: 2
          }
        }
      </code>
    </pre>
    <p class="v-prism-txt">
      从上面代码我们可以看到，计算属性等于mapState函数，而mapState函数接受一个Object为参数，而这个参数里有三个属性，现在来分析这三个属性：
    </p>
    <p class="v-prism-txt">
      a> count: state => state.count
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: mapState({
          count: state => state.count
        })
      </code>
    </pre>
    <p class="v-prism-txt">
      其实，上面的代码等于下面的代码，箭头函数是为了代码的整洁性。
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        compute: {
          count() {
            return this.$store.state.count;
          }
        }
      </code>
    </pre>
    <p class="v-prism-txt">
      b> countAlias: 'count'
    </p>
    <p class="v-prism-txt">
      这个属性和上面count的箭头函数属性是等价的，countAlias的值是state的一个状态属性（此时，取的是count）。所以，count和countAlias这两个属性只需要一个就可以了。
    </p>
    <p class="v-prism-txt">
      c> countPlusLocalState(state) { return state.count + this.localCount; }
    </p>
    <p class="v-prism-txt">
      至于第三条属性其实和上面两条属性也是一样的，只不过是采取了常规函数的写法，而不是箭头函数，是因为countPlusLocalState这个计算属性还要取data里面return出来的localCount值，所以必须用到this，所以只能采取常规函数写法而不是箭头函数。
    </p>
    <p class="v-prism-note">注意</p>
    <p class="v-prism-title">当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。</p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: mapState([
          'status'
        ])
      </code>
    </pre>
    <p class="v-prism-note">
      对象展开运算符
    </p>
    <p class="v-prism-txt">
      我们知道，计算属性是一个对象，而mapState返回的也是一个对象，上面的代码其实是让计算属性等于mapState返回的对象。所以，我们如何将mapState辅助函数与其它计算属性混合使用。这时就用到了对象展开运算符：
    </p>
    <pre class="line-numbers">
      <code class="language-js">
        computed: {
          otherComputed() {
            return this.localCount;
          },
          ...mapState([
            'count'
          ])
        },
        data() {
          return {
            localCount: 2
          }
        }
      </code>
    </pre>
  </div>
</template>

<script>
  import mixin from '@/mixins/prism';
  import { mapState } from 'vuex';
  export default {
    name: 'vuex-core-state',
    mixins: [mixin],
    computed: {
      otherComputed() {
        return this.localCount;
      },
      ...mapState([
        'count'
      ])
    },
    data() {
      return {
        localCount: 2
      }
    },
    methods: {
      addCount() {
        console.log(this.status);
      }
    }
  }
</script>
