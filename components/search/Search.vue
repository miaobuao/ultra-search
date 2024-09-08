<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
} from '@/components/ui/command'
import { onKeyStroke } from '@vueuse/core'
import { ref } from 'vue'

const open = ref(false)

onKeyStroke(['j'], (e) => {
  if (e.metaKey || e.ctrlKey) {
    handleOpenChange()
    e.preventDefault()
  }
})

function handleOpenChange() {
  open.value = !open.value
}
</script>

<template>
  <div>
    <p class="text-sm text-muted-foreground">
      Press
      <kbd
        class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
      >
        <span class="text-xs">⌘</span>J
      </kbd>
    </p>
    <div class="fixed top-0 left-0 z-50 w-screen h-screen grid place-content-center bg-black bg-opacity-50">
      <Command class="h-[80%] w-[90%]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
        </CommandList>
      </Command>
    </div>
  </div>
</template>
