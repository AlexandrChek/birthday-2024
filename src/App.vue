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
      <p>Поверни телефон</p>
    </div>
    <div class="fireworks" v-if="isFirework && !started">
      <div class="firework" id="firework-left"></div>
      <div class="firework" id="firework-right"></div>
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
      isFirework: false,
      started: false,
      balloons: 5
    };
  },
  mounted() {
    window.addEventListener('load', () => {
      this.isFirework = true
    })

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
  --dim-green: #369b72;
  --light-green: #42b983;
  --blue-balloon: rgba(0, 0, 255, 0.6);
  --diameter: calc(30px + 1vw);
}

html {
  height: 100vh;
}
body {
  margin: 0;
  text-align: center;
  background: linear-gradient(orange, rgb(126, 8, 126));
  overflow-x: hidden;
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
  background-color: var(--light-green);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.greeting button:hover {
  background-color: var(--dim-green);
}

.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

iframe {
  width: var(--w);
  height: calc(var(--w) * 0.5625);
}

p {
  margin: 0;
  font-size: 27px;
  line-height: 2;
  animation: 1s flickering linear infinite;
}

.firework {
  width: var(--diameter);
  height: var(--diameter);
  border-radius: 50%;
  position: absolute;
  top: 0;
}
#firework-left {
  left: 0;
  animation: firework-left-show 2s linear infinite;
}
#firework-right {
  right: 0;
  animation: firework-right-show 2s linear infinite;
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
  background-color: var(--blue-balloon);
  border-radius: 50%;
  position: relative;
  animation: floatUp 5s linear infinite;
}
.balloon::before {
  content: "";
  width: 10px;
  height: 20px;
  background-color: var(--blue-balloon);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px 10px 0 0;
}

@keyframes firework-left-show {
  0% {
    transform: translate(0%, 0%) scale(0);
    background-color: red;
    opacity: 1;
  }
  33% {
    transform: translate(120%, 120%) scale(1);
    background-color: red;
    opacity: 0;
  }
  34% {
    transform: translate(120%, 120%) scale(0);
    background-color: blue;
    opacity: 1;
  }
  67% {
    transform: translate(240%, 240%) scale(1.2);
    background-color: blue;
    opacity: 0;
  }
  68% {
    transform: translate(240%, 240%) scale(0);
    background-color: green;
    opacity: 1;
  }
  100% {
    transform: translate(350%, 350%) scale(1.4);
    background-color: green;
    opacity: 0;
  }
}

@keyframes firework-right-show {
  0% {
    transform: translate(0%, 0%) scale(0);
    background-color: red;
    opacity: 1;
  }
  33% {
    transform: translate(-120%, 120%) scale(1);
    background-color: red;
    opacity: 0;
  }
  34% {
    transform: translate(-120%, 120%) scale(0);
    background-color: blue;
    opacity: 1;
  }
  67% {
    transform: translate(-240%, 240%) scale(1.2);
    background-color: blue;
    opacity: 0;
  }
  68% {
    transform: translate(-240%, 240%) scale(0);
    background-color: green;
    opacity: 1;
  }
  100% {
    transform: translate(-350%, 350%) scale(1.4);
    background-color: green;
    opacity: 0;
  }
}

@keyframes floatUp {
  0% {transform: translateY(0);}
  100% {transform: translateY(-100vh);}
}

@keyframes flickering {
  0% {color: var(--dim-green);}
  100% {color: var(--light-green);}
}

@media (orientation: landscape), (min-width: 601px) {
  p {
    display: none;
  }
}
</style>