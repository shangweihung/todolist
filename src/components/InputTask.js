import React from 'react';
import { connect } from 'react-redux';
import InputTasksForm from './InputTasksForm';
import { addTodoList } from '../redux/action';

class ConnectInputTask  extends React.Component {
    constructor(props) {
        super(props)
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
        this.filebox = React.createRef()
        this.changeState = this.changeState.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
    }

    changeState(event) {
        let value = event.target.value
        if (event.target.name==="file") {
            value = value.substring(value.lastIndexOf('\\')+1)
        } else if (event.target.name==="complete") {
            value = event.target.checked
        }
        this.setState({[event.target.name]:value})
    }

    tagImportant() {
        if (this.state.important === '') {
            this.setState({ important: 'Y' })
        } else {
            this.setState({ important: '' })
        }
    }

    submitTodo() {
        //先檢查資料，至少要有名稱
        if (this.state.name === '') {
            alert('待辦事項名稱未輸入！')
        } else {
            this.props.addTodoList(this.state)
            alert('新增成功')
            this.props.closeAdd()
             //初始化資料資料
            this.setState({id:'',name:'',date:'',time:'',file:'',commit:''
            ,important:'',complete:false})
            //不受控組件另外處理
            this.filebox.current.value = ''
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
                <InputTasksForm closeAdd={this.props.closeAdd}
                    stateData={this.state}
                    changeState={this.changeState}
                    submitTodo={this.submitTodo}
                    filebox={this.filebox} />
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {
    return { //使用dispatch操作store
        addTodoList: todoList => dispatch(addTodoList(todoList))
    }
}

const InputTask = connect(null,mapDispatchToProps)(ConnectInputTask)


export default InputTask;