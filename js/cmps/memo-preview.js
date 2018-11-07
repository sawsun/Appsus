import memoService from '../../services/memo-service.js';

export default {
    props:['memo'],
    template:` <li class="memo" :style="bgColor" >
    <h5 class="memo-title" class="title">{{memo.title}} 
    <span @click="deleteMemo" class="delete">🗑️</span></h5>
    <div v-if="memo.content" class="content">{{memo.content}}</div>
    <div v-if="memo.image">
       <img class="memo-image" src="memo.image"/>
    </div>
    <div class="memo-edits">
    <button>Color</button>
    </div>
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
            console.log('deletin',this.memo.id);
            this.$emit('delete-memo',this.memo.id);
            // memoService.deleteMemo(this.memo.id).then(
            //     console.log('Item was deleted')            
            // )
        }
    }
}