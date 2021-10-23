<template>
  <div class="tree-card">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <!-- node-drop:拖拽成功完成时触发的事件 -->
      <!-- allow-drop:拖拽时判定目标节点能否被*放置* -->
      <!-- allow-drag:判断节点能否被拖拽 -->
      <el-tree
        :data="data"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        draggable
        @node-drop="handleDrop"
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
      >
      <div class="tree-content-box" slot-scope="{ node }">
        <div v-if="node.level === 1">
          <span>{{ node.label }}</span>
        </div>
        <div v-if="node.level === 2">
          <span>{{ node.label }}</span>
        </div>
        <div v-if="node.level === 3" class="tree-third-level">
          <span class="third-level-tag">{{ node.label }}</span>
        </div>
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
export default {
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
    // handleDragEnd (draggingNode, dropNode, dropType, ev) {
    //   console.log('tree drag end: ', dropNode && dropNode.label, dropType);
    // },
    // 拖拽成功完成时触发的事件
    handleDrop (draggingNode, dropNode, dropType, ev) {
      // console.log('tree drop: ', draggingNode, dropNode.label, dropType, ev);
      console.log('拖拽完成');
      // console.log(draggingNode.id, dropNode.id); // draggingNode.id我拖动节点的id dropNode.id放入节点的ID
      let type
      if(dropType == 'before') {
        type = 'up'
      }else if(dropType == 'after'){
        type = 'down'
      }
      // console.log(draggingNode, dropNode, type)
      console.log(draggingNode.data.id, dropNode.data.id, type)
    },
    // 判断能否被放置！！拖拽过程中会触发
    allowDrop (draggingNode, dropNode, type) {
      console.log('我是allowDrop', draggingNode, dropNode, type)
      // 不允许插入
      if(type == 'inner') return false
      // 放入的只能3层，必须进去和出来的level一样
      if(dropNode.data.level !== 3 || draggingNode.data.level !== dropNode.level) return false
      // if(dropNode.level !== 3 || draggingNode.level !== dropNode.level) return false
      return true
      // if (dropNode.data.label === '二级 3-1') {
      //   return type !== 'inner';
      // } else {
      //   return true;
      // }
    },
    // 用来判断哪个level可以拖拽
    allowDrag (draggingNode) {
      return !(draggingNode.data.level === 1) && !(draggingNode.data.level === 2);
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

/* leaf none */
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__content>.is-leaf{
  display: none;
}
::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__content{
  padding-left: 0 !important;
}
/* leaf none */

/* ::v-deep .el-tree-node__children>.el-tree-node.is-expanded>.el-tree-node__children>.el-tree-node.is-expanded{
  height: 22px;
} */
.tree-third-level{
  padding-left: 50px;
}

::v-deep .el-tree-node__content {
  height: auto;
}
</style>