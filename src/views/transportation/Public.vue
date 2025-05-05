<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">大眾運輸資訊</h1>

    <!-- 運輸方式選擇 -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-4">
        <button
          v-for="type in transportTypes"
          :key="type.id"
          @click="selectedType = type.id"
          :class="[
            'px-6 py-3 rounded-lg transition-colors',
            selectedType === type.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          ]"
        >
          {{ type.name }}
        </button>
      </div>
    </div>

    <!-- 運輸資訊卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="info in filteredTransportInfo"
        :key="info.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-4">{{ info.title }}</h3>
          <div class="space-y-4">
            <div v-for="(detail, index) in info.details" :key="index" class="flex items-start">
              <div class="w-6 h-6 mr-3 mt-1">
                <component :is="detail.icon" class="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <p class="font-medium">{{ detail.label }}</p>
                <p class="text-gray-600">{{ detail.value }}</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <a
              :href="info.link"
              target="_blank"
              class="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              查看詳情
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicTransportView',
  data() {
    return {
      selectedType: 'all',
      transportTypes: [
        { id: 'all', name: '全部' },
        { id: 'mrt', name: '捷運' },
        { id: 'bus', name: '公車' },
        { id: 'train', name: '火車' }
      ],
      transportInfo: [
        {
          id: 1,
          type: 'mrt',
          title: '機場捷運',
          details: [
            {
              label: '營運時間',
              value: '06:00 - 23:00',
              icon: 'ClockIcon'
            },
            {
              label: '票價',
              value: 'NT$ 160',
              icon: 'TicketIcon'
            },
            {
              label: '行車時間',
              value: '約35分鐘',
              icon: 'TimerIcon'
            }
          ],
          link: 'https://www.tymetro.com.tw'
        },
        {
          id: 2,
          type: 'bus',
          title: '機場巴士',
          details: [
            {
              label: '營運時間',
              value: '24小時',
              icon: 'ClockIcon'
            },
            {
              label: '票價',
              value: 'NT$ 140-160',
              icon: 'TicketIcon'
            },
            {
              label: '行車時間',
              value: '約45-60分鐘',
              icon: 'TimerIcon'
            }
          ],
          link: 'https://www.airport-bus.com.tw'
        },
        {
          id: 3,
          type: 'train',
          title: '機場快線',
          details: [
            {
              label: '營運時間',
              value: '05:30 - 22:30',
              icon: 'ClockIcon'
            },
            {
              label: '票價',
              value: 'NT$ 180',
              icon: 'TicketIcon'
            },
            {
              label: '行車時間',
              value: '約30分鐘',
              icon: 'TimerIcon'
            }
          ],
          link: 'https://www.airport-express.com.tw'
        }
      ]
    }
  },
  computed: {
    filteredTransportInfo() {
      if (this.selectedType === 'all') {
        return this.transportInfo
      }
      return this.transportInfo.filter(info => info.type === this.selectedType)
    }
  }
}
</script>
