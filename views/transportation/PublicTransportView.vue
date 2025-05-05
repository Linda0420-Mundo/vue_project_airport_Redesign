<template>
  <div class="relative">
    <!-- 電腦版 -->
    <div class="hidden md:flex">
      <!-- 左側選單 -->
      <div ref="sidebarContainer" class="w-64 bg-[#F5F2ED]">
        <div ref="sidebar" class="p-8 w-64">
          <div class="mb-12">
            <h1 class="mb-2 text-2xl font-bold">大眾運輸</h1>
            <p class="text-sm text-gray-600">台中國際機場交通資訊</p>
          </div>

          <div class="space-y-4">
            <button
              v-for="(transport, index) in transportOptions"
              :key="index"
              @click="selectTransport(transport.id, index)"
              class="py-3 w-full text-left border-b border-gray-200 transition-colors duration-300"
              :class="[
                selectedTransport === transport.id
                  ? 'border-brand-primary text-brand-primary font-medium'
                  : 'text-gray-600 hover:text-brand-primary'
              ]"
            >
              <span class="block text-lg">{{ transport.name }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 右側內容區域 -->
      <div class="flex-1 border-l border-gray-200" ref="contentWrapper">
        <div v-if="selectedTransport" class="relative">
          <div
            v-for="(transport, index) in transportOptions"
            :key="transport.id"
            :ref="'section' + index"
            class="p-8"
          >
            <div class="mx-auto space-y-12 max-w-4xl">
              <!-- 主要圖片區域 -->
              <div class="overflow-hidden rounded-2xl shadow-xl">
                <img
                  :src="transportInfo[transport.id].routeMap"
                  :alt="transportInfo[transport.id].name"
                  class="w-full h-[500px] object-cover"
                >
              </div>

              <!-- 資訊卡片區域 -->
              <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
                <!-- 票價資訊 -->
                <div class="p-6">
                  <h3 class="mb-4 text-xl font-bold text-gray-900">票價資訊</h3>
                  <div class="space-y-4">
                    <div v-for="(fare, idx) in transportInfo[transport.id].fares" :key="idx"
                      class="p-4">
                      <div class="font-medium text-brand-primary">{{ fare.type }}</div>
                      <div class="my-2 text-2xl font-bold">NT$ {{ fare.price }}</div>
                      <div class="text-sm text-gray-600">{{ fare.description }}</div>
                    </div>
                  </div>
                </div>

                <!-- 營運時間 -->
                <div class="p-6">
                  <h3 class="mb-4 text-xl font-bold text-gray-900">營運時間</h3>
                  <div class="space-y-4">
                    <div v-for="(schedule, idx) in transportInfo[transport.id].schedules" :key="idx"
                      class="p-4">
                      <div class="text-sm text-gray-600">{{ schedule.day }}</div>
                      <div class="text-xl font-bold text-brand-primary">{{ schedule.time }}</div>
                    </div>
                  </div>
                </div>

                <!-- 注意事項 -->
                <div class="p-6 md:col-span-2">
                  <h3 class="mb-4 text-xl font-bold text-gray-900">注意事項</h3>
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div v-for="(note, idx) in transportInfo[transport.id].notes" :key="idx"
                      class="flex items-start p-4">
                      <div class="flex flex-shrink-0 justify-center items-center mr-4 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary">
                        {{ idx + 1 }}
                      </div>
                      <p class="text-gray-600">{{ note }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 手機版 -->
    <div class="block md:hidden">
      <!-- 手機版分類選擇器 -->
      <div class="bg-[#F5F2ED] sticky top-0 z-10">
        <div class="p-4">
          <div class="mb-4">
            <h1 class="text-xl font-bold">大眾運輸</h1>
          </div>
          <div class="flex space-x-2 overflow-x-auto pb-2">
            <button
              v-for="(transport, index) in transportOptions"
              :key="index"
              @click="selectTransportMobile(transport.id)"
              class="px-4 py-2 whitespace-nowrap transition-colors duration-300"
              :class="[
                selectedTransport === transport.id
                  ? 'text-brand-primary font-medium'
                  : 'text-gray-600'
              ]"
            >
              {{ transport.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- 手機版內容區域 -->
      <div v-if="selectedTransport">
        <div
          v-for="transport in transportOptions"
          :key="transport.id"
          v-show="selectedTransport === transport.id"
          class="p-4"
        >
          <div class="mx-auto space-y-12 max-w-4xl">
            <!-- 主要圖片區域 -->
            <div class="overflow-hidden rounded-2xl shadow-xl">
              <img
                :src="transportInfo[transport.id].routeMap"
                :alt="transportInfo[transport.id].name"
                class="w-full h-[300px] object-cover"
              >
            </div>

            <!-- 資訊卡片區域 -->
            <div class="space-y-8">
              <!-- 票價資訊 -->
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">票價資訊</h3>
                <div class="space-y-4">
                  <div v-for="(fare, idx) in transportInfo[transport.id].fares" :key="idx"
                    class="p-4">
                    <div class="font-medium text-brand-primary">{{ fare.type }}</div>
                    <div class="my-2 text-2xl font-bold">NT$ {{ fare.price }}</div>
                    <div class="text-sm text-gray-600">{{ fare.description }}</div>
                  </div>
                </div>
              </div>

              <!-- 營運時間 -->
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">營運時間</h3>
                <div class="space-y-4">
                  <div v-for="(schedule, idx) in transportInfo[transport.id].schedules" :key="idx"
                    class="p-4">
                    <div class="text-sm text-gray-600">{{ schedule.day }}</div>
                    <div class="text-xl font-bold text-brand-primary">{{ schedule.time }}</div>
                  </div>
                </div>
              </div>

              <!-- 注意事項 -->
              <div class="p-6">
                <h3 class="mb-4 text-xl font-bold text-gray-900">注意事項</h3>
                <div class="space-y-4">
                  <div v-for="(note, idx) in transportInfo[transport.id].notes" :key="idx"
                    class="flex items-start p-4">
                    <div class="flex flex-shrink-0 justify-center items-center mr-4 w-8 h-8 rounded-full bg-brand-primary/10 text-brand-primary">
                      {{ idx + 1 }}
                    </div>
                    <p class="text-gray-600">{{ note }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PublicTransportView',
  data() {
    return {
      isMobile: false,
      selectedTransport: 'mrt',
      currentSection: 0,
      transportOptions: [
        {
          id: 'mrt',
          name: '機場捷運',
          description: '快速便捷的機場捷運系統',
          icon: '/icons/mrt.png'
        },
        {
          id: 'bus',
          name: '客運巴士',
          description: '多條路線連接機場與市區',
          icon: '/icons/bus.png'
        },
        {
          id: 'taxi',
          name: '計程車',
          description: '24小時計程車服務',
          icon: '/icons/taxi.png'
        }
      ],
      transportInfo: {
        mrt: {
          name: '機場捷運',
          routeMap: '/images/mrt-route.jpg',
          fares: [
            { type: '普通票', price: '160', description: '一般旅客' },
            { type: '優待票', price: '80', description: '老人、身心障礙者' },
            { type: '團體票', price: '120', description: '10人以上團體' }
          ],
          schedules: [
            { day: '平日', time: '06:00-23:00' },
            { day: '假日', time: '06:00-23:00' }
          ],
          notes: [
            '可使用悠遊卡、一卡通等電子票證',
            '直達車約35分鐘，普通車約50分鐘',
            '建議提前10分鐘抵達月台'
          ]
        },
        bus: {
          name: '客運巴士',
          routeMap: '/images/bus-route.jpg',
          fares: [
            { type: '全票', price: '140', description: '一般旅客' },
            { type: '半票', price: '70', description: '老人、身心障礙者' }
          ],
          schedules: [
            { day: '平日', time: '24小時營運' },
            { day: '假日', time: '24小時營運' }
          ],
          notes: [
            '可使用悠遊卡、一卡通等電子票證',
            '部分路線提供行李放置空間',
            '建議提前查詢班次時間'
          ]
        },
        taxi: {
          name: '計程車',
          routeMap: '/images/taxi-route.jpg',
          fares: [
            { type: '跳表計費', price: '約300-1000', description: '依實際里程計費' }
          ],
          schedules: [
            { day: '全年無休', time: '24小時營運' }
          ],
          notes: [
            '機場排班計程車提供固定費率',
            '建議上車前先確認車資',
            '可請飯店代叫計程車'
          ]
        }
      }
    }
  },
  methods: {
    initScrollTriggers() {
      if (this.isMobile) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        return
      }

      ScrollTrigger.getAll().forEach(trigger => trigger.kill())

      const sidebar = this.$refs.sidebar
      const contentWrapper = this.$refs.contentWrapper

      ScrollTrigger.create({
        trigger: contentWrapper,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: () => {
          const scrollY = window.scrollY
          const maxScroll = contentWrapper.offsetHeight - window.innerHeight

          if (scrollY <= 0) {
            gsap.set(sidebar, { y: 0 })
          } else if (scrollY >= maxScroll) {
            gsap.set(sidebar, { y: maxScroll })
          } else {
            gsap.set(sidebar, { y: scrollY })
          }
        }
      })

      this.transportOptions.forEach((transport, index) => {
        const section = this.$refs['section' + index][0]

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            this.selectedTransport = transport.id
            this.currentSection = index
          },
          onEnterBack: () => {
            this.selectedTransport = transport.id
            this.currentSection = index
          }
        })
      })
    },
    selectTransport(transportId, index) {
      if (!this.isMobile) {
        this.selectedTransport = transportId
        this.currentSection = index
        const section = this.$refs['section' + index][0]
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    selectTransportMobile(transportId) {
      this.selectedTransport = transportId
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768
      this.initScrollTriggers()
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    window.removeEventListener('resize', this.checkMobile)
  }
}
</script>

<style scoped>
.sidebar-container {
  position: relative;
  z-index: 10;
}
</style>
