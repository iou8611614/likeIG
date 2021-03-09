<template>
    <div>
        <ul>
            <li v-for="item in state.items" :key="item">{{item}}</li>
        </ul>  
    </div>
</template>

<script>
import {reactive} from "vue";
export default {
    setup(){
        const state = reactive({
            items:['item1', 'item2', 'item3']
        });
        return{
            state,
        }
    },
}
</script>