export default{
    template:`<div class="select-style">
    <select  @change="setFilter()"  v-model="filter.byIsRead" >
      <option value="All">All</option>
      <option value="unread">Unread</option>
      <option value="read">Read</option>
    </select>
  </div>`,
  data(){
    return {
      filter: {
        byIsRead:false,
        byIsUnRead:false,
        byTxt:''
      }
    }
  },
  computed:{
    setFilter() {
        console.log('The Filter Is:' , this.filter);
        this.$emit('setFilter', this.filter);
    }
  }
}


