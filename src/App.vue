<template>
  <div id="app">
    <div v-if="!started" class="greeting">
      <h1>С Днём Рождения, Наташа!!!</h1>
      <button @click="startVideo">Старт!</button>
    </div>
    <div v-else class="video-container">
      <iframe
        src="https://www.youtube.com/embed/WWRzjhk6who?si=3SYhaPoiq1v4IOX-"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="balloons" v-if="!started">
      <div v-for="n in balloons" :key="n" class="balloon"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      started: false,
      balloons: 5
    };
  },
  mounted() {
    this.getNumber()
    window.addEventListener('resize', this.getNumber)
  },
  methods: {
    getNumber() {
      this.balloons = Math.round(window.innerWidth / 75)
    },
    startVideo() {
      this.started = true
    }
  },
};
</script>

<style>
@import "~vue-animate/dist/vue-animate.min.css";

:root {
  --w: min(100vw, 1450px);
}

html {
  height: 100vh;
}
body {
  margin: 0;
  text-align: center;
  background: linear-gradient(orange, rgb(126, 8, 126));
}
.greeting {
  margin-top: calc(50vh - ((2.5em * 1.2 * 2 + 20px + 1.5em + 20px) / 2));
}
.greeting h1 {
  font-size: 2.5em;
  line-height: 1.2;
  margin: 0 0 20px 0;
  color: red;
  text-shadow: 0 0 3px black;
}
.greeting button {
  font-size: 1.5em;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.greeting button:hover {
  background-color: #369b72;
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

iframe {
  width: var(--w);
  height: calc(var(--w) * 0.5625);
}

.balloons {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  pointer-events: none;
}

.balloon {
  width: 50px;
  height: 70px;
  background-color: rgba(0, 0, 255, 0.6);
  border-radius: 50%;
  position: relative;
  animation: floatUp 5s linear infinite;
}

.balloon::before {
  content: "";
  width: 10px;
  height: 20px;
  background-color: rgba(0, 0, 255, 0.6);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px 10px 0 0;
}

@keyframes floatUp {
  0% {transform: translateY(0)}
  100% {transform: translateY(-100vh)}
}
</style>