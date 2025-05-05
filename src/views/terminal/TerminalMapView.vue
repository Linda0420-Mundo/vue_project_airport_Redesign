<template>
  <base-page-template
    page-title="航站平面圖"
    page-description="台中國際機場航站平面圖與設施位置"
  >
    <!-- 航站選擇 -->
    <div class="mb-8">
      <div class="flex space-x-4">
        <button
          v-for="terminal in terminals"
          :key="terminal.id"
          @click="handleTerminalClick(terminal.id)"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedTerminal === terminal.id
              ? 'bg-brand-primary text-text-inverse'
              : 'bg-background-off text-text-secondary hover:bg-background-hover'
          ]"
        >
          {{ terminal.name }}
        </button>
      </div>
    </div>

    <!-- 樓層選擇 -->
    <div class="mb-8">
      <div class="flex space-x-4">
        <button
          v-for="floor in currentTerminal.floors"
          :key="floor.id"
          @click="handleFloorClick(floor.id)"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedFloor === floor.id
              ? 'bg-brand-primary text-text-inverse'
              : 'bg-background-off text-text-secondary hover:bg-background-hover'
          ]"
        >
          {{ floor.name }}
        </button>
      </div>
    </div>

    <!-- 平面圖 -->
    <div class="mb-8">
      <div class="relative w-full h-[600px] bg-background-off rounded-lg overflow-hidden">
        <img
          :src="currentFloor.mapImage"
          :alt="currentFloor.name + '平面圖'"
          class="object-contain w-full h-full"
        />
      </div>
    </div>

    <!-- 設施列表 -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="facility in currentFloor.facilities"
        :key="facility.id"
        class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color"
      >
        <div class="flex items-center mb-4">
          <div class="flex justify-center items-center w-12 h-12 rounded-full text-text-inverse bg-brand-primary">
            <font-awesome-icon :icon="facility.icon" class="text-xl" />
          </div>
          <h4 class="ml-3 font-medium text-heading-sm text-text-primary">{{ facility.name }}</h4>
        </div>
        <p class="mb-4 text-text-secondary">{{ facility.description }}</p>
        <div class="flex items-center text-body-sm text-text-tertiary">
          <div class="flex justify-center items-center w-6 h-6">
            <font-awesome-icon icon="map-marker-alt" class="text-sm text-text-tertiary" />
          </div>
          <span class="ml-2">位置：{{ facility.location }}</span>
        </div>
      </div>
    </div>
  </base-page-template>
</template>

<script>
import BasePageTemplate from '../../views/BasePageTemplate.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUtensils, faParking, faMotorcycle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faUtensils, faParking, faMotorcycle, faMapMarkerAlt)

export default {
  name: 'TerminalMapView',
  components: {
    BasePageTemplate,
    FontAwesomeIcon
  },
  data() {
    return {
      selectedTerminal: 1,  // 預設選擇第一航站
      selectedFloor: 1,    // 預設選擇三樓
      terminals: [
        {
          id: 1,
          name: '第一航站',
          floors: [
            {
              id: 1,
              name: '三樓',
              mapImage: '/images/terminal/t1-3f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 2,
              name: '二樓',
              mapImage: '/images/terminal/t1-2f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 3,
              name: '一樓',
              mapImage: '/images/terminal/t1-1f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 4,
              name: 'B1',
              mapImage: '/images/terminal/t1-b1.png',
              facilities: [
                {
                  id: 19,
                  name: '美食街',
                  icon: ['fas', 'utensils'],
                  description: '提供各式餐飲服務',
                  location: 'B1 中央區'
                },
                {
                  id: 20,
                  name: '停車場',
                  icon: ['fas', 'parking'],
                  description: '地下停車場',
                  location: 'B1 東側'
                },
                {
                  id: 21,
                  name: '機車停車場',
                  icon: ['fas', 'motorcycle'],
                  description: '機車停車場',
                  location: 'B1 西側'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: '第二航站',
          floors: [
            {
              id: 5,
              name: '三樓',
              mapImage: '/images/terminal/t2-3f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 6,
              name: '二樓',
              mapImage: '/images/terminal/t2-2f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 7,
              name: '一樓',
              mapImage: '/images/terminal/t2-1f.png',
              facilities: [
                // ... existing code ...
              ]
            },
            {
              id: 8,
              name: 'B1',
              mapImage: '/images/terminal/t2-b1.png',
              facilities: [
                {
                  id: 22,
                  name: '美食街',
                  icon: 'fas fa-utensils',
                  description: '提供各式餐飲服務',
                  location: 'B1 中央區'
                },
                {
                  id: 23,
                  name: '停車場',
                  icon: 'fas fa-parking',
                  description: '地下停車場',
                  location: 'B1 東側'
                },
                {
                  id: 24,
                  name: '機車停車場',
                  icon: 'fas fa-motorcycle',
                  description: '機車停車場',
                  location: 'B1 西側'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    currentTerminal() {
      return this.terminals.find(t => t.id === this.selectedTerminal) || this.terminals[0]
    },
    currentFloor() {
      return this.currentTerminal.floors.find(f => f.id === this.selectedFloor) || this.currentTerminal.floors[0]
    }
  },
  methods: {
    handleTerminalClick(terminalId) {
      this.selectedTerminal = terminalId
      // 重置樓層選擇為該航站的第一個樓層
      this.selectedFloor = this.currentTerminal.floors[0].id
    },
    handleFloorClick(floorId) {
      this.selectedFloor = floorId
    }
  }
}
</script>
