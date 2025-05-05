<template>
  <div class="min-h-screen bg-[#f9fafb]">
    <!-- 頁面標題 -->
    <div class="py-8 bg-[#7260a3] text-white">
      <div class="container px-4 mx-auto">
        <h1 class="text-[2rem] font-[700]">聯絡我們</h1>
        <p class="mt-2 text-white/80">歡迎與我們聯繫，我們將盡快回覆您的需求</p>
      </div>
    </div>

    <!-- 主要內容區 -->
    <div class="container px-4 py-8 mx-auto">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- 聯絡表單 -->
        <div class="bg-white p-6 rounded-[0.5rem] shadow-sm">
          <h2 class="text-[1.5rem] font-[600] mb-6">意見回饋</h2>
          <form class="space-y-4">
            <div>
              <label class="block text-[0.875rem] font-[500] text-[#4b5563] mb-1">姓名</label>
              <input type="text" class="w-full px-4 py-2 border border-[#e5e7eb] rounded-[0.375rem] focus:outline-none focus:border-[#7260a3]" placeholder="請輸入您的姓名">
            </div>
            <div>
              <label class="block text-[0.875rem] font-[500] text-[#4b5563] mb-1">電子郵件</label>
              <input type="email" class="w-full px-4 py-2 border border-[#e5e7eb] rounded-[0.375rem] focus:outline-none focus:border-[#7260a3]" placeholder="請輸入您的電子郵件">
            </div>
            <div>
              <label class="block text-[0.875rem] font-[500] text-[#4b5563] mb-1">主旨</label>
              <input type="text" class="w-full px-4 py-2 border border-[#e5e7eb] rounded-[0.375rem] focus:outline-none focus:border-[#7260a3]" placeholder="請輸入主旨">
            </div>
            <div>
              <label class="block text-[0.875rem] font-[500] text-[#4b5563] mb-1">內容</label>
              <textarea rows="5" class="w-full px-4 py-2 border border-[#e5e7eb] rounded-[0.375rem] focus:outline-none focus:border-[#7260a3]" placeholder="請輸入您的意見或建議"></textarea>
            </div>
            <button type="submit" class="w-full py-2 bg-[#7260a3] text-white rounded-[0.375rem] font-[500]">送出</button>
          </form>
        </div>

        <!-- 聯絡資訊 -->
        <div class="space-y-8">
          <div class="bg-white p-6 rounded-[0.5rem] shadow-sm">
            <h2 class="text-[1.5rem] font-[600] mb-6">聯絡資訊</h2>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#7260a3]/10">
                  <i class="fas fa-map-marker-alt text-[#7260a3]"></i>
                </div>
                <div>
                  <h3 class="text-[1rem] font-[500] text-[#1a202c]">地址</h3>
                  <p class="text-[0.875rem] text-[#4b5563]">台中市沙鹿區中航路一段168號</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#7260a3]/10">
                  <i class="fas fa-phone-alt text-[#7260a3]"></i>
                </div>
                <div>
                  <h3 class="text-[1rem] font-[500] text-[#1a202c]">電話</h3>
                  <p class="text-[0.875rem] text-[#4b5563]">04-2615-1000</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#7260a3]/10">
                  <i class="fas fa-envelope text-[#7260a3]"></i>
                </div>
                <div>
                  <h3 class="text-[1rem] font-[500] text-[#1a202c]">電子郵件</h3>
                  <p class="text-[0.875rem] text-[#4b5563]">service@tca.gov.tw</p>
                </div>
              </div>
              <div class="flex gap-4 items-start">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-[#7260a3]/10">
                  <i class="fas fa-clock text-[#7260a3]"></i>
                </div>
                <div>
                  <h3 class="text-[1rem] font-[500] text-[#1a202c]">服務時間</h3>
                  <p class="text-[0.875rem] text-[#4b5563]">週一至週五 09:00-17:00</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 地圖 -->
          <div class="bg-white p-6 rounded-[0.5rem] shadow-sm">
            <h2 class="text-[1.5rem] font-[600] mb-6">位置資訊</h2>
            <div class="aspect-w-16 aspect-h-9 rounded-[0.375rem] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.626711105583!2d120.6280362!3d24.2644312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346917df6da52761%3A0x76538e93969e0a05!2z5Y-w5Lit5ZyL6Zqb5qmf5aC0!5e0!3m2!1szh-TW!2stw!4v1710937445159!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>
