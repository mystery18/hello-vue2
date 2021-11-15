<template>
  <div class="tree-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button type="primary" @click="$router.push({ name: 'ystree' })">去YSTREE</el-button>
      </div>

      <span class="remind">
        <el-badge :value="200" :max="99" class="item">
          <i class="el-icon-chat-dot-round" style="fontSize: 24px" />
        </el-badge>
      </span>

      <el-badge :value="200" :max="99" class="item">
        <el-button class="share-button" icon="el-icon-chat-dot-round" type="primary"></el-button>
      </el-badge>

      <MyInput />
    
      <el-divider />

      <el-tree
        :data="data"
        node-key="id"
        :props="defaultProps"
        default-expand-all
      >
      <!-- <div class="tree-content-box" slot-scope="{ node }"> -->
      <div class="tree-content-box" slot-scope="{ node }">
        <div v-if="node.level === 1">
          <span>{{ node.label }}</span>
        </div>
        <div v-if="node.level === 2">
          <span>{{ node.label }}</span>
        </div>
        <draggable force-fallback="true" ghost-class="el-tree-node" group="tree-content-box" animation="500" @start="onStart" @end="onEnd(node)">
          <div v-if="node.level === 3" class="tree-third-level">
            <span class="third-level-tag">{{ node.label }}</span>
          </div>
        </draggable>
      </div>
        <!-- <div class="inner" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span class="actions">
            <el-button >编辑</el-button>
            <el-button>添加课时</el-button>
            <el-button>状态</el-button>
          </span>
        </div> -->
      </el-tree>
    </el-card>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import MyInput from './MyInput.vue'
export default {
  components: {
      draggable,
      MyInput
  },
  data () {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1',
            level: 3
          },
          {
            id: 10,
            label: '三级 1-1-2',
            level: 3
          }],
          level: 2
        }],
        level: 1
      },
      {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1',
          level: 2
        },
        {
          id: 6,
          label: '二级 2-2',
          level: 2
        }],
        level: 1
      },
      {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1',
          level: 2
        },
        {
          id: 8,
          label: '二级 3-2',
          children: [{
            id: 11,
            label: '三级 3-2-1',
            level: 3
          },
          {
            id: 12,
            label: '三级 3-2-2',
            level: 3
          },
          {
            id: 13,
            label: '三级 3-2-3',
            level: 3
          }],
          level: 2
        }],
        level: 1
      }],
      drag: false,
      defaultProps: {
        children: 'children',
        // label: 'label'
        label(data) {
          return data.label
        }
      }
    };
  },
  methods: {
    handleDragStart (node, ev) {
      console.log('drag start', node);
    },
    handleDragEnter (draggingNode, dropNode, ev) {
      console.log('tree drag enter: ', dropNode.label);
    },
    handleDragLeave (draggingNode, dropNode, ev) {
      console.log('tree drag leave: ', dropNode.label);
    },
    handleDragOver (draggingNode, dropNode, ev) {
      console.log('tree drag over: ', dropNode.label);
    },
    handleDragEnd (draggingNode, dropNode, dropType, ev) {
      console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    },
    handleDrop (draggingNode, dropNode, dropType, ev) {
      console.log('tree drop: ', dropNode.label, dropType);
    },
    allowDrop (draggingNode, dropNode, type) {
      if (dropNode.data.label === '二级 3-1') {
        return type !== 'inner';
      } else {
        return true;
      }
    },
    allowDrag (draggingNode) {
      return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
    },
    onStart() {
        this.drag = true;
    },
    onEnd(e) {
      console.log(e.id)
      this.drag = false;
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 50px;
}
.inner {
  flex: 1;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ebeef5;
}

::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* box-sizing: content-box; */
}
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children div{
  display: flex;
}
/* leaf none */
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__content>.is-leaf{
  display: none;
}
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__content{
  padding-left: 0 !important;
}
/* leaf none */
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__content>.tree-content-box>div{
  height: 21px;
}
/* ::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded{
  height: 22px;
} */
.tree-third-level{
  padding-left: 50px;
}

::v-deep .el-tree-node__content {
  height: auto;
}

/* remind */
span.remind {
  display: inline-block;
  width: 80px;
  background-color: gainsboro;
  padding: 20px;
  border-radius: 10px;
}
</style>