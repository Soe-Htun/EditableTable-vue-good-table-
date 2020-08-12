<template>
  <div id="app">
      <h3 id="date">{{dateRes}}</h3><br><br>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      dateRes:'',
    }
  },
  methods:{
    getTime(){
            let date = new Date();
            let dayArr= ["Sunday", "Monday", "Tueday", "Wednesday" , "Thursday", "Friday", "Saturday"]
            let days = dayArr[date.getDay()]
            let day= date.getDate();
            let d= day > 9 ? day: + "0" + day
            let month= date.getMonth()+1
            let m= month > 9 ? month: "0" + month
            let year = date.getFullYear();

            let hour= date.getHours();
            let strHour= hour > 9? hour : "0" + hour;
            let minutes = date.getMinutes();
            let strminutes = minutes > 9? minutes : "0" + minutes
            let second = date.getSeconds();
            let strsecond= second > 9 ? second : "0" + second
            this.dateRes= year + '-' + m + '-' + d + " "+ days + " " + strHour + ":" + strminutes + ":" + strsecond
            console.log("hi=>>",this.dateRes);
        },
        CountTime(){
            setInterval(() => {
                this.getTime()
            }, 1000);
        }
  },
  created(){
    this.getTime();
    this.CountTime()
  }
}
</script>
<style>
.edit-cell {
  min-height: 35px;
  cursor: pointer;
}
#date{
  position: absolute;
  left: 50%;
  margin: 5px 0px 0px -115px;
}
</style>
