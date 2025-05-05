<template>
  <base-page-template
    page-title="接送與接駁服務"
    page-description="台中國際機場接送與接駁車服務資訊"
  >
    <!-- 接送服務 -->
    <div class="mb-12">
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">接送服務</h3>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div v-for="(service, index) in shuttleServices" :key="index" class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color">
          <div class="flex items-center mb-4">
            <div class="flex justify-center items-center w-12 h-12 rounded-full text-text-inverse bg-brand-primary">
              <font-awesome-icon :icon="service.icon" class="text-2xl" />
            </div>
            <h4 class="ml-3 font-medium text-heading-sm text-text-primary">{{ service.title }}</h4>
          </div>
          <p class="mb-4 text-text-secondary">{{ service.description }}</p>
          <div class="space-y-2">
            <div v-for="(detail, detailIndex) in service.details" :key="detailIndex" class="flex items-start">
              <span class="mr-2 text-brand-primary">•</span>
              <span class="text-text-secondary">{{ detail }}</span>
            </div>
          </div>
          <div v-if="service.contact" class="pt-4 mt-4 border-t border-border-color">
            <p class="text-body-sm text-text-tertiary">聯絡電話：{{ service.contact }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 接駁車路線 -->
    <div class="mb-12">
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">接駁車路線</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-border-color">
          <thead class="bg-background-off">
            <tr>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">路線名稱</th>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">營運時間</th>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">班次間隔</th>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">票價</th>
            </tr>
          </thead>
          <tbody class="divide-y bg-background-light divide-border-color">
            <tr v-for="(route, index) in shuttleRoutes" :key="index" class="hover:bg-background-hover">
              <td class="px-6 py-4 font-medium text-body-sm text-text-primary">{{ route.name }}</td>
              <td class="px-6 py-4 text-body-sm text-text-secondary">{{ route.operationTime }}</td>
              <td class="px-6 py-4 text-body-sm text-text-secondary">{{ route.frequency }}</td>
              <td class="px-6 py-4 text-body-sm text-text-secondary">{{ route.fare }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 注意事項 -->
    <div>
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">注意事項</h3>
      <div class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color">
        <ul class="space-y-3 text-text-secondary">
          <li v-for="(note, index) in importantNotes" :key="index" class="flex items-start">
            <span class="mr-2 text-brand-primary">•</span>
            {{ note }}
          </li>
        </ul>
      </div>
    </div>
  </base-page-template>
</template>

<script>
import BasePageTemplate from '../../views/BasePageTemplate.vue'

export default {
  name: 'ShuttleView',
  components: {
    BasePageTemplate
  },
  data() {
    return {
      shuttleServices: [
        {
          title: '機場接送服務',
          icon: ['fas', 'car'],
          description: '提供機場與市區之間的專業接送服務',
          details: [
            '24小時全天候服務',
            '專業司機，安全可靠',
            '可預約固定接送時間',
            '提供多種車型選擇'
          ],
          contact: '03-398-3728'
        },
        {
          title: '飯店接駁車',
          icon: ['fas', 'hotel'],
          description: '機場周邊飯店提供的免費接駁服務',
          details: [
            '需提前向飯店預約',
            '固定班次時間',
            '僅限住宿旅客使用',
            '請確認飯店接駁車站位置'
          ],
          contact: '請洽各飯店櫃檯'
        }
      ],
      shuttleRoutes: [
        {
          name: '機場捷運',
          operationTime: '06:00-23:00',
          frequency: '約7-10分鐘',
          fare: 'NT$ 160'
        },
        {
          name: '國光客運',
          operationTime: '24小時',
          frequency: '約15-20分鐘',
          fare: 'NT$ 140'
        },
        {
          name: '統聯客運',
          operationTime: '05:00-24:00',
          frequency: '約20-30分鐘',
          fare: 'NT$ 140'
        },
        {
          name: '大有巴士',
          operationTime: '05:00-24:00',
          frequency: '約20-30分鐘',
          fare: 'NT$ 140'
        }
      ],
      importantNotes: [
        '請提前確認接駁車時間表，避免錯過班次',
        '部分接駁服務需要提前預約，請及早安排',
        '搭乘接駁車時請注意隨身行李安全',
        '如遇特殊情況（如颱風、道路施工等），班次可能會調整',
        '建議下載機場APP或關注官方網站以獲取最新資訊'
      ]
    }
  }
}
</script>
