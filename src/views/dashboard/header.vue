<template>
  <el-row :gutter="40" class="panel-group" style="padding: 0 20px 20px 20px">
    <el-col :xs="16" :sm="16" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-user-solid"></i>
          <!-- <svg-icon icon-class="peoples" class-name="card-panel-icon" /> -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">群人数</div>
          <count-to
            :start-val="0"
            :end-val="roomMembers"
            :duration="duration"
            class="card-panel-num"
          />
          <el-tooltip
            class="item"
            effect="light"
            :content="'近期新增' + newRoomMembers + '位群友'"
            placement="top"
          >
            <span style="color: green" title="">
              <i class="el-icon-top"></i>
              {{ newRoomMembers }}
            </span>
          </el-tooltip>
        </div>
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-message"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">近一周消息数量</div>
          <count-to
            :start-val="0"
            :end-val="weekMessages"
            :duration="duration"
            class="card-panel-num"
          />
          <el-tooltip
            class="item"
            effect="light"
            :content="'近期新增' + newWeekMessages + '条消息'"
            placement="top"
          >
            <span style="color: green">
              <i class="el-icon-top"></i>
              {{ newWeekMessages }}
            </span>
          </el-tooltip>
        </div>
      </div>
    </el-col>
    <el-col :xs="16" :sm="16" :lg="8" class="card-panel-col">
      <div class="card-panel" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper icon-people">
          <i class="el-icon-refrigerator"></i>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">价值会话存档</div>
          <count-to
            :start-val="0"
            :end-val="questionCount"
            :duration="duration"
            class="card-panel-num"
          />
          <el-tooltip
            class="item"
            effect="dark"
            :content="'近期新增' + newQuestionCount + '条价值会话存档'"
            placement="top"
          >
            <span style="color: green">
              <i class="el-icon-top"></i>
              {{ newQuestionCount }}
            </span>
          </el-tooltip>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from "vue-count-to";
import { get_room_members, get_question_answer_count, get_one_week_messages } from "./api";

export default {
    name: "Header",
    components: {
        CountTo
    },
    
  data() {
    return {
      // header panel dashboard
      roomMembers: 20,
      newRoomMembers: 2,

      weekMessages: 34,
      newWeekMessages: 3,

      questionCount: 45,
      newQuestionCount: 1,

      duration: 3000,
    };
  },
  mounted(){
      this.fetch_data()
  },
  methods:{
      fetch_data(){
        let $this = this;
        get_room_members().then(function(res){
            $this.roomMembers = res.data
        })
        get_question_answer_count().then(function(res){
            $this.questionCount = res.data
        })
        get_one_week_messages().then(function(res){
            $this.weekMessages = res.data
        })
      }
  },
};
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }
  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;
    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
.card-panel-icon-wrapper i {
  font-size: 50px;
}
</style>