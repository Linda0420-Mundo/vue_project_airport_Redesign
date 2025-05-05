<script>
export default {
  name: 'QuickAccess',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      quickLinks: [
        {
          title: '航班查詢',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
          link: '/flights'
        },
        {
          title: '停車資訊',
          icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
          link: '/parking'
        },
        {
          title: '商店導覽',
          icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z',
          link: '/shops'
        },
        {
          title: '服務設施',
          icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
          link: '/facilities'
        }
      ],
      isDragging: false,
      startX: 0,
      scrollLeft: 0,
      showLeftScroll: false,
      showRightScroll: false
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.quickLinks.length / this.itemsPerPage)
    },
    chunkedLinks() {
      const chunks = []
      for (let i = 0; i < this.quickLinks.length; i += this.itemsPerPage) {
        chunks.push(this.quickLinks.slice(i, i + this.itemsPerPage))
      }
      return chunks
    }
  },
  mounted() {
    this.checkScroll()
    window.addEventListener('resize', this.checkScroll)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScroll)
  },
  methods: {
    startDrag(event) {
      this.isDragging = true
      this.startX = event.type === 'mousedown' ? event.pageX : event.touches[0].pageX
      const container = this.$refs.scrollContainer
      this.scrollLeft = container.scrollLeft
    },
    onDrag(event) {
      if (!this.isDragging) return
      event.preventDefault()

      const currentX = event.type === 'mousemove' ? event.pageX : event.touches[0].pageX
      const diff = currentX - this.startX
      const container = this.$refs.scrollContainer
      container.scrollLeft = this.scrollLeft - diff
    },
    endDrag() {
      this.isDragging = false
    },
    checkScroll() {
      const container = this.$refs.scrollContainer
      if (!container) return

      const { scrollLeft, scrollWidth, clientWidth } = container
      this.showLeftScroll = scrollLeft > 0
      this.showRightScroll = scrollLeft < scrollWidth - clientWidth - 1
    }
  }
}
</script>

<template>
  <div class="px-5 py-5 my-20 w-full sm:px-8 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <h2 class="text-2xl font-medium text-[#7260a3] mb-3 text-center">常用功能</h2>

      <!-- 輪播容器 -->
      <div class="relative w-full">
        <!-- 左側提示 -->
        <div
          v-if="showLeftScroll"
          class="flex absolute top-0 bottom-0 left-0 z-20 justify-center items-center pr-4 bg-white cursor-pointer w-fit group"
        >
          <div class="flex flex-col items-center">
            <svg class="w-4 h-4 animate-pulse text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-[9px] text-text-secondary  mt-1 opacity-100 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">scroll</span>
          </div>
        </div>

        <!-- 輪播內容 -->
        <div
          class="overflow-x-auto scrollbar-hide"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="endDrag"
          @mouseleave="endDrag"
          @touchstart="startDrag"
          @touchmove="onDrag"
          @touchend="endDrag"
          @scroll="checkScroll"
          ref="scrollContainer"
        >
          <div
            class="flex gap-4 justify-evenly transition-transform duration-300 ease-out"
          >
            <router-link
              v-for="(item, index) in quickLinks"
              :key="index"
              :to="item.link"
              class="group relative bg-white p-6 py-20 rounded-full transition-all duration-500 border border-[#eae6f2] hover:border-[#7260a3] overflow-hidden w-1/4  max-w-[160px] min-w-[140px] flex-shrink-0"

            >
              <div class="flex relative z-10 flex-col items-center">
                <div class="p-3 rounded-full mb-3 text-[#7260a3]  transition-all duration-500">
                  <svg
                    class="w-6 h-6 transition-transform duration-500 transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="item.icon"
                    ></path>
                  </svg>
                </div>
                <span class="text-sm text-[#7260a3] group-hover:text-[#7260a3] transition-colors duration-500">
                  {{ item.title }}
                </span>
              </div>
              <div class="absolute inset-0 bg-[#7260a3] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </router-link>
          </div>
        </div>

        <!-- 右側提示 -->
        <div
          v-if="showRightScroll"
          class="flex absolute top-0 right-0 bottom-0 z-10 justify-center items-center pl-4 w-8 bg-white bg-gradient-to-l cursor-pointer group"
        >
          <div class="flex flex-col items-center">
            <svg class="w-4 h-4 animate-pulse text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-[9px] text-text-secondary  mt-1 opacity-100 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">scroll</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style >





/* 隱藏滾動條 */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}

/* 滑動提示動畫 */
@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>

