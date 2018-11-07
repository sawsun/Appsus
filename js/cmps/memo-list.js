import memoPreview from './memo-preview.js';
import memoService from '../../services/memo-service.js';

export default {
    props: ['memos'],
    template: `
    <section >
    <ul class="memos-list">
        <memo-preview v-on:delete-memo="deleteMemo" class="memo-preview" v-for="(memo,index) in memos" :key="memo" :memo="memo"></memo-preview>
    </ul>
    </section>
    `,
    data() {
        return {


        }
    },

    computed: {
       
    },
    methods:{
        deleteMemo(memoID){
            console.log('I am in list memo memoID');
            memoService.deleteMemo(memoID).then(res =>{
                console.log('I was deleted',this.memos)
                memoService.memoQuery().then(memos => this.memos = memos);
            }
            )
        }

    },
    components: {
        memoPreview
    }
}