<template>
  <div class="home">
  <el-container>
    <el-header>
      <div id="header"></div>
    </el-header>
    <el-container id="content">
      <el-aside style="width:240;width:auto;max-height:calc(100vh - 60px);::-webkit-scrollbar {display:none}">
        <el-menu
          default-active="/item1"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="hsla(0,0%,100%,.65)"
          active-text-color='#fff'
          :router="true"
          style="min-height:calc(100vh - 60px);"
          :collapse="isCollapse"
          >
          <el-submenu1 :data_menu='menu_data'></el-submenu1>
          <!-- <el-submenu v-for='(v,i) in menu_data' :key="i" :index='v.title'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{v.title}}</span>
            </template>
            <el-menu-item-group>
              <template v-if='v.content'>
                <el-submenu v-for="(val,j) in v.content" :key="j" :index='val.title'></el-submenu>
              </template>
              <template>
                <el-menu-item v-for="(val,j) in v.content" :key="j" :index='val.title'>{{val.title}}</el-menu-item>
              </template>
            </el-menu-item-group>
          </el-submenu> -->

          <!-- <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/item1" >选项1</el-menu-item>
              <el-menu-item index="/item2" >选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <el-submenu index="2-1"> 
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二-一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item>aa</el-menu-item>
                  <el-menu-item>bb</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index='2-2'>
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二-二</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item>cc</el-menu-item>
                  <el-menu-item>dd</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu-item-group>
          </el-submenu> -->
        </el-menu>
      </el-aside >
      <el-main  style="max-height:calc(100vh - 60px);min-width:240px">
        <!-- <transition name="el-fade-in-linear"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import elSubmenu1 from './component/elSubmenu1'

export default {
  name: 'Home',
  data(){
    return{
      isCollapse:window.innerWidth>1024?false:true,
      menu_data:[
        {
          title:'导航一',
          content:[
            {title:'选项一'},
            {title:'选项二'}
          ]
        },
        {
          title:'导航二',
          content:[
            {
              title:'导航二-一',
              content:[
                {title:'选项1'},
                {title:'选项2'}
              ]
            },
            {
              title:'导航二-二',
              content:[
                {title:'选项1'},
              ]
            }
          ]
        }
      ]
    }
  },
  components:{
    elSubmenu1
  },
  created(){
    window.onresize=()=>{
      window.innerWidth>1024?this.isCollapse=false:this.isCollapse=true;
    }
  }
}
</script>


<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    /* min-height: 400px; */
  }
  .is-active{
    background-color: #f25c19 !important;
  }
  header{
    width:100%;
    height: 50px;
    background-color: #fff;
    position: fixed;
    z-index: 9999;
  }
  /* #header{
    width: 1400px;
    height: 100%;
    background-color: #f00;
    margin: 0 auto;
  } */
  #content{
    position: relative;
    top: 60px;
  }
   
</style>
