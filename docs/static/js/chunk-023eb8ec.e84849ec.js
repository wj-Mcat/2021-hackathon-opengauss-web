(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-023eb8ec"],{"50b9":function(t,e,a){"use strict";a("bf3e")},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("Header"),a("el-row",{staticStyle:{padding:"0 20px 20px 20px"},attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"500px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("高频关键词")])]),a("word")],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"500px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("消息频率检测")])]),a("message")],1)],1)],1),a("el-row",{staticStyle:{padding:"0 20px 20px 20px"},attrs:{gutter:40}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"500px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("高频Emoji")])]),a("emoji")],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"500px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("高频消息回复者")])]),a("top")],1)],1)],1),a("el-row",{staticStyle:{padding:"0 20px 20px 20px"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("高频问答对")])]),a("question")],1)],1)],1)},i=[],n=a("ade3"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",staticStyle:{padding:"0 20px 20px 20px"},attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:16,sm:16,lg:8}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("i",{staticClass:"el-icon-user-solid"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("群人数")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.roomMembers,duration:t.duration}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"近期新增"+t.newRoomMembers+"位群友",placement:"top"}},[a("span",{staticStyle:{color:"green"},attrs:{title:""}},[a("i",{staticClass:"el-icon-top"}),t._v(" "+t._s(t.newRoomMembers)+" ")])])],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:16,sm:16,lg:8}},[a("div",{staticClass:"card-panel"},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("i",{staticClass:"el-icon-message"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("近一周消息数量")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.weekMessages,duration:t.duration}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"近期新增"+t.newWeekMessages+"条消息",placement:"top"}},[a("span",{staticStyle:{color:"green"}},[a("i",{staticClass:"el-icon-top"}),t._v(" "+t._s(t.newWeekMessages)+" ")])])],1)])]),a("el-col",{staticClass:"card-panel-col",attrs:{xs:16,sm:16,lg:8}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("i",{staticClass:"el-icon-refrigerator"})]),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("价值会话存档")]),a("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.questionCount,duration:t.duration}}),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"近期新增"+t.newQuestionCount+"条价值会话存档",placement:"top"}},[a("span",{staticStyle:{color:"green"}},[a("i",{staticClass:"el-icon-top"}),t._v(" "+t._s(t.newQuestionCount)+" ")])])],1)])])],1)},r=[],l=a("ec1b"),c=a.n(l),d=a("b775"),u="http://139.186.142.22:5001";function h(){return Object(d["a"])({url:u+"/room-members",method:"get"})}function p(){return Object(d["a"])({url:u+"/one-week-messages",method:"get"})}function m(){return Object(d["a"])({url:u+"/question-answer-count",method:"get"})}function f(){return Object(d["a"])({url:u+"/question-answer",method:"get"})}function g(){return Object(d["a"])({url:u+"/word-cloud",method:"get"})}function b(){return Object(d["a"])({url:u+"/freq-message",method:"get"})}function _(){return Object(d["a"])({url:u+"/top_emoji",method:"get"})}function x(){return Object(d["a"])({url:u+"/great_person",method:"get"})}var v={name:"Header",components:{CountTo:c.a},data:function(){return{roomMembers:20,newRoomMembers:2,weekMessages:34,newWeekMessages:3,questionCount:45,newQuestionCount:1,duration:3e3}},mounted:function(){this.fetch_data()},methods:{fetch_data:function(){var t=this;h().then((function(e){t.roomMembers=e.data})),m().then((function(e){t.questionCount=e.data})),p().then((function(e){t.weekMessages=e.data}))}}},y=v,w=(a("50b9"),a("2877")),C=Object(w["a"])(y,o,r,!1,null,"84010b6a",null),S=C.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vue-word-cloud",{staticStyle:{height:"480px",width:"640px"},attrs:{words:t.words,color:function(t){var e=t[1];return e>10?"DeepPink":e>5?"RoyalBlue":"Indigo"},"font-family":"Roboto"}})},O=[],M=(a("b0c0"),a("2d8a")),E=a.n(M),k={components:Object(n["a"])({},E.a.name,E.a),data:function(){return{words:[]}},mounted:function(){this.fetch_data()},methods:{fetch_data:function(){var t=this;g().then((function(e){t.words=e.data}))}}},D=k,L=Object(w["a"])(D,j,O,!1,null,null,null),A=L.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.message_id}})},R=[],W=(a("313e"),{name:"Message",props:{className:{type:String,default:"chart"},message_id:{type:String,default:"message_id"},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},data:function(){return{chart:null,times:[],count:[]}},mounted:function(){this.fetch_data()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{fetch_data:function(){var t=this;b().then((function(e){t.times=e.data.times,t.count=e.data.count,t.initChart()}))},initChart:function(){var t=echarts__WEBPACK_IMPORTED_MODULE_0__;this.chart=t.init(document.getElementById(this.message_id));(function(){for(var t=[],e=1;e<13;e++)t.push(e+"month")})();this.chart.setOption({title:{text:"statistics",x:"20",top:"20",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{textStyle:{color:"#fff"}}},grid:{left:"5%",right:"5%",borderWidth:0,top:150,bottom:95,textStyle:{color:"#fff"}},legend:{x:"5%",top:"10%",textStyle:{color:"#90979c"},data:["消息频率"]},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#90979c"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0},data:this.times}],yAxis:[{type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#90979c"}},axisTick:{show:!1},axisLabel:{interval:0},splitArea:{show:!1}}],series:[{name:"average",type:"line",stack:"total",symbolSize:10,symbol:"circle",itemStyle:{normal:{color:"rgba(252,230,48,1)",barBorderRadius:0,label:{show:!0,position:"top",formatter:function(t){return t.value>0?t.value:""}}}},data:this.count}]})}}}),q=W,B=Object(w["a"])(q,P,R,!1,null,null,null),T=B.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.id}})},Q=[],$={name:"Emoji",props:{className:{type:String,default:"chart"},id:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},data:function(){return{chart:null,emojis_list:[],emojis_count:[]}},mounted:function(){this.fetch_data()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{fetch_data:function(){var t=this;_().then((function(e){t.emojis_list=e.data.list,t.emojis_count=e.data.count,t.initChart()}))},initChart:function(){var t=echarts__WEBPACK_IMPORTED_MODULE_0__;this.chart=t.init(document.getElementById(this.id));var e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:this.emojis_list},series:[{name:"2021年",type:"bar",data:this.emojis_count}]};this.chart.setOption(e)}}},N=$,z=Object(w["a"])(N,I,Q,!1,null,null,null),H=z.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width},attrs:{id:t.top_id}})},U=[],G={name:"Top",props:{className:{type:String,default:"chart"},top_id:{type:String,default:"top_id"},width:{type:String,default:"100%"},height:{type:String,default:"400px"}},data:function(){return{chart:null,names:[],count:[]}},mounted:function(){this.fetch_data()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{fetch_data:function(){var t=this;x().then((function(e){t.names=e.data.names,t.count=e.data.count,t.initChart()}))},initChart:function(){var t=echarts__WEBPACK_IMPORTED_MODULE_0__;this.chart=t.init(document.getElementById(this.top_id));var e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:{type:"value",boundaryGap:[0,.01]},xAxis:{type:"category",data:this.names},series:[{name:"2021年",type:"bar",data:this.count}]};this.chart.setOption(e)}}},J=G,V=Object(w["a"])(J,K,U,!1,null,null,null),F=V.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"room",label:"房间"}}),a("el-table-column",{attrs:{prop:"datetime",label:"时间"}}),a("el-table-column",{attrs:{prop:"talker",label:"说话者"}}),a("el-table-column",{attrs:{prop:"content",label:"内容"}})],1)},Y=[],Z={name:"Question",data:function(){return{tableData:[]}},mounted:function(){this.fetch_data()},methods:{fetch_data:function(){var t=this;f().then((function(e){t.tableData=e.data}))}}},tt=Z,et=Object(w["a"])(tt,X,Y,!1,null,null,null),at=et.exports,st={name:"Dashboard",components:Object(n["a"])({Header:S,Word:A,Message:T,Emoji:H,Top:F,Question:at},"Question",at),data:function(){return{roomMembers:20,newRoomMembers:2,weekMessages:34,newWeekMessages:3,questionCount:45,newQuestionCount:4,duration:3e3}}},it=st,nt=Object(w["a"])(it,s,i,!1,null,null,null);e["default"]=nt.exports},bf3e:function(t,e,a){}}]);