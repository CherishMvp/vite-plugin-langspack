<template>
  <div>
    <h1>Lang Messages</h1>
    <div>
      <template v-for="(lang, index) in langOpts" :key="index">
        <input type="radio" :id="lang" :value="lang" v-model="locale" />
        <label :for="lang">{{ lang }}</label>
      </template>
    </div>
    <pre>{{ JSON.stringify(msgs, null, 2) }}</pre>
  </div>
</template>
<script setup>
  import { onMounted, ref, watch } from 'vue';
  import getLocaleData from 'virtual:langs';

  const locale = ref('zh_CN');
  const langOpts = ['zh_CN', 'en_US'];

  const msgs = ref({});
  async function refresh() {
    // const data = await (await import(`../../langs/lang.js?${locale.value}`))?.default;
    // const data = await (await import('virtual:langs' + locale.value))?.default;
    const data = await getLocaleData(locale.value);
    // console.log(JSON.stringify(data));
    msgs.value = data;
  }
  onMounted(refresh);
  watch(locale, () => refresh());
</script>
