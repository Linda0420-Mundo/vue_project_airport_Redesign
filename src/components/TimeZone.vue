<template>
  <div class="px-4 py-2 bg-none backdrop-blur-none transition-all duration-300 sm:backdrop-blur sm:bg-white w-fit sm:px-2 sm:py-5">
    <div class="flex flex-row items-center sm:text-shadow-none text-shadow-sm sm:flex-col text-text-inverse sm:text-text-secondary">
      <div class="font-bold sm:font-medium sm:text-shadow-none text-shadow-sm sm:text-micro text-heading-sm">{{ currentYear }}</div>
      <div class="my-2 font-bold sm:text-shadow-none text-shadow-lg text-heading-sm">{{ formattedDate.month }}</div>
      <div class="font-bold sm:text-shadow-none text-shadow-sm text-heading-sm">/</div>
      <div class="my-2 font-bold sm:text-shadow-none text-shadow-sm text-heading-sm">{{ formattedDate.day }}</div>
      <div class="font-bold sm:text-shadow-none text-shadow-sm text-heading-sm sm:font-medium sm:text-micro">{{ formattedDate.time }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '--:--',
      currentDate: '--',
      currentWeekday: '--',
      currentYear: new Date().getFullYear(),
      timer: null,
      isLoading: false,
      weekdayMap: {
        Monday: 'MON',
        Tuesday: 'TUE',
        Wednesday: 'WED',
        Thursday: 'THU',
        Friday: 'FRI',
        Saturday: 'SAT',
        Sunday: 'SUN'
      }
    }
  },
  computed: {
    formattedDate() {
      return {
        month: this.currentDate.split('-')[1] || '--',
        day: this.currentDate.split('-')[2] || '--',
        weekday: this.currentWeekday,
        time: this.currentTime
      }
    }
  },
  methods: {
    fetchTime() {
      this.isLoading = true;
      clearInterval(this.timer);

      fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Taipei')
        .then(res => res.json())
        .then(data => {
          const date = new Date(data.dateTime);
          this.updateTimeDisplay(date, data.dayOfWeek);
          this.isLoading = false;
          this.startTimeUpdater();
        })
        .catch(() => {
          this.currentTime = '--:--';
          this.currentDate = '--';
          this.currentWeekday = '--';
          this.isLoading = false;
        });
    },
    updateTimeDisplay(date, dayOfWeek) {
      // 取得年、月、日
      this.currentYear = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      // 取得時間（加入秒數）
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      this.currentTime = `${hours}:${minutes}:${seconds}`;
      this.currentDate = `${this.currentYear}-${month}-${day}`;
      this.currentWeekday = this.weekdayMap[dayOfWeek] || dayOfWeek;
    },
    startTimeUpdater() {
      this.timer = setInterval(() => {
        const now = new Date();
        // 更新時間顯示，加入秒數
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.currentTime = `${hours}:${minutes}:${seconds}`;
      }, 1000);
    }
  },
  mounted() {
    this.fetchTime();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
