<template>
  <div class="dashboard-container">
    <Header />
    <el-row :gutter="40" style="padding: 0 20px 20px 20px;">
      <el-col :span="12">
        <el-card class="box-card" style="height: 500px;">
           <div slot="header" class="clearfix">
            <span>高频关键词</span>
          </div>
          <word />
        </el-card>
      </el-col>
      <el-col :span="12">
       <el-card class="box-card" style="height: 500px">
           <div slot="header" class="clearfix">
            <span>消息频率检测</span>
          </div>
          <message />
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="40" style="padding: 0 20px 20px 20px;">
      <el-col :span="12">
        <el-card class="box-card" style="height: 500px;">
           <div slot="header" class="clearfix">
            <span>高频Emoji</span>
          </div>
          <emoji /> 
        </el-card>
      </el-col>
      <el-col :span="12">
       <el-card class="box-card" style="height: 500px">
           <div slot="header" class="clearfix">
            <span>高频消息回复者</span>
          </div>
          <top />
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding: 0 20px 20px 20px">
      <el-card class="box-card">
           <div slot="header" class="clearfix">
            <span>高频问答对</span>
          </div>
          <question />
        </el-card>
    </el-row>
    
    
  </div>
</template>

<script>
import Header from "./header.vue";
import Word from "./word.vue";
import Message from "./message";
import Emoji from "./emoji";
import Top from "./top";
import Question from "./question";

export default {
  name: "Dashboard",
  components: {
    Header,
    Word,
    Message,
    Emoji,
    Top,
    Question,
    Question
  },
  data() {
    return {
      // header panel dashboard
      roomMembers: 20,
      newRoomMembers: 2,

      weekMessages: 34,
      newWeekMessages: 3,

      questionCount: 45,
      newQuestionCount: 4,

      duration: 3000,
    };
  },
};
</script>

