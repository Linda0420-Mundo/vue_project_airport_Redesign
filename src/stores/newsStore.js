import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    blogs: [
      {
        readTime: 5,
        date: '2024-03-15',
        title: '台中機場新增韓國首爾航線',
        description: '為提供旅客更多國際航線選擇，台中機場宣布自2024年4月起新增韓國首爾仁川機場直飛航線，每週提供4個航班，由韓亞航空執飛。',
        highlight: true,
      },
      {
        readTime: 3,
        date: '2024-03-10',
        title: '台中機場智慧化升級完成',
        description: '台中機場完成智慧化升級工程，新增自助報到櫃台、智慧行李追蹤系統及人臉辨識通關設施，大幅提升旅客通關效率。',
        highlight: false,
      },
      {
        readTime: 4,
        date: '2024-03-05',
        title: '機場捷運延伸線工程啟動',
        description: '台中機場捷運延伸線工程正式啟動，預計2026年完工，將大幅改善機場與市區間的交通連結，提供旅客更便捷的交通選擇。',
        highlight: false,
      },
      {
        readTime: 6,
        date: '2024-02-28',
        title: '機場防疫措施更新公告',
        description: '配合中央疫情指揮中心最新指引，台中機場即日起調整入境檢疫措施，請旅客配合相關防疫規定。',
        highlight: true,
      },
      {
        readTime: 4,
        date: '2024-02-20',
        title: '機場停車場擴建工程完工',
        description: '台中機場停車場擴建工程完工，新增500個停車位，並導入智慧停車系統，提供旅客更便利的停車服務。',
        highlight: false,
      }
    ]
  }),
  actions: {
    addBlog(blog) {
      this.blogs.push(blog)
    },
    removeBlog(index) {
      this.blogs.splice(index, 1)
    },
    getHighlightedNews() {
      return this.blogs.filter(blog => blog.highlight)
    }
  },
  getters: {
    totalNews: (state) => state.blogs.length,
    latestNews: (state) => state.blogs[0],
    sortedLatestNews: (state) => {
      return [...state.blogs]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3)
    }
  }
})
