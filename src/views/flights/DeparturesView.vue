<template>
  <base-page-template
    page-title="出發航班"
    page-description="查詢台中國際機場出發航班資訊"
  >
    <!-- 搜尋區 -->
    <div class="mb-12">
      <div class="flex flex-col gap-6 md:flex-row">
        <div class="flex-1">
          <label class="block mb-2 text-sm font-medium text-text-secondary">航班號碼</label>
          <div class="relative">
            <i class="absolute left-4 top-1/2 transform -translate-y-1/2 fas fa-search text-text-tertiary"></i>
            <input
              type="text"
              v-model="searchQuery"
              class="px-4 py-3 w-full rounded-lg border transition-all border-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary duration-fast"
              placeholder="請輸入航班號碼"
            >
          </div>
        </div>
        <div class="flex-1">
          <label class="block mb-2 text-sm font-medium text-text-secondary">日期</label>
          <div class="relative">
            <input
              type="date"
              v-model="selectedDate"
              class="px-4 py-3 w-full rounded-lg border transition-all border-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary duration-fast"
            >
          </div>
        </div>
        <div class="flex-1">
          <label class="block mb-2 text-sm font-medium text-text-secondary">目的地</label>
          <div class="relative">
            <select
              v-model="selectedDestination"
              class="px-4 py-3 w-full rounded-lg border transition-all appearance-none border-border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary duration-fast"
            >
              <option value="">全部目的地</option>
              <option v-for="dest in destinations" :key="dest" :value="dest">
                {{ dest }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- 航班列表 -->
    <div class="w-full">
      <div class="overflow-x-auto bg-white rounded-lg border shadow-md border-border">
        <!-- 桌機表格版 -->
        <table class="hidden min-w-full divide-y divide-border sm:table">
          <thead class="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5">
            <tr>
              <th v-for="(header, index) in tableHeaders" :key="index"
                  class="px-6 py-4 text-xs font-semibold tracking-wider text-left uppercase border-b border-gray-200 transition-all text-text-tertiary hover:bg-background-hover duration-fast">
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody class="bg-background-light">
            <tr v-for="flight in filteredFlights" :key="flight.id"
                class="border-b transition-all hover:bg-background-hover duration-fast border-border/60">
              <td class="px-6 py-4 text-sm font-medium whitespace-nowrap text-brand-primary">
                <span class="flex items-center">
                  {{ flight.flightNo }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm whitespace-nowrap text-text-secondary">
                {{ flight.airline }}
              </td>
              <td class="px-6 py-4 text-sm whitespace-nowrap text-text-secondary">
                <span class="flex items-center">
                  {{ flight.destination }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm whitespace-nowrap text-text-secondary">
                <span class="flex items-center">
                  {{ flight.departureTime }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm whitespace-nowrap text-text-secondary">
                <span class="flex items-center">
                  {{ flight.gate }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span :class="[
                  'inline-flex items-center px-2 py-1 text-xs leading-5 rounded w-fit',
                  {
                    'text-color-success bg-[#e1f4f1]': flight.status === '準時',
                    'text-color-info bg-[#e6ecf1]': flight.status === '已飛',
                    'text-color-warning bg-[#f3ede8]': flight.status === '延遲',
                    'text-color-error bg-[#f9e8ea]': flight.status === '取消'
                  }
                ]">
                  {{ flight.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- 手機卡片版 -->
        <div class="space-y-4 sm:hidden">
          <div v-for="flight in filteredFlights" :key="'mobile-' + flight.id"
               class="p-4 rounded-lg border bg-background-light border-border">
            <div class="flex justify-between items-center mb-2">
              <div class="font-medium text-brand-primary">{{ flight.flightNo }}</div>
              <span :class="[
                'inline-flex items-center px-2 py-1 text-xs leading-5 rounded w-fit',
                {
                  'text-color-success bg-[#e1f4f1]': flight.status === '準時',
                  'text-color-info bg-[#e6ecf1]': flight.status === '已飛',
                  'text-color-warning bg-[#f3ede8]': flight.status === '延遲',
                  'text-color-error bg-[#f9e8ea]': flight.status === '取消'
                }
              ]">
                {{ flight.status }}
              </span>
            </div>
            <div class="space-y-2 text-sm text-text-secondary">
              <div class="flex justify-between">
                <span>航空公司</span>
                <span>{{ flight.airline }}</span>
              </div>
              <div class="flex justify-between">
                <span>目的地</span>
                <span>{{ flight.destination }}</span>
              </div>
              <div class="flex justify-between">
                <span>起飛時間</span>
                <span>{{ flight.departureTime }}</span>
              </div>
              <div class="flex justify-between">
                <span>登機門</span>
                <span>{{ flight.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </base-page-template>
</template>

<script>
import BasePageTemplate from '@/views/BasePageTemplate.vue'

export default {
  name: 'DeparturesView',
  components: {
    BasePageTemplate
  },
  data() {
    return {
      searchQuery: '',
      selectedDate: new Date().toISOString().split('T')[0],
      selectedDestination: '',
      destinations: ['東京', '首爾', '香港', '新加坡', '曼谷', '洛杉磯'],
      tableHeaders: ['航班號碼', '航空公司', '目的地', '起飛時間', '登機門', '狀態'],
      flights: [
        {
          id: 1,
          flightNo: 'CI-101',
          airline: '中華航空',
          destination: '東京',
          departureTime: '10:30',
          gate: 'A1',
          status: '準時'
        },
        // 更多航班資料...
      ]
    }
  },
  computed: {
    filteredFlights() {
      return this.flights.filter(flight => {
        const matchesSearch = flight.flightNo.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesDestination = !this.selectedDestination || flight.destination === this.selectedDestination
        return matchesSearch && matchesDestination
      })
    }
  },
  methods: {
    getStatusClass(status) {
      const classes = {
        '準時': 'bg-green-100 text-green-600',
        '延誤': 'bg-yellow-100 text-yellow-600',
        '取消': 'bg-red-100 text-red-600'
      }
      return classes[status] || 'bg-gray-100 text-text-tertiary'
    },
    getStatusIcon(status) {
      const icons = {
        '準時': 'fas fa-check-circle',
        '延誤': 'fas fa-clock',
        '取消': 'fas fa-times-circle'
      }
      return icons[status] || 'fas fa-info-circle'
    }
  }
}
</script>

<style>
/* 表格樣式優化 */
table {
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  box-shadow: var(--shadow-sm);
}

/* 表格圓角處理 */
thead th:first-child { border-top-left-radius: var(--radius-lg); }
thead th:last-child { border-top-right-radius: var(--radius-lg); }
tbody tr:last-child td:first-child { border-bottom-left-radius: var(--radius-lg); }
tbody tr:last-child td:last-child { border-bottom-right-radius: var(--radius-lg); }

/* 移動端優化 */
@media (max-width: 639px) {
  .table-container {
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    width: calc(100% + 2.5rem);
  }

  td p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
  }
}
</style>
