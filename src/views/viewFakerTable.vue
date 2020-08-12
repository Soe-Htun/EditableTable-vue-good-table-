<template>
    <div>
        <vue-good-table :columns="columns" :rows="rows"
        :select-options="{ enabled: true }"
        :search-options="{ enabled: true }"
        :pagination-options="{ enabled:true, perPageDropdown: [5, 10, 15] }"
        >
            <template slot="table-row" slot-scope="props">
                <div v-if="props.column.field == 'btn'">
                    <el-button size="mini" type="primary" props.row.id=editId @click="editRow(props.row.id)">Edit</el-button>
                    <el-button size="mini" type="success"  @click="Save(props.row)"> Save</el-button>
                </div>

                <div v-else>
                    <div v-if="props.row.id == editId">
                        <el-date-picker v-model="props.row[props.column.field]" v-if="props.column.custom =='Date'" placeholder=""></el-date-picker>
                        <el-input v-else size="small" v-model="props.row[props.column.field]"></el-input>
                    </div>
                    <div v-else>
                        <span>{{props.row[props.column.field]}}</span>
                    </div>
                </div>
            
            </template>

        </vue-good-table><br><br>
        
        <el-button type="primary" @click="home()">GoToHomePage</el-button>
    </div>
</template>
<script>
import axios from 'axios'
const baseUrl ="http://localhost:3000/fakerEditTable"
export default {
    name:'Faker',
    data() {
        return {
            editId:'',
            columns:[
                {
                    label:'Actions',
                    field: 'btn',
                    width: '100px'
                },
                {
                    label: 'FirstName',
                    field: 'FirstName',
                    width: '100px'
                },
                {
                    label: 'LastName',
                    field: 'LastName',
                    width: '100px'
                },
                {
                    label: 'City',
                    field: 'City',
                    width: '100px'
                },
                {
                    label: 'Date',
                    field: 'Date',
                    width: '100px',
                    custom: 'Date',
                    type:   Date
                },
                {
                    label: 'Phone_no',
                    field: 'Phone_no',
                    width: '100px'
                },

            ],
            rows:[]
        }
    },
    methods:{
       editRow(id){
           this.editId = id;
       },
       Save(data){
           console.log(data);
           this.editId=''
       },
       home(){
           this.$router.replace({name:'EditableTable'})
       },
       getData(){
           axios.get(baseUrl).then(res =>{
                for(let i=0; i< res.data.length; i++){
                    this.rows.push({
                        FirstName: res.data[i].FirstName,
                        LastName: res.data[i].LastName,
                        City :res.data[i].City,
                        Date: res.data[i].Date,
                        Phone_no :res.data[i].Phone_no
                    })
                }
            })
        },
        
    },
    created(){
        this.getData();
    }
}
</script>