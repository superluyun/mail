<template>
    <div>
        <el-submenu v-for="(v,i) in data_menu" :key="i" :index='v.title'>
          <template v-if='v.content'>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{v.title}}</span>
            </template>
            <!-- <el-menu-item-group> -->
                <aaa :data_menu='v.content'></aaa>
            <!-- </el-menu-item-group> -->
          </template>

          <!-- <template v-else>
            <el-menu-item-group>
                <el-menu-item :index="v.title">{{v.title}}</el-menu-item>
            </el-menu-item-group>
          </template> -->
        </el-submenu>
    </div>
</template>

<script>
export default {
    name:'aaa',
    props:{
        data_menu:{type:Array}
    }
}
</script>