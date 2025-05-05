<template>
  <base-page-template
    page-title="行李安檢規定"
    page-description="台中國際機場行李安檢相關規定與注意事項"
  >
    <!-- 禁止攜帶物品 -->
    <div class="mb-12">
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">禁止攜帶物品</h3>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(category, index) in prohibitedItems" :key="index" class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color">
          <div class="flex items-center mb-4">
            <div class="flex justify-center items-center w-8 h-8 bg-red-500 rounded-full md:w-12 md:h-12 text-text-inverse">
              <font-awesome-icon :icon="category.icon" class="text-lg md:text-2xl" />
            </div>
            <h4 class="ml-3 font-medium text-heading-sm text-text-primary">{{ category.title }}</h4>
          </div>
          <ul class="space-y-2 text-text-secondary">
            <li v-for="(item, itemIndex) in category.items" :key="itemIndex" class="flex items-start">
              <span class="mr-2 text-red-500">•</span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 液體規定 -->
    <div class="mb-12">
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">液體規定</h3>
      <div class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h4 class="mb-4 font-medium text-heading-sm text-text-primary">隨身行李液體規定</h4>
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-start">
                <span class="mr-2 text-blue-500">•</span>
                所有液體必須裝在不超過100毫升的容器中
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500">•</span>
                所有容器必須放在一個透明、可重複密封的塑膠袋中
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-blue-500">•</span>
                塑膠袋總容量不得超過1公升
              </li>
            </ul>
          </div>
          <div>
            <h4 class="mb-4 font-medium text-heading-sm text-text-primary">例外物品</h4>
            <ul class="space-y-3 text-text-secondary">
              <li class="flex items-start">
                <span class="mr-2 text-green-500">•</span>
                嬰兒食品和牛奶
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-green-500">•</span>
                處方藥物（需出示處方箋）
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-green-500">•</span>
                特殊醫療用品
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 電子產品規定 -->
    <div class="mb-12">
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">電子產品規定</h3>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-border-color">
          <thead class="bg-background-off">
            <tr>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">物品</th>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">規定</th>
              <th class="px-6 py-3 font-medium tracking-wider text-left uppercase text-body-xs text-text-tertiary">注意事項</th>
            </tr>
          </thead>
          <tbody class="divide-y bg-background-light divide-border-color">
            <tr v-for="(item, index) in electronicItems" :key="index" class="hover:bg-background-hover">
              <td class="px-6 py-4 font-medium text-body-sm text-text-primary">{{ item.name }}</td>
              <td class="px-6 py-4 text-body-sm text-text-secondary">{{ item.regulation }}</td>
              <td class="px-6 py-4 text-body-sm text-text-secondary">{{ item.notes }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- 安檢流程 -->
    <div>
      <h3 class="mb-6 font-bold text-heading-lg text-text-primary">安檢流程</h3>
      <div class="space-y-4 md:space-y-6">
        <div v-for="(step, index) in securitySteps" :key="index" class="flex">
          <div class="flex flex-shrink-0 justify-center items-center w-6 h-6 text-sm font-medium rounded-full md:w-8 md:h-8 text-text-inverse bg-brand-primary md:text-base">
            {{ index + 1 }}
          </div>
          <div class="ml-3 md:ml-4">
            <h4 class="font-medium text-heading-sm text-text-primary">{{ step.title }}</h4>
            <p class="mt-1 text-text-secondary">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </base-page-template>
</template>

<script>
import BasePageTemplate from '@/views/BasePageTemplate.vue'

export default {
  name: 'BaggageSecurityView',
  components: {
    BasePageTemplate
  },
  data() {
    return {
      prohibitedItems: [
        {
          title: '危險物品',
          icon: ['fas', 'exclamation-triangle'],
          items: [
            '爆炸物和易燃物品',
            '壓縮氣體',
            '腐蝕性物質',
            '放射性物質'
          ]
        },
        {
          title: '武器類',
          icon: ['fas', 'ban'],
          items: [
            '槍械和彈藥',
            '刀械和尖銳物品',
            '防身器材',
            '仿真武器'
          ]
        },
        {
          title: '其他違禁品',
          icon: ['fas', 'times-circle'],
          items: [
            '毒品和管制藥品',
            '盜版物品',
            '未申報的現金',
            '瀕危物種製品'
          ]
        }
      ],
      electronicItems: [
        {
          name: '筆記型電腦',
          regulation: '需單獨取出檢查',
          notes: '請確保電池電量充足，可能需要開機檢查'
        },
        {
          name: '手機',
          regulation: '可放在隨身行李中',
          notes: '建議關機或開啟飛航模式'
        },
        {
          name: '相機',
          regulation: '可放在隨身行李中',
          notes: '大型相機設備需單獨取出檢查'
        },
        {
          name: '行動電源',
          regulation: '限制容量',
          notes: '單個容量不得超過100Wh，總量不得超過160Wh'
        }
      ],
      securitySteps: [
        {
          title: '準備安檢',
          description: '請將所有金屬物品、電子產品和液體取出，放入提供的托盤中。脫下外套、皮帶和鞋子。'
        },
        {
          title: '通過安檢門',
          description: '按照安檢人員指示通過安檢門。如有警報聲響，請配合進行進一步檢查。'
        },
        {
          title: '隨身行李檢查',
          description: '將隨身行李放入X光機檢查。請確保所有電子產品和液體都已取出。'
        },
        {
          title: '完成安檢',
          description: '檢查完成後，請在指定區域取回您的物品。如有任何問題，安檢人員會協助您解決。'
        }
      ]
    }
  }
}
</script>
