import React from "react"
import { Card ,Button,Table} from 'antd';
import { blist } from "api/blist"
import XLSX from "xlsx"
import ModalCom from "components/modal"
import {tabSaveAction} from "action/tabAction"
import {connect} from "react-redux";
class Bmanagement extends React.Component{
    constructor(){
        super()
        this.state = {
            dataSource:[],
            columns:[],
            flag:true,
            modalStatus:false
        }
    }
    render(){
        let {dataSource,columns,flag,modalStatus} = this.state;
        return (
            <Card title="商家列表" bordered={false} extra={<Button onClick={this.exportFile.bind(this)}>导出excel</Button>}>
                <Table
                      dataSource={dataSource}
                       columns={columns}
                       rowKey={(record)=>record.id}
                      loading={flag}
                       pagination={{
                            pageSize:5,
                            total:100,
                            hideOnSinglePage:true,
                            onChange:this.handleChange.bind(this)
                         }} />
                         <ModalCom modalStatus={modalStatus}/>
            </Card>
        )
    }
    handleChange(page, pageSize){
        console.log(page, pageSize)
        //在这里发送ajax
    }
   async componentDidMount() {
        let data = await blist();
        if(data){
            this.setBlist(data);
        }


    }
    setBlist(data){
        let keys = Object.keys(data.data.list[0]);
        let mapKeys = {
            id:"id",
            name:"店铺名称",
            address:"商家地址",
            tel:"商家电话",
            logo:"商家Logo"
        }
        let  columns = keys.map((item)=>{
           if(item == "logo"){
               return {
                   title: mapKeys[item],
                   dataIndex: item,
                   key:item,
                   render:(text)=> <img src={text} />
               }
           }else{
               return {
                   title: mapKeys[item],
                   dataIndex: item,
                   key:item,
               }
           }
        })

        columns.push({
            title: "操作",
            key:"operation",
            render:(record)=> <div>
                     <Button size="small" type="primary" onClick={this.handleModify.bind(this,record)}>编辑</Button>
                     <Button size="small" onClick={this.handleDel.bind(this,record)}>删除</Button>
            </div>
        })
        this.setState({
            dataSource:data.data.list,
            columns,
            flag:false
        })
    }
    handleDel(record){
        console.log(record)
    }
    handleModify(record){
        this.setState({
            modalStatus:true
        })
        this.props.tabSaveData(record)
    }
    //导出excel
    exportFile() {
        let data = [Object.keys(this.state.dataSource[0])]

        for(var i=0;i<this.state.dataSource.length;i++){
            data.push(Object.values(this.state.dataSource[i]));
        }
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        XLSX.writeFile(wb, "sheetjs.xlsx")
    };

}

const mapDispatchToprops = (dispatch)=>({
    tabSaveData(val){
        dispatch(tabSaveAction(val))
    }
})

export default connect(null,mapDispatchToprops)(Bmanagement)
/*
前端首先获取到当前的页数  以及规定好的每页显示多少条   当点击按钮的时候发生一个ajax

ajax将page(当前的页数) 以及每页显示的条目数 发送给服务端


服务端接收到page pagesize 然后去数据库中取数据


limit(显示多少条) skip(跳过多少条)

做数据库的操作
页数  显示  跳过
1     2     0
2     2     2
3     2     4
4     2     6

db.表名.find().skip((page-1)*pagesize).limit(pagesize)





*/