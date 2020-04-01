<template>
    <div class="letter">
        <p>按拼音首字母选择:</p>
        <div>
            <a :href="'#city-' + item" v-for="(item, index) in letterList" :key="index">{{ item }}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letterList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
    }
}
</script>