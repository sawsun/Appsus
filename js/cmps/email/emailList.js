import emailPreview from './emailPreview.js';

export default{
   props:['emails'] ,
   template:`<ul class="emails-container">
        <li class="subject" v-for="mail in emails" :class="(mail.isRead)?'read':'unread'">
        <email-preview :email="mail"></email-preview>
        </li>
   </ul>`,
   components:{
       emailPreview
   }
}