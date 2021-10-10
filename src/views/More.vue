<template>
  <div>
    <!-- <h1 class="moreBtn">More</h1> -->
    <h1 class="moreBtn" @click="$router.push('./')">Home</h1>
    <h2 class="moreBtn" @click="$router.push('./car')">Car</h2>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress
        type="circle"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="70"
        status="warning"
      ></el-progress>
      <el-progress
        type="circle"
        :percentage="50"
        status="exception"
      ></el-progress>
    </el-row>

    <el-row class="swiper-box">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    

  </div>
</template>

<script>
import { Loading } from "element-ui";
let loading;
export default {
  name: "More",
  beforeCreate() {
    loading = Loading.service({
      lock: true,
      fullscreen: true,
    });
  },
  created() {
    console.log("我加载完了");
  },
  mounted() {
    loading.close();
  },
};
</script>

<style scoped>
.moreBtn {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #ddd;
  margin-right: 10px;
}

/* Carousel  */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.swiper-box{
  width: 1000px;
  margin: 20px auto;
}
</style>