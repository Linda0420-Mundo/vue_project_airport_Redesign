<template>
  <base-page-template
    page-title="航站平面圖"
    page-description="台中國際機場航站平面圖與設施位置"
  >
    <!-- 航站選擇 -->
    <div class="mb-8">
      <div class="flex space-x-4">
        <button
          v-for="terminal in terminals"
          :key="terminal.id"
          @click="handleTerminalClick(terminal.id)"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedTerminal === terminal.id
              ? 'bg-brand-primary text-text-inverse'
              : 'bg-background-off text-text-secondary hover:bg-background-hover'
          ]"
        >
          {{ terminal.name }}
        </button>
      </div>
    </div>

    <!-- 樓層選擇 -->
    <div class="mb-8">
      <div class="flex space-x-4">
        <button
          v-for="floor in currentTerminal.floors"
          :key="floor.id"
          @click="handleFloorClick(floor.id)"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedFloor === floor.id
              ? 'bg-brand-primary text-text-inverse'
              : 'bg-background-off text-text-secondary hover:bg-background-hover'
          ]"
        >
          {{ floor.name }}
        </button>
      </div>
    </div>

    <!-- 平面圖 -->
    <div class="mb-8">
      <div class="relative w-full h-[600px] bg-background-off rounded-lg overflow-hidden">
        <img
          :src="currentFloor.mapImage"
          :alt="currentFloor.name + '平面圖'"
          class="object-contain w-full h-full"
        />
      </div>
    </div>

    <!-- 設施列表 -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="facility in currentFloor.facilities"
        :key="facility.id"
        class="p-6 rounded-lg border shadow-sm bg-background-light border-border-color"
      >
        <div class="flex items-center mb-4">
          <div class="p-2 rounded-lg text-text-inverse bg-brand-primary">
            <i :class="facility.icon" class="text-heading-md"></i>
          </div>
          <h4 class="ml-3 font-medium text-heading-sm text-text-primary">{{ facility.name }}</h4>
        </div>
        <p class="mb-4 text-text-secondary">{{ facility.description }}</p>
        <div class="flex items-center text-body-sm text-text-tertiary">
          <i class="mr-2 fas fa-map-marker-alt"></i>
          <span>位置：{{ facility.location }}</span>
        </div>
      </div>
    </div>
  </base-page-template>
</template>

<script>
// ... existing code ...
</script>
