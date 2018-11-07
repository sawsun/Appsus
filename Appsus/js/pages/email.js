import eventBus, {USR_MSG_DISPLAY} from '../../services/event-bus.service.js'

export default {
    template:`
    <section class="about">
        <h1>Email</h1>
        Happy? {{isHappy}}
        <br/><br/><br/> 
        <button @click="goHome">Go Home</button>
    </section>
    `,
    data() {
        return {
            isHappy: true, 
        }
    },
    methods: {
        goHome() {
            eventBus.$emit(USR_MSG_DISPLAY, {txt:'Going Home...',type:'success'});
            this.$router.push('/')
        }
    },
    components: {
    }
    
}