<script>
import { flowbitePlugin } from 'flowbite'
import Logo from '@/assets/header/marine-logo-white.png'
export default {
  name: 'WebHeader',
  data() {
    return {
      Logo,
      isMobileOpen: false,
      searchQuery: '',
      isVisible: [],
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
      this.isVisible = this.isVisible.map((_, i) => i === index ? !this.isVisible[i] : false);
      console.log('有點到', this.isVisible)
    }






  },
  mounted() {
    flowbitePlugin()
    this.isVisible = this.menu.map(() => false);
  }
}
</script>

<template>

  <nav class="fixed top-0 right-0 left-0 z-50">
    <div class="flex flex-wrap justify-between items-center p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse  w-[120px] md:w-[200px]">
        <img :src="Logo" class="w-full" alt="Airport Logo" />
      </div>
      <div class="flex items-center space-x-1 lg:order-2 lg:space-x-0 rtl:space-x-reverse">
        <button type="button" data-dropdown-toggle="language-dropdown-menu"
          class="flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
          <svg class="w-5 h-5 rounded-full me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900">
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                      <use xlink:href="#a" y="420" />
                      <use xlink:href="#a" y="840" />
                      <use xlink:href="#a" y="1260" />
                    </g>
                    <use xlink:href="#a" y="1680" />
                  </g>
                  <use xlink:href="#b" x="247" y="210" />
                </g>
                <use xlink:href="#c" x="494" />
              </g>
              <use xlink:href="#d" x="988" />
              <use xlink:href="#c" x="1976" />
              <use xlink:href="#e" x="2470" />
            </g>
          </svg>
          English (US)
        </button>
        <!-- Dropdown -->
        <div
          class="hidden z-50 my-4 text-base list-none rounded-lg divide-y divide-gray-100 shadow-sm"
          id="language-dropdown-menu">
          <ul class="py-2 font-medium" role="none">
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-3.5 h-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us" viewBox="0 0 512 512">
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)" />
                        <path fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)" />
                      </g>
                      <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                      <path fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)" />
                    </g>
                  </svg>
                  English (US)
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">
                <div class="flex items-center">
                  <svg class="w-3.5 h-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-de" viewBox="0 0 512 512">
                    <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                    <path d="M0 0h512v170.7H0z" />
                    <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                  </svg>
                  Deutsch
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">
                <div class="flex items-center">
                  <svg class="w-3.5 h-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-it" viewBox="0 0 512 512">
                    <g fill-rule="evenodd" stroke-width="1pt">
                      <path fill="#fff" d="M0 0h512v512H0z" />
                      <path fill="#009246" d="M0 0h170.7v512H0z" />
                      <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                    </g>
                  </svg>
                  Italiano
                </div>
              </a>
            </li>
            <li>
              <a href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">
                <div class="flex items-center">
                  <svg class="w-3.5 h-3.5 rounded-full me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512">
                    <defs>
                      <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z" />
                    </defs>
                    <path fill="#de2910" d="M0 0h512v512H0z" />
                    <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a" />
                    <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a" />
                    <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a" />
                    <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a" />
                    <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a" />
                  </svg>
                  中文 (繁體)
                </div>
              </a>
            </li>
          </ul>
        </div>
        <button data-collapse-toggle="navbar-language" type="button"
          class="flex justify-center items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-language" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      <div class="hidden justify-between items-center w-full h-fit lg:flex lg:w-auto lg:order-1" id="navbar-language">
        <ul
          class="flex flex-col p-4 mt-4 h-full font-medium rounded-lg border border-gray-100 lg:h-fit menu--bg-blur lg:p-0 lg:bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0">
          <li v-for="(item, i) in menu" :key="i" class="relative px-2 py-4 group">
            <button @click="toggle(i)" class="flex justify-center items-center px-4 py-2 mx-auto w-full text-gray-700 rounded hover:cursor-pointer lg:p-0 lg:w-auto">
              {{ item.title }}
              <svg class="absolute right-0 ml-1 w-3 h-3 lg:translate-x-full" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>

            <ul v-show="isVisible[i]"
              class="overflow-hidden bottom-0 z-10 rounded-lg divide-y divide-gray-100 translate-y-1 bg-blur lg:absolute lg:w-fit text-nowrap lg:translate-y-full lg:left-1/2 lg:-translate-x-1/2">
              <li v-for="(sub, j) in item.sub" :key="j"
                class="p-2 hover:bg-gray-100">
                <router-link class="block text-gray-700" :to="sub.link">
                  {{ sub.name }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>
<style>
ul.bg-blur {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2);
}

@media (max-width: 1024px) {
  ul.menu--bg-blur {
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.2);
  }
}
</style>
