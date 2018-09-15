<template>
  <div class="container" :class="prefixCls" @click="handleResetStatus">
    <div @click.stop="rootBox = 'fenge-box'">
      <v-recursion @handleSelectBox="handleSelectBox" class="fenge-box" :list="list"></v-recursion>
    </div>
    <div class="buttons">
      <div class="button" @click.stop="handleCutBox('vertical')">垂直</div>
      <div class="button" @click.stop="handleCutBox('horizontal')">水平</div>
      <div class="button" @click.stop="handleCutBox('cancel')">撤销</div>
    </div>
  </div>
</template>

<script>
  import vRecursion from './components/recursion';
  const prefixCls = 'v-zujian-recursionBox';

  export default {
    name: prefixCls,
    components: {
      vRecursion
    },
    data() {
      return {
        prefixCls,
        list: [
          // {
          //   id: '1',
          //   type: 'horizontal',
          //   position: 'left',
          //   children: [
          //     {
          //       id: '3',
          //       type: '',
          //       position: 'left'
          //     },
          //     {
          //       id: '4',
          //       type: '',
          //       position: 'right'
          //     }
          //   ]
          // },
          // {
          //   id: '2',
          //   type: 'vertical',
          //   position: 'right',
          //   children: [
          //     {
          //       id: '5',
          //       type: 'horizontal',
          //       position: 'top',
          //       children: [
          //         {
          //           id: '7',
          //           type: '',
          //           position: 'left'
          //         },
          //         {
          //           id: '8',
          //           type: '',
          //           position: 'right'
          //         }
          //       ]
          //     },
          //     {
          //       id: '6',
          //       type: '',
          //       position: 'bottom'
          //     }
          //   ]
          // }
        ],
        arrList: [],
        arrIds: [],
        activeBoxId: '',
        rootBox: ''
      }
    },
    methods: {
      // 重置选中状态
      handleResetStatus() {
        this.activeBoxId = '';
        this.rootBox = '';
      },
      // 选中div
      handleSelectBox(id) {
        this.activeBoxId = id;
        this.rootBox = 'fenge-box';
      },
      // 切割box
      handleCutBox(type) {
        if (type === 'cancel') {
          this.activeBoxId = '';
          this.rootBox = '';
          if (this.arrIds.length === 0) {
            alert('没有更多操作可供撤销了');
            return
          }
          const lastId = this.arrIds[this.arrIds.length - 1];
          this.arrList = this.arrList.filter(item => item.pid !== lastId);
          this.arrIds.splice(this.arrIds.length - 1, 1);
        } else {
          if (!this.rootBox) {
            alert('请选择想要切割的div');
            return;
          }
          if (type === 'vertical') {
            const top = {
              id: `top-${new Date().getTime()}`,
              pid: this.activeBoxId,
              position: 'top',
              type: ''
            };
            const bottom = {
              id: `bottom-${new Date().getTime()}`,
              pid: this.activeBoxId,
              position: 'bottom',
              type: ''
            };
            this.arrList = this.arrList.concat(top, bottom);
          }
          if (type === 'horizontal') {
            const left = {
              id: `left-${new Date().getTime()}`,
              pid: this.activeBoxId,
              position: 'left',
              type: ''
            };
            const right = {
              id: `right-${new Date().getTime()}`,
              pid: this.activeBoxId,
              position: 'right',
              type: ''
            };
            this.arrList = this.arrList.concat(left, right);
          }
          this.arrIds.push(this.activeBoxId);
          this.activeBoxId = '';
          this.rootBox = '';
        }
        this.list = this.toTree(this.arrList);
      },
      toTree(data) {
        data.forEach(item => {
          delete item.children;
          item.id = item.id.toString();
        });
        const map = {};
        data.forEach(item => {
          map[item.id] = item;
        });
        const val = [];
        data.forEach(item => {
          const parent = map[item.pid];
          if (parent) {
            (parent.children || (parent.children = [])).push(item);
          } else {
            val.push(item);
          }
        });
        return val;
      }
    }
  }
</script>

<style lang="scss">
  .v-zujian-recursionBox {
    >div {
      width: 300px;
      height: 300px;
      >.fenge-box {
        width: 100%;
        height: 100%;
        border: 1px solid #333;
      }
    }
    .buttons {
      margin-top: 50px;
      .button {
        width: 60px;
        padding: 10px 0;
        margin: 0 auto 10px;
        text-align: center;
        background-color: #1288f8;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
</style>
