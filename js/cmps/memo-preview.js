import memoService from '../../services/memo-service.js';
import colorPicker from './color-picker-cmp.js';

export default {
    props:['memo'],
    template:` <li class="memo" :style="bgColor" >
    <h5 class="memo-title" class="title">{{memo.title}} 
    <span @click="deleteMemo" class="delete">🗑️</span></h5>
    <div v-if="memo.content" class="content">{{memo.content}}</div>
    <div v-if="memo.image">
       <img class="memo-image" src="memo.image"/>
    </div>
    <template>
  <div>
    <swatches v-model="color" />
  </div>
</template>

   </li>
    `,
    date(){
    },
    created(){
        console.log('this memo', this.memo)
    },
    computed:{
        bgColor(){
            return {'background-color': this.memo.color}
        }
    },
    methods:{
        deleteMemo(){
            this.$emit('delete-memo',this.memo.id);
        }
    },
    components:{
        colorPicker
    }
}