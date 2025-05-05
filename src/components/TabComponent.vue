<script>
import FlightSearch from '@/components/FlightsSearchBar.vue'
import {
  Tab,
  TabGroup,
  TabList,
  TabPanels,
  TabPanel,
} from '@headlessui/vue'
export default {
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    FlightSearch
  },
  data() {
    return {
      categories: {
        Recent: [
          {
            id: 1,
            Tab_component: "FlightSearch"
          },
        ],


       航班查詢: [
          {
            id: 1,
            Tab_component: "FlightSearch"// FlightSearch 組件插入這裡
          }
        ]
      }
    }
  }
}
</script>

<template>
  <div class="overflow-hidden relative px-5 py-6 w-full tab-container sm:px-8 sm:py-8 lg:px-10">
    <TabGroup>
      <TabList class="flex w-full p-1 space-x-2 bg-gray-100 bg-opacity-75 max-w-[60%] sm:max-w-[40%] rounded-t-xl">
        <Tab v-for="(category, index) in Object.keys(categories)" :key="index" as="template" v-slot="{ selected }">
          <button :class="[
            'w-full py-2.5 tab-label leading-5 transition-all duration-200',
            'rounded-t-lg ring-offset-2 focus:outline-none ' ,
            selected
              ? 'bg-[#7260a3] text-white '
              : 'text-gray-700 hover:bg-gray-200/70 hover:text-gray-900',
          ]">
           <p class="whitespace-nowrap">{{ category }}</p>
          </button>
        </Tab>
      </TabList>

      <TabPanels class="">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          class="focus:outline-none tab-panel-rounded"
        >
          <div v-for="post in posts" :key="post.id" class="overflow-hidden bg-gray-100 bg-opacity-75 rounded-b-2xl">
            <component :is="post.Tab_component" />
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<style>

/* 頁籤相關樣式 */
.tab-label {
  font-size: var(--font-body-small);
  font-weight: var(--weight-medium);
  letter-spacing: 0.01em;
  padding: clamp(0.5rem, 1.8vw, 0.75rem) clamp(0.75rem, 2.5vw, 1rem);
}

/* 確保標籤的一致視覺效果 */
[role="tab"] {
  position: relative;
}

[role="tab"][aria-selected="true"] {
  font-weight: var(--weight-medium);
}

/* 優化頁籤過渡效果 */
[role="tabpanel"] {
  transition: opacity 0.2s ease-in-out;
}

/* 確保標籤組件與整體設計協調 */
[role="tablist"] {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: clamp(0.25rem, 1vw, 0.375rem);
  border-radius: clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 2vw, 0.75rem) 0 0;
}

/* 響應式間距調整 */
.tab-container {
  padding: clamp(1rem, 3vw, 1.5rem) clamp(1.25rem, 4vw, 2rem);
}

/* 面板圓角調整 */
.tab-panel-rounded {
  border-radius: 0 clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 2vw, 0.75rem);
}
</style>
