<template>
  <section class="py-24">
      <div class="container">
        <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
          <!-- 使用者旅程地圖 -->
          <div>
            <!-- 使用者旅程地圖內容 -->
          </div>

          <!-- 痛點解決方案 -->
          <div class="mt-32">
            <h3 class="mb-12 font-[600] text-[1.5rem]">痛點解決方案</h3>

            <!-- 商務旅客解決方案 -->
            <div class="mb-16">
              <h4 class="mb-8 font-[500] text-[1.25rem]">商務旅客解決方案</h4>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'bell']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">即時航班動態</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 推播航班狀態更新通知<br>
                    • 整合天氣和航班延誤資訊<br>
                    • 提供登機門即時位置
                  </p>
                </div>
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'route']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">智慧交通規劃</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 即時交通路況資訊<br>
                    • 多元交通工具比較<br>
                    • 預估所需通勤時間
                  </p>
                </div>
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'mobile-alt']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">自助服務優化</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 線上快速報到服務<br>
                    • 電子登機證整合<br>
                    • 自助行李託運系統
                  </p>
                </div>
              </div>
            </div>

            <!-- 休閒旅客解決方案 -->
            <div>
              <h4 class="mb-8 font-[500] text-[1.25rem]">休閒旅客解決方案</h4>
              <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'map']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">互動式導航指引</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 3D 機場地圖導覽<br>
                    • 步驟式指引說明<br>
                    • 多語言支援服務
                  </p>
                </div>
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'store']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">便利設施資訊</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 商店營業時間查詢<br>
                    • 餐廳即時座位資訊<br>
                    • 商品優惠即時通知
                  </p>
                </div>
                <div class="p-6 rounded-[0.5rem] bg-[#f9fafb] transition-all hover:transform hover:-translate-y-2">
                  <div class="flex justify-center items-center mb-6 w-12 h-12 rounded-full bg-[#7260a3]/20">
                    <font-awesome-icon :icon="['fas', 'hands-helping']" class="text-[#7260a3]" />
                  </div>
                  <h5 class="mb-4 font-[500]">特殊服務支援</h5>
                  <p class="text-[#4b5563] text-[0.875rem]">
                    • 行動不便協助預約<br>
                    • 育嬰室位置查詢<br>
                    • 特殊餐點預訂系統
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'PortfolioView'
}
</script>

<!-- 網站流程 -->
