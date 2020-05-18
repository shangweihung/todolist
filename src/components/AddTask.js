import React from 'react';
import InputTask from './InputTask';

class AddTask extends React.Component {
    openAdd(){
        //隱藏輸入框
        document.getElementById('addTask').style.display='none'
        //顯示輸入表單
        document.getElementById('inputTask').style.display=''
    }

    closeAdd(){
        //顯示輸入框
        document.getElementById('addTask').style.display=''
        //隱藏輸入表單
        document.getElementById('inputTask').style.display='none'
    }

    render() {
        return (
            <div>
                <div>
                    <input id="addTask" value=" + Add New Task" onClick={this.openAdd}/>
                </div>
                <div id="inputTask" style={{display:'none'}}>
                    <InputTask closeAdd={this.closeAdd} />
                </div>
            </div>
        )
    }

}

export default AddTask;