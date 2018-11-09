import emailService from '../../../services/email-service.js';
import emailCompose from '../../cmps/email/emailCompose.js';
import emailSearch from '../../cmps/email/emailSearch.js';
import emailFilter from '../../cmps/email/emailFilter.js';
import emailList from '../../cmps/email/emailList.js';
import emailStatus from '../../cmps/email/emailStatus.js';

export default {
    template:`
    <section class="email-app">
       <section class="email-header">
        <email-filter @setFilter="setFilter"></email-filter>
        <email-search></email-search>
        <email-compose></email-compose>
       </section>

       <email-list :emails="emails"></email-list>

       <email-status>{{readEmailsStatus}}</email-status>

    </section>
    `,

    data(){
        return{
            emails:[],
            filter:null,
            selectedEmail:0
        }
    },
    created(){
        //ask emails from server and update the var email in data()
       this.emails =  emailService.emailQuery().then(
           emails => this.emails = emails);
    },
    methods:{
        setFilter(filter){
            this.filter = filter;
            emailService.query(filter)
                .then(emails => this.emails = emails);
        }
    },
    computed:{
        readEmailsStatus(){
            return '50%';
        }
    },
    components: {
        emailCompose,
        emailSearch,
        emailFilter,
        emailList,
        emailStatus
      }
}