webpackJsonp([8],{d7Vm:function(e,t){},dqdX:function(e,t){},u5in:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l("woOf"),r=l.n(i),s=l("vLgD");var a=l("xT6B"),n=[{name:"订单已提交，等待付款",time:"2017-04-01 12:00:00 "},{name:"订单付款成功",time:"2017-04-01 12:00:00 "},{name:"在北京市进行下级地点扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在分拨中心广东深圳公司进行卸车扫描，等待付款",time:"2017-04-01 12:00:00 "},{name:"在广东深圳公司进行发出扫描",time:"2017-04-01 12:00:00 "},{name:"到达目的地网点广东深圳公司，快件将很快进行派送",time:"2017-04-01 12:00:00 "},{name:"订单已签收，期待再次为您服务",time:"2017-04-01 12:00:00 "}],o={name:"logisticsDialog",props:{value:Boolean},computed:{visible:{get:function(){return this.value},set:function(e){this.value=e}}},data:function(){return{logisticsList:r()({},n)}},methods:{emitInput:function(e){this.$emit("input",e)},handleClose:function(){this.emitInput(!1)}}},u={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-dialog",{attrs:{title:"订单跟踪",visible:e.visible,"before-close":e.handleClose,width:"40%"},on:{"update:visible":function(t){e.visible=t}}},[l("el-steps",{attrs:{direction:"vertical",active:6,"finish-status":"success",space:"50px"}},e._l(e.logisticsList,function(e){return l("el-step",{key:e.name,attrs:{title:e.name,description:e.time}})}),1)],1)},staticRenderFns:[]};var c={pageNum:1,pageSize:10,orderSn:null,receiverKeyword:null,status:null,orderType:null,sourceType:null,createTime:null},d={name:"orderList",components:{LogisticsDialog:l("VU/8")(o,u,!1,function(e){l("dqdX")},null,null).exports},data:function(){return{listQuery:r()({},c),listLoading:!0,list:null,total:null,operateType:null,multipleSelection:[],closeOrder:{dialogVisible:!1,content:null,orderIds:[]},statusOptions:[{label:"待付款",value:0},{label:"待发货",value:1},{label:"已发货",value:2},{label:"已完成",value:3},{label:"已关闭",value:4}],orderTypeOptions:[{label:"正常订单",value:0},{label:"秒杀订单",value:1}],sourceTypeOptions:[{label:"PC订单",value:0},{label:"APP订单",value:1}],operateOptions:[{label:"批量发货",value:1},{label:"关闭订单",value:2},{label:"删除订单",value:3}],logisticsDialogVisible:!1}},created:function(){this.getList()},filters:{formatCreateTime:function(e){var t=new Date(e);return Object(a.a)(t,"yyyy-MM-dd hh:mm:ss")},formatPayType:function(e){return 1===e?"支付宝":2===e?"微信":"未支付"},formatSourceType:function(e){return 1===e?"APP订单":"PC订单"},formatStatus:function(e){return 1===e?"待发货":2===e?"已发货":3===e?"已完成":4===e?"已关闭":5===e?"无效订单":"待付款"}},methods:{handleResetSearch:function(){this.listQuery=r()({},c)},handleSearchList:function(){this.listQuery.pageNum=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleViewOrder:function(e,t){this.$router.push({path:"/oms/orderDetail",query:{id:t.id}})},handleCloseOrder:function(e,t){this.closeOrder.dialogVisible=!0,this.closeOrder.orderIds=[t.id]},handleDeliveryOrder:function(e,t){var l=this.covertOrder(t);this.$router.push({path:"/oms/deliverOrderList",query:{list:[l]}})},handleViewLogistics:function(e,t){this.logisticsDialogVisible=!0},handleDeleteOrder:function(e,t){var l=[];l.push(t.id),this.deleteOrder(l)},handleBatchOperate:function(){if(null==this.multipleSelection||this.multipleSelection.length<1)this.$message({message:"请选择要操作的订单",type:"warning",duration:1e3});else if(1===this.operateType){for(var e=[],t=0;t<this.multipleSelection.length;t++)1===this.multipleSelection[t].status&&e.push(this.covertOrder(this.multipleSelection[t]));if(0===e.length)return void this.$message({message:"选中订单中没有可以发货的订单",type:"warning",duration:1e3});this.$router.push({path:"/oms/deliverOrderList",query:{list:e}})}else if(2===this.operateType){this.closeOrder.orderIds=[];for(var l=0;l<this.multipleSelection.length;l++)this.closeOrder.orderIds.push(this.multipleSelection[l].id);this.closeOrder.dialogVisible=!0}else if(3===this.operateType){for(var i=[],r=0;r<this.multipleSelection.length;r++)i.push(this.multipleSelection[r].id);this.deleteOrder(i)}},handleSizeChange:function(e){this.listQuery.pageNum=1,this.listQuery.pageSize=e,this.getList()},handleCurrentChange:function(e){this.listQuery.pageNum=e,this.getList()},handleCloseOrderConfirm:function(){var e=this;if(null!=this.closeOrder.content&&""!==this.closeOrder.content){var t=new URLSearchParams;t.append("ids",this.closeOrder.orderIds),t.append("note",this.closeOrder.content),function(e){return Object(s.a)({url:"/order/update/close",method:"post",params:e})}(t).then(function(t){e.closeOrder.orderIds=[],e.closeOrder.dialogVisible=!1,e.getList(),e.$message({message:"修改成功",type:"success",duration:1e3})})}else this.$message({message:"操作备注不能为空",type:"warning",duration:1e3})},getList:function(e){var t,l=this;if(this.listLoading=!0,e&&e.length>0)return e.forEach(function(e){l.list=l.list.filter(function(t){return t.id!==e})}),this.total-=e.length,void(this.listLoading=!1);(t=this.listQuery,Object(s.a)({url:"/order/list",method:"get",params:t})).then(function(e){l.listLoading=!1,l.list=e.data.list,l.total=e.data.total})},deleteOrder:function(e){var t=this;this.$confirm("是否要进行该删除操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({message:"删除成功！",type:"success",duration:1e3}),t.getList(e)})},covertOrder:function(e){var t=e.receiverProvince+e.receiverCity+e.receiverRegion+e.receiverDetailAddress;return{orderId:e.id,orderSn:e.orderSn,receiverName:e.receiverName,receiverPhone:e.receiverPhone,receiverPostCode:e.receiverPostCode,address:t,deliveryCompany:null,deliverySn:null}}}},p={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-card",{staticClass:"filter-container",attrs:{shadow:"never"}},[l("div",[l("i",{staticClass:"el-icon-search"}),e._v(" "),l("span",[e._v("筛选搜索")]),e._v(" "),l("el-button",{staticStyle:{float:"right"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleSearchList()}}},[e._v("\n        查询搜索\n      ")]),e._v(" "),l("el-button",{staticStyle:{float:"right","margin-right":"15px"},attrs:{size:"small"},on:{click:function(t){return e.handleResetSearch()}}},[e._v("\n        重置\n      ")])],1),e._v(" "),l("div",{staticStyle:{"margin-top":"15px"}},[l("el-form",{attrs:{inline:!0,model:e.listQuery,size:"small","label-width":"140px"}},[l("el-form-item",{attrs:{label:"输入搜索："}},[l("el-input",{staticClass:"input-width",attrs:{placeholder:"订单编号"},model:{value:e.listQuery.orderSn,callback:function(t){e.$set(e.listQuery,"orderSn",t)},expression:"listQuery.orderSn"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"收货人："}},[l("el-input",{staticClass:"input-width",attrs:{placeholder:"收货人姓名/手机号码"},model:{value:e.listQuery.receiverKeyword,callback:function(t){e.$set(e.listQuery,"receiverKeyword",t)},expression:"listQuery.receiverKeyword"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"提交时间："}},[l("el-date-picker",{staticClass:"input-width",attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"请选择时间"},model:{value:e.listQuery.createTime,callback:function(t){e.$set(e.listQuery,"createTime",t)},expression:"listQuery.createTime"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"订单状态："}},[l("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"订单分类："}},[l("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.orderType,callback:function(t){e.$set(e.listQuery,"orderType",t)},expression:"listQuery.orderType"}},e._l(e.orderTypeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),l("el-form-item",{attrs:{label:"订单来源："}},[l("el-select",{staticClass:"input-width",attrs:{placeholder:"全部",clearable:""},model:{value:e.listQuery.sourceType,callback:function(t){e.$set(e.listQuery,"sourceType",t)},expression:"listQuery.sourceType"}},e._l(e.sourceTypeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1)],1)]),e._v(" "),l("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[l("i",{staticClass:"el-icon-tickets"}),e._v(" "),l("span",[e._v("数据列表")])]),e._v(" "),l("div",{staticClass:"table-container"},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],ref:"orderTable",staticStyle:{width:"100%"},attrs:{data:e.list,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"60",align:"center"}}),e._v(" "),l("el-table-column",{attrs:{label:"编号",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"订单编号",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.orderSn))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"提交时间",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatCreateTime")(t.row.createTime)))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"用户账号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.memberUsername))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"订单金额",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("￥"+e._s(t.row.totalAmount))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"支付方式",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatPayType")(t.row.payType)))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"订单来源",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatSourceType")(t.row.sourceType)))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"订单状态",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatStatus")(t.row.status)))]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.handleViewOrder(t.$index,t.row)}}},[e._v("查看订单")]),e._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:0===t.row.status,expression:"scope.row.status === 0"}],attrs:{size:"mini"},on:{click:function(l){return e.handleCloseOrder(t.$index,t.row)}}},[e._v("关闭订单")]),e._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:1===t.row.status,expression:"scope.row.status === 1"}],attrs:{size:"mini"},on:{click:function(l){return e.handleDeliveryOrder(t.$index,t.row)}}},[e._v("订单发货")]),e._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:2===t.row.status||3===t.row.status,expression:"scope.row.status === 2 || scope.row.status === 3"}],attrs:{size:"mini"},on:{click:function(l){return e.handleViewLogistics(t.$index,t.row)}}},[e._v("订单跟踪")]),e._v(" "),l("el-button",{directives:[{name:"show",rawName:"v-show",value:4===t.row.status,expression:"scope.row.status === 4"}],attrs:{size:"mini",type:"danger"},on:{click:function(l){return e.handleDeleteOrder(t.$index,t.row)}}},[e._v("删除订单")])]}}])})],1)],1),e._v(" "),l("div",{staticClass:"batch-operate-container"},[l("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:e.operateType,callback:function(t){e.operateType=t},expression:"operateType"}},e._l(e.operateOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),e._v(" "),l("el-button",{staticClass:"search-button",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.handleBatchOperate()}}},[e._v("\n      确定\n    ")])],1),e._v(" "),l("div",{staticClass:"pagination-container"},[l("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","current-page":e.listQuery.pageNum,"page-size":e.listQuery.pageSize,"page-sizes":[5,10,15],total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){return e.$set(e.listQuery,"pageNum",t)},"update:current-page":function(t){return e.$set(e.listQuery,"pageNum",t)}}})],1),e._v(" "),l("el-dialog",{attrs:{title:"关闭订单",visible:e.closeOrder.dialogVisible,width:"30%"},on:{"update:visible":function(t){return e.$set(e.closeOrder,"dialogVisible",t)}}},[l("span",{staticStyle:{"vertical-align":"top"}},[e._v("操作备注：")]),e._v(" "),l("el-input",{staticStyle:{width:"80%"},attrs:{type:"textarea",rows:5,placeholder:"请输入内容"},model:{value:e.closeOrder.content,callback:function(t){e.$set(e.closeOrder,"content",t)},expression:"closeOrder.content"}}),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.closeOrder.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.handleCloseOrderConfirm}},[e._v("确 定")])],1)],1),e._v(" "),l("logistics-dialog",{model:{value:e.logisticsDialogVisible,callback:function(t){e.logisticsDialogVisible=t},expression:"logisticsDialogVisible"}})],1)},staticRenderFns:[]};var h=l("VU/8")(d,p,!1,function(e){l("d7Vm")},"data-v-69831f1c",null);t.default=h.exports}});
//# sourceMappingURL=8.8f5fd2fd55d569d58463.js.map