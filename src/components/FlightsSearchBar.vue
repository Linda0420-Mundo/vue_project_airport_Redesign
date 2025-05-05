<script>
// import TimeZones from "@/components/TimeZone.vue"
import { animate, svg } from 'animejs'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    FontAwesomeIcon,
    // TimeZones
  },
  data() {
    return {
      flights: [
        {
          FlightNumber: 'BR123',
          ScheduleDepartureTime: '2025-04-13T10:00:00',
          ScheduleArrivalTime: '2025-04-13T12:00:00',
          DepartureAirportID: 'TPE',
          ArrivalAirportID: 'HND',
          DepartureRemark: '準時',
        },
        {
          FlightNumber: 'CI456',
          ScheduleDepartureTime: '2025-04-14T14:00:00',
          ScheduleArrivalTime: '2025-04-14T16:30:00',
          DepartureAirportID: 'TSA',
          ArrivalAirportID: 'KIX',
          DepartureRemark: '已飛',
        },
        {
          FlightNumber: 'JL789',
          ScheduleDepartureTime: '2025-04-15T08:30:00',
          ScheduleArrivalTime: '2025-04-15T11:00:00',
          DepartureAirportID: 'HND',
          ArrivalAirportID: 'TPE',
          DepartureRemark: '延遲',
        },
        {
          FlightNumber: 'NH001',
          ScheduleDepartureTime: '2025-04-16T06:00:00',
          ScheduleArrivalTime: '2025-04-16T08:00:00',
          DepartureAirportID: 'NRT',
          ArrivalAirportID: 'TSA',
          DepartureRemark: '準時',
        },
        {
          FlightNumber: 'BR789',
          ScheduleDepartureTime: '2025-04-17T18:00:00',
          ScheduleArrivalTime: '2025-04-17T21:00:00',
          DepartureAirportID: 'TPE',
          ArrivalAirportID: 'ICN',
          DepartureRemark: '已飛',
        },
        {
          FlightNumber: 'CI888',
          ScheduleDepartureTime: '2025-04-18T09:00:00',
          ScheduleArrivalTime: '2025-04-18T11:30:00',
          DepartureAirportID: 'TSA',
          ArrivalAirportID: 'HKG',
          DepartureRemark: '取消',
        },
        {
          FlightNumber: 'VZ999',
          ScheduleDepartureTime: '2025-04-19T20:00:00',
          ScheduleArrivalTime: '2025-04-19T23:30:00',
          DepartureAirportID: 'DMK',
          ArrivalAirportID: 'TPE',
          DepartureRemark: '延遲',
        },
        {
          FlightNumber: 'MM321',
          ScheduleDepartureTime: '2025-04-20T13:00:00',
          ScheduleArrivalTime: '2025-04-20T16:00:00',
          DepartureAirportID: 'KIX',
          ArrivalAirportID: 'TSA',
          DepartureRemark: '準時',
        },
        {
          FlightNumber: 'JL777',
          ScheduleDepartureTime: '2025-04-21T07:30:00',
          ScheduleArrivalTime: '2025-04-21T10:00:00',
          DepartureAirportID: 'HND',
          ArrivalAirportID: 'KHH',
          DepartureRemark: '已飛',
        },
        {
          FlightNumber: 'CX168',
          ScheduleDepartureTime: '2025-04-22T15:00:00',
          ScheduleArrivalTime: '2025-04-22T17:30:00',
          DepartureAirportID: 'HKG',
          ArrivalAirportID: 'TPE',
          DepartureRemark: '準時',
        }
      ],
      startDate: '',
      selectedStatus: '',
      company: '',
      showAll: false
    }
  },
  computed: {
    filteredFlights() {
      return this.flights.filter(f => {
        const matchDate = !this.startDate || f.ScheduleDepartureTime.startsWith(this.startDate)
        const matchStatus = !this.selectedStatus || f.DepartureRemark === this.selectedStatus
        const matchCompany = !this.company || f.FlightNumber.includes(this.company.toUpperCase())
        return matchDate && matchStatus && matchCompany
      })
    },
    displayedFlights() {
      return this.showAll ? this.filteredFlights : this.filteredFlights.slice(0, 3)
    }
  },
  methods: {
    filterFlights() {
      this.showAll = false
    },
    formatScheduleTime(datetime) {
      const date = new Date(datetime);
      const dateStr = date.toLocaleDateString('zh-TW');
      const timeStr = date.toLocaleTimeString('zh-TW', { hour12: false });

      return `<div class="text-body-sm">
               <div class="font-medium text-text-primary">${dateStr}</div>
        <div class="text-text-tertiary">${timeStr}</div>

      </div>`;
    }
  },
  mounted() {

const flightPath = svg.createMotionPath(this.$refs.flightPath);

animate('.plane', {
  ease: 'linear',
  duration: 15000,
  loop: true,
  translateX: flightPath.translateX,
  translateY: flightPath.translateY,
  rotate: flightPath.rotate,
  autoRotate: {
    enabled: true,
    angle: 90
  }
});

// 線條繪製動畫
animate(svg.createDrawable(this.$refs.flightPath), {
  draw: '0 1',
  ease: 'linear',
  duration: 15000, // 匹配飛機速度
  loop: true
});
}
}
</script>

<template>
  <div class="px-5 py-5 rounded-2xl sm:px-8 lg:px-12">

    <div class="flex justify-between items-center mx-auto w-full">
      <div>
        <h2 class="font-bold tracking-tight leading-tight text-heading-md text-text-primary">
          航班查詢
        </h2>
        <p class="mt-3 leading-normal text-body font-regular text-text-secondary">請選擇條件來查詢航班資訊。</p>
      </div>
    </div>

    <div class="mx-auto mt-8 sm:mt-10">
      <div class="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-6">
        <!-- 日期選擇 -->
        <div class="flex flex-wrap col-span-2 gap-y-2 sm:col-auto">
          <label for="start-date" class="block font-medium leading-snug text-body-sm text-text-secondary">航班日期</label>
          <input
            type="date"
            id="start-date"
            v-model="startDate"
            @change="filterFlights"
            class="block w-full text-body text-text-primary px-4 py-3 bg-white/50 border border-border-color rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 h-[44px] sm:h-[48px]"
          />
        </div>

        <!-- 狀態選擇 -->
        <div class="flex flex-wrap col-span-2 gap-y-2 sm:col-auto">
          <label for="status" class="block w-full font-medium leading-snug text-body-sm text-text-secondary">航班狀態</label>
          <select
            id="status"
            v-model="selectedStatus"
            @change="filterFlights"
            class="block w-full text-body text-text-primary px-4 py-3 bg-white/50 border border-border-color rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right pr-10 h-[44px] sm:h-[48px]"
            style="background-image: url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%235f3dc4\' stroke-width=\'2\'  stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e'); background-size: 16px;"
          >
            <option value="" class="text-body-sm">所有狀態</option>
            <option value="已飛" class="text-body-sm">已飛</option>
            <option value="準時" class="text-body-sm">準時</option>
            <option value="延遲" class="text-body-sm">延遲</option>
            <option value="取消" class="text-body-sm">取消</option>
          </select>
        </div>

        <!-- 公司 -->
        <div class="flex flex-wrap col-span-2 gap-y-2">
          <label for="company" class="block w-full font-medium leading-snug text-body-sm text-text-secondary">航空公司</label>
          <input
            type="text"
            id="company"
            v-model="company"
            @input="filterFlights"
            class="block w-full text-body text-text-primary px-4 py-3 bg-white/50 border border-border-color rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 h-[44px] sm:h-[48px]"
            placeholder="輸入公司代碼，如 BR、CI"
          />
        </div>

        <!-- 結果 -->
        <div v-if="filteredFlights.length === 0" class="col-span-2 py-10 mt-6 text-center rounded-2xl text-text-tertiary bg-background-off">
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-4 w-14 h-14 text-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="font-medium text-body-xl text-text-secondary">沒有找到符合條件的航班。</p>
          <p class="mt-2 text-body text-text-tertiary">請嘗試調整搜索條件。</p>
        </div>

        <div v-else class="col-span-2 mt-6">
          <div class="overflow-hidden min-w-full rounded-2xl shadow-md">
            <!-- 桌機表格版 -->
            <table class="hidden min-w-full border-collapse sm:table">
              <thead class="bg-brand-primary text-text-inverse">
                <tr class="h-14 md:h-16">
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">航班號</th>
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">出發時間</th>
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">到達時間</th>
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">出發機場</th>
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">到達機場</th>
                  <th scope="col" class="px-3 py-4 font-semibold text-left text-body-sm">航班狀態</th>
                </tr>
              </thead>
              <tbody class="divide-y bg-background-light divide-border-color">
                <tr v-for="(flight, index) in displayedFlights" :key="index" class="h-14 transition-colors hover:bg-background-hover md:h-16">
                  <td class="px-3 py-4 font-medium text-body-sm text-text-primary">{{ flight.FlightNumber }}</td>
                  <td class="px-3 py-4 text-body-sm text-text-secondary" v-html="formatScheduleTime(flight.ScheduleDepartureTime)"></td>
                  <td class="px-3 py-4 text-body-sm text-text-secondary" v-html="formatScheduleTime(flight.ScheduleArrivalTime)"></td>
                  <td class="px-3 py-4 text-body-sm text-text-secondary">{{ flight.DepartureAirportID }}</td>
                  <td class="px-3 py-4 text-body-sm text-text-secondary">{{ flight.ArrivalAirportID }}</td>
                  <td class="px-3 py-4">
                    <span :class="[
                      'flex items-center px-2 w-fit py-1 text-caption font-semibold rounded',
                      {
                        'text-color-success bg-[#e1f4f1]': flight.DepartureRemark === '準時',
                        'text-color-info bg-[#e6ecf1]': flight.DepartureRemark === '已飛',
                        'text-color-warning bg-[#f3ede8]': flight.DepartureRemark === '延遲',
                        'text-color-error bg-[#f9e8ea]': flight.DepartureRemark === '取消'
                      }
                    ]">
                      {{ flight.DepartureRemark }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <!-- 手機卡片版 -->
            <div class="space-y-4 sm:hidden">
              <div v-for="(flight, index) in displayedFlights" :key="'mobile-' + index" class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <div class="font-semibold text-body text-brand-primary">{{ flight.FlightNumber }}</div>
                  <span :class="[
                    'px-2 py-1 text-caption w-fit font-semibold rounded',
                    {
                      'text-color-success bg-[#e1f4f1]': flight.DepartureRemark === '準時',
                      'text-color-info bg-[#e6ecf1]': flight.DepartureRemark === '已飛',
                      'text-color-warning bg-[#f3ede8]': flight.DepartureRemark === '延遲',
                      'text-color-error bg-[#f9e8ea]': flight.DepartureRemark === '取消'
                    }
                  ]">
                    {{ flight.DepartureRemark }}
                  </span>
                </div>
                <div class="text-body-sm text-text-secondary">
                  <div class="flex gap-x-2 justify-start">
                    <span class="font-medium">出發時間：</span>
                    <span>{{ flight.ScheduleDepartureTime.replace('T', ' ') }}</span>
                  </div>
                  <div class="flex gap-x-2 justify-start">
                    <span class="font-medium">到達時間：</span>
                    <span>{{ flight.ScheduleArrivalTime.replace('T', ' ') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="filteredFlights.length > 3" class="flex justify-center items-center mt-8">
            <button
              @click="showAll = !showAll"
              class="flex gap-2 justify-center items-center px-6 h-12 font-medium rounded-full transition-all duration-300 text-body-sm text-text-inverse bg-brand-primary hover:shadow-lg group"
            >
              {{ showAll ? '收起結果' : '查看更多結果' }}
              <font-awesome-icon
                :icon="['fas', 'plane']"
                class="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" class="absolute hidden md:block bottom-0 translate-y-1/2 w-[105%] object-fit -z-10 pointer-events-none opacity-20">
            <path d="M0,13 S90,77 240,192 S490,230 690,128 S990,205 1140,294 S1290,166 1440,230" fill="none" stroke="var(--brand-primary)" stroke-width="2.5" stroke-dasharray="10,10" stroke-linecap="round" />
            <path id="flightPath" ref="flightPath" d="M0,13 S90,77 240,192 S490,230 690,128 S990,205 1140,294 S1290,166 1440,230" fill="none" stroke="none" />
            <g ref="plane" class="plane" transform="translate(-10, -10)">
              <path d="M3.5 19.5l17-7a1 1 0 000-1.8l-17-7a1 1 0 00-1.4 1.1l1.6 7.2a.25.25 0 010 .2l-1.6 7.2a1 1 0 001.4 1.1z" fill="var(--brand-primary)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* 日期選擇器圖標樣式 */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(40%) sepia(9%) saturate(2453%) hue-rotate(219deg) brightness(92%) contrast(87%);
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

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

/* 表單元素焦點狀態 */
input:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(95, 61, 196, 0.2);
}

/* 飛機動畫相關 */
.plane {
  transform-box: fill-box;
  transform-origin: 10px 10px;
}

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
