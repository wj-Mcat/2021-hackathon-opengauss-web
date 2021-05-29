<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="room"
        label="房间">
      </el-table-column>
      <el-table-column
        prop="datetime"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="talker"
        label="说话者">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
    </el-table>
</template>

<script>
import { get_question_answer } from "./api";
export default {
    name: 'Question',
    data(){
        return {
            tableData: []
        }
    },
    mounted(){
        this.fetch_data()
    },
    methods: {
        fetch_data(){
            let $this = this;
            get_question_answer().then(function(res){
                $this.tableData = res.data
            })
        }
    }

}
</script>