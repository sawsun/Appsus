export default{
    props:['email'],
    template:`
     <span>
        {{this.email.subject}}
    </span>
    `
}