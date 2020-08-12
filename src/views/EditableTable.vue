<template>
  <div id="Edit">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :select-options="{ enabled: true, selectOnCheckboxOnly: true }"
      :search-options="{ enabled: true }"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPageDropdown: [3,5, 10, 15]
      }">

      <template slot="table-row" slot-scope="props">
        <div v-if="props.column.field == 'btn'" style="width: 10px">
          <el-button  v-if="props.row.id == editId" type="success" size="mini" @click="okRow(props.row)">Save</el-button>
          <el-button v-else type="primary" size="mini" @click="editRow(props.row.id)">Edit</el-button>
        </div>

        <!-- <div v-else-if="props.column.html" v-html="props.row[props.column.field]">
        
        </div> -->

        <div v-else>
          <div v-if="props.row.id == editId">           
            <el-date-picker v-if="props.column.custom=='date'" size="small" v-model="props.row[props.column.field]"></el-date-picker>
            <el-select v-else-if="props.column.custom=='select'" size="small" v-model="props.row[props.column.field]" placeholder="Select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-input v-else size="small" v-model="props.row[props.column.field]"/>
          </div>

          <div v-else>
            <span>{{props.row[props.column.field]}}</span>
          </div>
        </div>
        
      </template>
      
    </vue-good-table>
    <h2>Vue.js Editable Table</h2>
    <secTable /><br>
    <el-button type="primary" @click="viewFaker()">ViewFakerTableData</el-button>
  </div>
</template>

<script>
import secTable from './secEdit'
export default {
  name: 'vueGood',
  components:{
      secTable
  },

  data(){
    return {
      options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }
      ],
      columns: [
        {
          label: 'action',
          field: 'btn',
          width: '10%'
        },
        {
          label: 'Name',
          field: 'name',
          width: '20%'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
          width: '10%',
          // tdClass: this.tdClassFunc
        },
        // {
        //   label: 'HTML',
        //   field: 'ht',
        //   width: '200px',
        //   html: true
        // },        
        {
          label: 'Date',
          field: 'createdAt',
          type: Date,
          custom: 'date',
          width: '20%'
        },
        {
          label: 'Select',
          field: 'score',
          custom: '30%'
        },
      ],
      rows: [
        // { id:1, ht:"<span style='color: green;'>HTML element</span>", name:"John", age: 20, createdAt: '', score: 'Option1' },
        { id:1, name:"John", age: 20, createdAt: '2011-10-31', score: 'Option1' },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 'Option1' },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 'Option1' },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 'Option3' },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 'Option1' },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 'Option2' },
      ],
      edit: false,
      old: {},
      editId: '',
      dateRes:''
    };
  },
  methods: {
    tdClassFunc(row) {
      console.log('row', row)
      // if (row.field > 50) {
      //   return 'red-class';
      // }
      return 'green-class';
    },
    editRow(id){
      this.editId = id;
      console.log('helo',id)
      this.edit = !this.edit;
     
    },
    okRow(data) {
      console.log('updatedata', data)
      this.editId = '';
    },
    viewFaker(){
        this.$router.replace({name:"fakerTable"})
    }
  },
};
</script>
<style scoped>
.red-class {
  color: red;
}
.green-class {
  color: green;
  font-size: 30px;
}
.custom{
  width: 20px;
}
</style>