<template>
  <base-page-template
    page-title="設施服務"
    page-description="台中國際機場航站設施與服務資訊"
  >
    <!-- 背景裝飾 -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br to-transparent rounded-full blur-3xl from-brand-primary/10 -z-10"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl bg-brand-primary/10 -z-10"></div>

    <!-- 設施分類 -->
    <div class="relative mb-16">
      <div class="flex flex-wrap gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="handleCategoryClick(category.id)"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-colors duration-300 relative overflow-hidden group',
            selectedCategory === category.id
              ? 'bg-brand-primary text-text-inverse'
              : 'bg-background-off text-text-secondary hover:bg-background-hover'
          ]"
        >
          <span class="flex relative z-10 items-center">
            <div class="flex justify-center items-center w-8 h-8">
              <font-awesome-icon :icon="category.icon" :class="['text-xl', selectedCategory === category.id ? 'text-text-inverse' : 'text-brand-primary']" />
            </div>
            <span class="ml-2">{{ category.name }}</span>
          </span>
          <div class="absolute inset-0 opacity-0 transition-opacity bg-white/10 group-hover:opacity-100"></div>
        </button>
      </div>
    </div>

    <!-- 設施列表 -->
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="facility in currentCategoryFacilities"
        :key="facility.id"
        class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color"
      >
        <div class="flex items-center mb-4">
          <font-awesome-icon :icon="facility.icon" class="mr-3 text-heading-lg text-brand-primary" />
          <h3 class="font-medium text-heading-sm text-text-primary">{{ facility.name }}</h3>
        </div>
        <p class="mb-2 text-text-secondary">{{ facility.description }}</p>
        <div class="space-y-2">
          <div class="flex items-center text-body-sm text-text-tertiary">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2 w-3.5 h-3.5 text-text-tertiary" />
            <span>{{ facility.location }}</span>
          </div>
          <div class="flex items-center text-body-sm text-text-tertiary">
            <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-text-tertiary" />
            <span>{{ facility.openingHours }}</span>
          </div>
          <div v-if="facility.contact" class="flex items-center text-body-sm text-text-tertiary">
            <font-awesome-icon :icon="['fas', 'phone']" class="mr-2 text-text-tertiary" />
            <span>{{ facility.contact }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 服務資訊 -->
    <div class="relative mt-20">
      <div class="flex items-center mb-8">
        <div class="w-16 h-1 rounded-full bg-brand-primary"></div>
        <h3 class="ml-4 font-medium text-heading-lg text-text-primary">特殊服務</h3>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div
          v-for="service in specialServices"
          :key="service.id"
          class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color"
        >
          <div class="flex items-center mb-4">
            <font-awesome-icon :icon="service.icon" class="mr-3 text-heading-lg text-brand-primary" />
            <h3 class="font-medium text-heading-sm text-text-primary">{{ service.name }}</h3>
          </div>
          <p class="mb-2 text-text-secondary">{{ service.description }}</p>
          <div class="flex items-center text-body-sm text-text-tertiary">
            <font-awesome-icon :icon="['fas', 'info-circle']" class="mr-2 text-text-tertiary" />
            <span>{{ service.note }}</span>
          </div>
        </div>
      </div>
    </div>
  </base-page-template>
</template>

<script>
// ... existing code ...
</script>
