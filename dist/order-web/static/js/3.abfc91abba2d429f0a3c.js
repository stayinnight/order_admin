webpackJsonp([3],{"0jVI":function(t,e){},TQiQ:function(t,e){},TZVV:function(t,e,r){"use strict";var a=r("//Fk"),i=r.n(a),s=r("ZW30"),o={name:"singleUpload",props:{value:String},computed:{imageUrl:function(){return this.value},imageName:function(){return null!=this.value&&""!==this.value?this.value.substr(this.value.lastIndexOf("/")+1):null},fileList:function(){return[{name:this.imageName,url:this.imageUrl}]},showFileList:{get:function(){return null!==this.value&&""!==this.value&&void 0!==this.value},set:function(t){}}},data:function(){return{dataObj:{policy:"",signature:"",key:"",ossaccessKeyId:"",dir:"",host:""},dialogVisible:!1,useOss:!1,ossUploadUrl:"http://macro-oss.oss-cn-shenzhen.aliyuncs.com",minioUploadUrl:"http://localhost:8080/minio/upload"}},methods:{emitInput:function(t){this.$emit("input",t)},handleRemove:function(t,e){this.emitInput("")},handlePreview:function(t){this.dialogVisible=!0},beforeUpload:function(t){var e=this;return!this.useOss||new i.a(function(t,r){Object(s.a)().then(function(r){e.dataObj.policy=r.data.policy,e.dataObj.signature=r.data.signature,e.dataObj.ossaccessKeyId=r.data.accessKeyId,e.dataObj.key=r.data.dir+"/${filename}",e.dataObj.dir=r.data.dir,e.dataObj.host=r.data.host,t(!0)}).catch(function(t){console.log(t),r(!1)})})},handleUploadSuccess:function(t,e){this.showFileList=!0,this.fileList.pop();var r=this.dataObj.host+"/"+this.dataObj.dir+"/"+e.name;this.useOss||(r=t.data.url),this.fileList.push({name:e.name,url:r}),this.emitInput(this.fileList[0].url)}}},l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-upload",{attrs:{action:t.useOss?t.ossUploadUrl:t.minioUploadUrl,data:t.useOss?t.dataObj:null,"list-type":"picture",multiple:!1,"show-file-list":t.showFileList,"file-list":t.fileList,"before-upload":t.beforeUpload,"on-remove":t.handleRemove,"on-success":t.handleUploadSuccess,"on-preview":t.handlePreview}},[r("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过10MB")])],1),t._v(" "),r("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[r("img",{attrs:{width:"100%",src:t.fileList[0].url,alt:""}})])],1)},staticRenderFns:[]};var n=r("VU/8")(o,l,!1,function(t){r("0jVI")},null,null);e.a=n.exports},ZW30:function(t,e,r){"use strict";e.a=function(){return Object(a.a)({url:"/aliyun/oss/policy",method:"get"})};var a=r("vLgD")},o2SR:function(t,e){},"tU/9":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("woOf"),i=r.n(a),s=r("mRsl"),o=r("KhLR"),l=r("3idm"),n={description:"",icon:"",keywords:"",name:"",navStatus:0,parentId:0,productUnit:"",showStatus:0,sort:0,productAttributeIdList:[]},u={name:"ProductCateDetail",components:{SingleUpload:r("TZVV").a},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{productCate:i()({},n),selectProductCateList:[],rules:{name:[{required:!0,message:"请输入品牌名称",trigger:"blur"},{min:2,max:140,message:"长度在 2 到 140 个字符",trigger:"blur"}]},filterAttrs:[],filterProductAttrList:[{value:[]}]}},created:function(){var t=this;this.isEdit?(Object(s.d)(this.$route.query.id).then(function(e){t.productCate=e.data}),Object(l.b)(this.$route.query.id).then(function(e){if(null!=e.data&&e.data.length>0){t.filterProductAttrList=[];for(var r=0;r<e.data.length;r++)t.filterProductAttrList.push({key:Date.now()+r,value:[e.data[r].attributeCategoryId,e.data[r].attributeId]})}})):this.productCate=i()({},n),this.getSelectProductCateList(),this.getProductAttrCateList()},methods:{getSelectProductCateList:function(){var t=this;Object(s.b)(0,{pageSize:100,pageNum:1}).then(function(e){t.selectProductCateList=e.data.list,t.selectProductCateList.unshift({id:0,name:"无上级分类"})})},getProductAttrCateList:function(){var t=this;Object(o.c)().then(function(e){for(var r=e.data,a=0;a<r.length;a++){var i=r[a],s=[];if(null!=i.productAttributeList&&i.productAttributeList.length>0)for(var o=0;o<i.productAttributeList.length;o++)s.push({label:i.productAttributeList[o].name,value:i.productAttributeList[o].id});t.filterAttrs.push({label:i.name,value:i.id,children:s})}})},getProductAttributeIdList:function(){for(var t=[],e=0;e<this.filterProductAttrList.length;e++){var r=this.filterProductAttrList[e];null!==r.value&&2===r.value.length&&t.push(r.value[1])}return t},onSubmit:function(t){var e=this;this.$refs[t].validate(function(r){if(!r)return e.$message({message:"验证失败",type:"error",duration:1e3}),!1;e.$confirm("是否提交数据","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.isEdit?(e.productCate.productAttributeIdList=e.getProductAttributeIdList(),Object(s.f)(e.$route.query.id,e.productCate).then(function(t){e.$message({message:"修改成功",type:"success",duration:1e3}),e.$router.back()})):(e.productCate.productAttributeIdList=e.getProductAttributeIdList(),Object(s.a)(e.productCate).then(function(r){e.$refs[t].resetFields(),e.resetForm(t),e.$message({message:"提交成功",type:"success",duration:1e3})}))})})},resetForm:function(t){this.$refs[t].resetFields(),this.productCate=i()({},n),this.getSelectProductCateList(),this.filterProductAttrList=[{value:[]}]},removeFilterAttr:function(t){if(1!==this.filterProductAttrList.length){var e=this.filterProductAttrList.indexOf(t);-1!==e&&this.filterProductAttrList.splice(e,1)}else this.$message({message:"至少要留一个",type:"warning",duration:1e3})},handleAddFilterAttr:function(){3!==this.filterProductAttrList.length?this.filterProductAttrList.push({value:null,key:Date.now()}):this.$message({message:"最多添加三个",type:"warning",duration:1e3})}},filters:{filterLabelFilter:function(t){return 0===t?"筛选属性：":""}}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"form-container",attrs:{shadow:"never"}},[r("el-form",{ref:"productCateFrom",attrs:{model:t.productCate,rules:t.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"分类名称：",prop:"name"}},[r("el-input",{model:{value:t.productCate.name,callback:function(e){t.$set(t.productCate,"name",e)},expression:"productCate.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"上级分类："}},[r("el-select",{attrs:{placeholder:"请选择分类"},model:{value:t.productCate.parentId,callback:function(e){t.$set(t.productCate,"parentId",e)},expression:"productCate.parentId"}},t._l(t.selectProductCateList,function(t){return r("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"数量单位："}},[r("el-input",{model:{value:t.productCate.productUnit,callback:function(e){t.$set(t.productCate,"productUnit",e)},expression:"productCate.productUnit"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"排序："}},[r("el-input",{model:{value:t.productCate.sort,callback:function(e){t.$set(t.productCate,"sort",e)},expression:"productCate.sort"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"是否显示："}},[r("el-radio-group",{model:{value:t.productCate.showStatus,callback:function(e){t.$set(t.productCate,"showStatus",e)},expression:"productCate.showStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"是否显示在导航栏："}},[r("el-radio-group",{model:{value:t.productCate.navStatus,callback:function(e){t.$set(t.productCate,"navStatus",e)},expression:"productCate.navStatus"}},[r("el-radio",{attrs:{label:1}},[t._v("是")]),t._v(" "),r("el-radio",{attrs:{label:0}},[t._v("否")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"分类图标："}},[r("single-upload",{model:{value:t.productCate.icon,callback:function(e){t.$set(t.productCate,"icon",e)},expression:"productCate.icon"}})],1),t._v(" "),t._l(t.filterProductAttrList,function(e,a){return r("el-form-item",{key:e.key,attrs:{label:t._f("filterLabelFilter")(a)}},[r("el-cascader",{attrs:{clearable:"",options:t.filterAttrs},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"filterProductAttr.value"}}),t._v(" "),r("el-button",{staticStyle:{"margin-left":"20px"},on:{click:function(r){return r.preventDefault(),t.removeFilterAttr(e)}}},[t._v("删除")])],1)}),t._v(" "),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(e){return t.handleAddFilterAttr()}}},[t._v("新增")])],1),t._v(" "),r("el-form-item",{attrs:{label:"关键词："}},[r("el-input",{model:{value:t.productCate.keywords,callback:function(e){t.$set(t.productCate,"keywords",e)},expression:"productCate.keywords"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"分类描述："}},[r("el-input",{attrs:{type:"textarea",autosize:!0},model:{value:t.productCate.description,callback:function(e){t.$set(t.productCate,"description",e)},expression:"productCate.description"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.onSubmit("productCateFrom")}}},[t._v("提交")]),t._v(" "),t.isEdit?t._e():r("el-button",{on:{click:function(e){return t.resetForm("productCateFrom")}}},[t._v("重置")])],1)],2)],1)},staticRenderFns:[]};var d={name:"addProductCate",components:{ProductCateDetail:r("VU/8")(u,c,!1,function(t){r("TQiQ")},"data-v-847349bc",null).exports}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("product-cate-detail",{attrs:{"is-edit":!1}})},staticRenderFns:[]};var f=r("VU/8")(d,p,!1,function(t){r("o2SR")},null,null);e.default=f.exports}});
//# sourceMappingURL=3.abfc91abba2d429f0a3c.js.map