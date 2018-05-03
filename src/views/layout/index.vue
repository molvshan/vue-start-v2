<template>
  <el-container>
    <el-aside width="200px">
      <layout-menu :menu="menu"></layout-menu>
    </el-aside>
    <el-container style="height: 100%;">
      <el-header height="auto">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbLists" :key="item.name">
            <span v-if='item.redirect==="noredirect" || index === breadcrumbLists.length - 1'>{{ item.meta.title }}</span>
            <router-link v-else :to="item.path || item.redirect">{{ item.meta.title }}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer>
        <div class="left" @click="goPath('bo')">博客目录</div>
        <div class="right" @click="goPath('be')">本章目录</div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import layoutHead from './components/head/index'
import layoutMenu from './components/menu/index'

export default {
  name: 'layout',
  components: {
    layoutHead,
    layoutMenu
  },
  data () {
    return {
      breadcrumbLists: this.$route.matched,
      menu: this.$router.options.routes
    }
  },
  watch: {
    $route(obj) {
      console.log(obj.matched);
      if (obj.redirectedFrom !== '/') {
        this.breadcrumbLists = [{ path: '/', name: 'dashboard', meta: { title: '首页' } }].concat(obj.matched);
      } else {
        this.breadcrumbLists = obj.matched;
      }
    }
  },
  methods: {
    goPath(val) {
      if (val === 'bo') {
        this.$router.push({ path: '/' });
      } else {
        this.$router.push({ path: this.$route.matched[0].redirect });
      }
    }
  },
  created() {
    if (this.$route.name !== 'catalog') {
      this.breadcrumbLists = [{ path: '/', name: 'dashboard', meta: { title: '首页' } }].concat(this.$route.matched);
    } else {
      this.breadcrumbLists = this.$route.matched
    }
  }
}
</script>

<style lang="scss">
  .el-container {
    height: 100%;
    .el-header {
      padding: 10px 0;
      border-bottom: 1px solid #eee;

      .el-breadcrumb {
        font-size: 16px;
        padding-left: 40px;
      }
    }
    .el-main {
      padding-top: 5px;
      padding-bottom: 0;
    }
    .el-footer {
      overflow: hidden;
      line-height: 60px;
      .left {
        float: left;
        cursor: pointer;
      }
      .right {
        float: right;
        cursor: pointer;
      }
    }
  }
</style>
