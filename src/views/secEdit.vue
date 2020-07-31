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
                    <el-button size="mini" type="success"   @click="Save(props.row)">Save</el-button>     
                </div>

                <div v-else>
                    <div v-if="props.row.id == editId">
                        <el-date-picker v-model="props.row[props.column.field]" v-if="props.column.custom =='date'" placeholder=""></el-date-picker>
                        <el-select v-model="props.row[props.column.field]" v-else-if="props.column.custom =='select'" placeholder="">
                          <el-option v-for="item in options"  :label="item.label" :key="item.value" :value="item.value"></el-option>
                        </el-select>
                        <el-input v-else v-model="props.row[props.column.field]"></el-input>
                    </div>
                    <div v-else>
                        <span>{{props.row[props.column.field]}}</span>
                    </div>
                </div>
            </template>

        </vue-good-table>
    </div>
</template>

<script>
export default {
    name:'Edit',
    data() {
        return {
            editId:'',
            options:[
                {
                    value: 'Option 1',
                    label: 'Option 1'
                },
                {
                    value: 'Option 2',
                    label: 'Option 2',
                },
                  {
                    value: 'Option 3',
                    label: 'Option 3',
                }
            ],
            columns:[
                {
                    label: 'Action',
                    field: 'btn',
                    width: '50px'
                },
                {
                    label : 'Name',
                    field : 'name',
                    width: '100px'
                },
                {
                    label : 'Date',
                    field : 'date',
                    custom: 'date',
                    type: Date,
                    width: '100px'
                },
                {
                    label : 'Select',
                    field : 'select',
                    custom:'select',
                    width: '100px'
                }
            ],
            rows:[
                {
                    id:1, name:'Ramos', age:33, date:'2020-02-12', select: 'Option1'
                },
                {
                    id:2, name:'Marcelo', age:32, date:'2019-04-17', select: 'Option2'
                },
                {
                    id:3, name:'Benzema', age:29, date:'2019-12-18', select: 'Option1'
                },
                {
                    id:4, name:'Hazard', age:27, date:'2019-09-02', select: 'Option2'
                },
                {
                    id:5, name:'Isco', age:27, date:'2019-11-07', select: 'Option3'
                },
                {
                    id:6, name:'Vinicius', age:20, date:'2018-02-01', select: 'Option3'
                }
            ]        
        }
    },
    methods:{
        editRow(id){
            this.editId = id;
        },
        Save(data){
            this.editId = '';
            console.log(data);
        }
    }
}
</script>