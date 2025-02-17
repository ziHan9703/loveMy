<!--
 * @Author: your name
 * @Date: 2025-02-17 17:07:26
 * @LastEditors: your name
 * @LastEditTime: 2025-02-17 19:43:15
 * @Description: 
 * @FilePath: /love-demo/src/components/love.vue
-->
<template>
  <div class="content">
    <div class="img-content">
      <div class="all-content">
        <span>大宝和我在一起{{ time }}</span>
        <img src="../assets/love.gif" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Love",
  data() {
    return {
      time: "",
    };
  },
  created() {
    // calculateTimeDifference
    setInterval(() => {
      let result = this.calculateTimeDifference(
        Date.now(),
        new Date("2024-11-30").getTime()
      );
      this.time = result;
    }, 1000);
  },
  methods: {
    // 获取时间差
    getTime() {
      let nowTime = new Date().getTime();
      let result = nowTime - new Date("2024-11-30").getTime();
      console.log(result.getFullYear());
    },
    calculateTimeDifference(timestamp1, timestamp2) {
      // 计算时间差（单位：毫秒）
      let timeDifference = Math.abs(timestamp1 - timestamp2);
      // 将时间差转换为秒
      let seconds = Math.floor(timeDifference / 1000);

      // 计算年、月、日、时、分、秒
      let years = Math.floor(seconds / (365 * 24 * 60 * 60));
      seconds -= years * (365 * 24 * 60 * 60);

      let months = Math.floor(seconds / (30 * 24 * 60 * 60));
      seconds -= months * (30 * 24 * 60 * 60);

      let days = Math.floor(seconds / (24 * 60 * 60));
      seconds -= days * (24 * 60 * 60);

      let hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * (60 * 60);

      let minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      // 返回格式化后的字符串
      return `${years}年${months}月${days}日${hours}时${minutes}分${seconds}秒`;
    },
  },
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-content {
  width: 30rem;
  height: 20rem;
  background-image: linear-gradient(
    45deg,
    #2c3e50,
    #27ae60,
    #2980b9,
    #e74c3c,
    #8e44ad
  );
  background-size: 400%;
  animation: bganimation 10s infinite;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
img {
  width: 100%;
  height: 100%;
}
.all-content {
  position: relative;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 300px;
    transform: translateX(-47%);
    font-family: "Times New Roman", Times, serif;
    font-weight: 700;
    color: #fefefe;
    text-shadow: 0 0 0.5em #e60a69ed, 0 0 0.2em #5c5c5c;
    font-size: 1rem;
  }
}
</style>
