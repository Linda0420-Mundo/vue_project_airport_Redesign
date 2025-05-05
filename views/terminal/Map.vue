<template>
  <PageLayout title="航站平面圖">
    <div class="mx-auto max-w-6xl">
      <!-- 樓層選擇器 -->
      <div class="mb-8">
        <div class="flex justify-center space-x-4">
          <button v-for="floor in floors" :key="floor.id"
                  @click="selectedFloor = floor.id"
                  :class="[
                    'px-4 py-2 rounded-lg transition-all duration-300',
                    selectedFloor === floor.id
                      ? 'bg-brand-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  ]">
            {{ floor.name }}
          </button>
        </div>
      </div>

      <!-- 平面圖顯示區域 -->
      <div class="relative p-4 bg-white rounded-lg shadow-lg">
        <div class="aspect-w-16 aspect-h-9">
          <img :src="currentFloor.map" :alt="currentFloor.name" class="object-contain w-full h-full">
        </div>

        <!-- 設施標記 -->
        <div v-for="facility in currentFloor.facilities" :key="facility.id"
             class="absolute cursor-pointer group"
             :style="{ left: facility.position.x + '%', top: facility.position.y + '%' }">
          <div class="w-4 h-4 rounded-full bg-brand-primary"></div>
          <div class="absolute left-1/2 p-2 mt-2 whitespace-nowrap bg-white rounded-lg shadow-lg opacity-0 transition-opacity duration-300 -translate-x-1/2 group-hover:opacity-100">
            <p class="text-sm font-medium text-text-primary">{{ facility.name }}</p>
            <p class="text-xs text-text-secondary">{{ facility.description }}</p>
          </div>
        </div>
      </div>

      <!-- 設施列表 -->
      <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="facility in currentFloor.facilities" :key="facility.id"
             class="p-4 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
          <h3 class="mb-2 text-lg font-semibold text-text-primary">{{ facility.name }}</h3>
          <p class="text-sm text-text-secondary">{{ facility.description }}</p>
          <div class="flex items-center mt-2 text-sm text-text-secondary">
            <svg class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            {{ facility.location }}
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/layouts/PageLayout.vue'

export default {
  name: 'TerminalMap',
  components: {
    PageLayout
  },
  data() {
    return {
      selectedFloor: 1,
      floors: [
        {
          id: 1,
          name: '一樓 - 入境大廳',
          map: '/images/terminal/floor1.png',
          facilities: [
            {
              id: 1,
              name: '入境大廳',
              description: '辦理入境手續',
              location: '一樓中央',
              position: { x: 50, y: 50 }
            },
            {
              id: 2,
              name: '行李領取區',
              description: '領取託運行李',
              location: '一樓東側',
              position: { x: 70, y: 60 }
            }
          ]
        },
        {
          id: 2,
          name: '二樓 - 出境大廳',
          map: '/images/terminal/floor2.png',
          facilities: [
            {
              id: 3,
              name: '報到櫃檯',
              description: '辦理登機手續',
              location: '二樓西側',
              position: { x: 30, y: 40 }
            },
            {
              id: 4,
              name: '安檢區',
              description: '安全檢查',
              location: '二樓中央',
              position: { x: 50, y: 50 }
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentFloor() {
      return this.floors.find(floor => floor.id === this.selectedFloor)
    }
  }
}
</script>
