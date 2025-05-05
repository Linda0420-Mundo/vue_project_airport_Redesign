<template>
  <nav ref="navbar" :class="[
    'fixed flex flex-col top-0 left-0 w-full z-40 transition-all duration-500 ease-out bg-background-light',
    isHidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
    isScrolled ? 'shadow-md border-b border-border-color' : ''
  ]">

    <div
      v-show="isVisible"
      class="flex gap-x-4 justify-end items-center px-5 py-2 w-full text-gray-600 bg-white border-b border-gray-200 transition-all duration-500 ease-out h-fit text-body-sm"
      :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'">
      <div class="flex space-x-2">
        <a href="#" class="hover:underline">中文</a>
        <a href="#" class="hover:underline">EN</a>
        <a href="#" class="hover:underline">Other Languages</a>
      </div>
      <div class="flex relative items-center space-x-2 group">
        <div class="relative">
          <input type="text" v-model="searchQuery" placeholder="搜索"
            class="px-2 w-20 placeholder-gray-400 bg-transparent border-b border-gray-300 transition-all duration-300 ease-in-out text-body-sm xs:w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 sm:px-3 sm:py-1.5 sm:text-sm focus:outline-none focus:border-blue-500 group-hover:w-24 xs:group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-48 lg:group-hover:w-56 xl:group-hover:w-64" />
          <div
            class="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ease-in-out bg-brand-primary group-hover:w-full">
          </div>
        </div>
        <svg
          class="w-3 h-3 text-gray-400 transition-all duration-300 ease-in-out sm:w-4 sm:h-4 group-hover:text-blue-500 group-hover:scale-110"
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
        </svg>
      </div>
    </div>
    <div class="flex justify-between items-center px-5 py-2 mx-auto w-full sm:py-4 sm:px-8 lg:px-12">
      <!-- Logo 區域 -->
      <div class="flex items-center max-w-[200px] w-1/4 min-w-[100px]">
        <img :src="Logo" class="w-full transition-transform duration-300 hover:scale-105" alt="Airport Logo" />
      </div>

      <!-- 語言選擇和移動端菜單按鈕 -->
      <div class="flex gap-2 items-center">
        <!-- 移動端菜單按鈕 -->
        <CustomButton @click="toggleMobileMenu" variant="ghost"
          class="transition-transform duration-300 lg:hidden hover:scale-110" size="icon">
          <svg class="w-5 h-5 transition-transform duration-300 text-text-primary"
            :class="{ 'rotate-180': isMobileOpen }" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor">
            <path v-if="!isMobileOpen" stroke-linecap="round" stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </CustomButton>
      </div>

      <!-- 桌面端導航菜單 -->
      <div class="hidden relative lg:block">
        <NavigationMenu class="relative">
          <NavigationMenuList class="flex items-center space-x-4">
            <NavigationMenuItem v-for="(item, i) in menu" :key="i" class="relative">
              <NavigationMenuTrigger @click="toggle(i)" :data-state="activeItem === i ? 'open' : 'closed'"
                class="relative font-medium transition-all duration-200 text-body-sm text-text-primary hover:text-brand-primary hover:scale-105">
                {{ item.title }}
              </NavigationMenuTrigger>
              <NavigationMenuContent v-if="activeItem === i"
                class="absolute left-0 top-full w-full bg-background-light text-text-primary shadow-lg rounded-lg border border-border-color origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-50">
                <div class="p-2 w-full">
                  <router-link v-for="(sub, j) in item.sub" :key="j" :to="sub.link">
                    <NavigationMenuLink
                      class="block px-4 py-2 whitespace-nowrap rounded-md transition-all duration-200 text-body-xs text-nowrap hover:bg-background-hover hover:text-brand-primary">
                      {{ sub.name }}
                    </NavigationMenuLink>
                  </router-link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>
      </div>
    </div>

    <!-- 移動端菜單 -->
    <div v-if="isMobileOpen"
      class="absolute left-0 top-full z-50 w-full border-b shadow-lg transition-all duration-500 ease-out bg-background-light border-border-color lg:hidden"
      :class="isMobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <div v-for="(item, i) in menu" :key="i" class="relative">
          <CustomButton @click="toggle(i)" variant="ghost"
            class="flex justify-between items-center w-full font-medium transition-all duration-200 text-body-sm text-text-primary hover:text-brand-primary hover:bg-background-hover">
            {{ item.title }}
            <svg class="w-3 h-3 transition-transform duration-300 text-text-secondary"
              :class="{ 'rotate-180': activeItem === i }" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                clip-rule="evenodd" />
            </svg>
          </CustomButton>
          <div v-if="activeItem === i" class="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
            <router-link v-for="(sub, j) in item.sub" :key="j" :to="sub.link"
              class="block px-3 py-2 rounded-md transition-all duration-200 text-body-xs text-text-secondary hover:bg-background-hover hover:text-brand-primary">
              {{ sub.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/assets/header/marine-logo-white.png'
import CustomButton from "@/components/ui/Button.vue"
import NavigationMenu from "@/components/ui/NavigationMenu.vue"
import NavigationMenuContent from "@/components/ui/NavigationMenuContent.vue"
import NavigationMenuItem from "@/components/ui/NavigationMenuItem.vue"
import NavigationMenuLink from "@/components/ui/NavigationMenuLink.vue"
import NavigationMenuList from "@/components/ui/NavigationMenuList.vue"
import NavigationMenuTrigger from "@/components/ui/NavigationMenuTrigger.vue"
import NavigationMenuViewport from "@/components/ui/NavigationMenuViewport.vue"

export default {
  name: 'WebHeader',
  components: {
    CustomButton,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport
  },
  data() {
    return {
      Logo,
      isMobileOpen: false,
      searchQuery: '',
      activeItem: null,
      isHidden: false,
      isScrolled: false,
      lastScrollTop: 0,
      isVisible: true,
      menu: [
        {
          title: '航班與交通',
          sub: [
            { name: '出發航班', link: '/flights/departures' },
            { name: '抵達航班', link: '/flights/arrivals' },
            { name: '大眾運輸', link: '/transportation/public' },
            { name: '接送 / 接駁', link: '/transportation/shuttle' },
          ],
        },
        {
          title: '通關流程',
          sub: [
            { name: '報到流程', link: '/checkin/steps' },
            { name: '行李安檢', link: '/checkin/security' },
            { name: '海關檢查', link: '/checkin/customs' },
          ],
        },
        {
          title: '航站導覽',
          sub: [
            { name: '航站平面圖', link: '/terminal/map' },
            { name: '設施服務', link: '/terminal/facilities' },
          ],
        },
        {
          title: '最新消息',
          sub: [
            { name: '新聞公告', link: '/news' },
            { name: '招標資訊', link: '/tender' },
            { name: '影音專區', link: '/media' },
          ],
        },
        {
          title: '聯絡我們',
          sub: [
            { name: '聯絡方式', link: '/contact' },
            { name: '意見反映', link: '/contact/feedback' },
            { name: '網站導覽', link: '/sitemap' },
          ],
        },
      ]
    };
  },
  methods: {
    toggle(index) {
      this.activeItem = this.activeItem === index ? null : index;
    },
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen;
    },
    handleScroll() {
      const currentScroll = window.scrollY;
      const homeMain = document.getElementById('home-main');
      const scrollThreshold = homeMain ? homeMain.offsetHeight : window.innerHeight;

      // 更新滾動狀態
      this.isScrolled = currentScroll > 0;

      // 處理導航欄顯示/隱藏
      if (currentScroll === 0) {
        // 在頁面頂部時顯示
        this.isHidden = false;
        this.isVisible = true;
      } else if (currentScroll < scrollThreshold) {
        // 超過一屏高度時，根據滾動方向決定顯示/隱藏
        this.isHidden = currentScroll > this.lastScrollTop && currentScroll < scrollThreshold;
        this.isVisible = currentScroll === 0;
      }
      else {
        // 在一屏高度內時顯示
        this.isHidden = false;
        this.isVisible = currentScroll === 0;
      }

      this.lastScrollTop = currentScroll;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    // 初始化滾動狀態
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>

<style>
/* 導航欄過渡效果 */
nav {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 移動端菜單動畫 */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}


</style>
