<template>

    <div class="dropdown">
       <ul v-show="list.open" class="nav justify-content-center">
        
        <li class="nav-item" v-for="(item, index) in list.subnav" :key="'item'+index">
        <a class="nav-link continent" href="#" @click="item.open = !item.open">{{item.title}}</a>
        <Dropdown v-if="item.subnav" :list="item"/>
        </li>
      </ul>
    </div>

</template>

<script>
export default {
    name: 'Dropdown',
    props: [
        'list'
    ]
}
</script>

<style scoped>

</style>