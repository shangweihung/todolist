import React from 'react';
import { connect } from 'react-redux';
import InputTasksForm from './InputTasksForm';
import { addTodoList } from '../redux/action';

class ConnectInputTask  extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.listData) {  //新增的話則不會有listData
            this.state = this.props.listData
        } else {
            this.state = {
                id:'',
                name:'',
                date:'',
                time:'',
                file:'',
                commit:'',
                important:'',
                complete:false
            }
        }

        this.filebox = React.createRef()
        //另外考慮有一個檔案上傳沒辦法設定value,所以使用Ref

        this.changeState = this.changeState.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.submitTodo = this.submitTodo.bind(this)

        this.changeListState = type=>{
            if(this.props.changeState) {
                this.props.changeState(type)
            } else {
                console.log('新增狀態所以沒有this.props.changeState')
            }
        }
    }

    changeState(event) {
        let value = event.target.value
        if (event.target.name==="file") {
            value = value.substring(value.lastIndexOf('\\')+1)
        } else if (event.target.name==="complete") {
            value = event.target.checked
            this.changeListState('complete')
        }
        this.setState({[event.target.name]:value})
    }

    tagImportant() {
        if (this.state.important === '') {
            this.setState({ important: 'Y' })
        } else {
            this.setState({ important: '' })
        }
        //一併更新狀態到外面的`List`組件去
        this.changeListState('important')

    }

    submitTodo() {
        //先檢查資料，至少要有名稱
        if (this.state.name === '') {
            alert('待辦事項名稱未輸入！')
        } else {
            //判斷id是否有值
            if (this.state.id === '') {
                this.props.addTodoList(this.state)
                alert('成功新增！')
            }
            else {
            //有的話就執行編輯
                this.props.editTodoList(this.state)
                alert('編輯成功！')
            }

            
            //初始化資料資料
            this.setState({id:'',name:'',date:'',time:'',file:'',commit:''
            ,important:'',complete:false})
            //不受控組件另外處理
            this.filebox.current.value = ''

            this.props.closeAdd()
        }
    }



    render() {
        return (
            <div>
                <div class={this.state.important === 'Y' ?'important inputTaskTitle' : 'inputTaskTitle'}>
                    <input name="complete" type="checkbox" class="taskChk" checked={this.state.complete} onChange={this.changeState} />
                    <input name="name" type="text" placeholder="Type something here!"
                           class={(this.state.important === 'Y' ?
                           'important taskTitle ' : 'taskTitle ') +
                           (this.state.complete ? 'complete' : '')} value={this.state.name} onChange={this.changeState} />

                    <i class={this.state.important === 'Y' ?
                        'fas fa-star fa-lg icon iconImportant' : 'far fa-star fa-lg icon'}
                        onClick={this.tagImportant} ></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm 
                    closeAdd={this.props.closeAdd}
                    stateData={this.state}
                    changeState={this.changeState}
                    submitTodo={this.submitTodo}
                    filebox={this.filebox} />
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return { //使用dispatch呼叫事件addTodoList操作store
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

//而因為該組件並不需要取得任何資料，所以在沒有第一個參數mapDispatchToProps的情況下直接傳入null
const InputTask = connect(null,mapDispatchToProps)(ConnectInputTask)


export default InputTask;