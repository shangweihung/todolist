import React from 'react';
import { connect } from 'react-redux';
import List from './List';

class ConnectTodoLists extends React.Component {

    render() {
        this.props.data
            .sort((f,s) => {return f.important<s.important?1:-1})
            .sort((f,s) => {return f.complete>s.complete?1:-1})


        let todoCount = 0
        let Lists = this.props.data.map((item) => {
            if (this.props.page === "progress") {
                if(item.complete){
                    return null
                }
            } else if (this.props.page === "completed"){
                if(!item.complete){
                    return null
                }
            }
                
            if(this.props.page){
                todoCount++
            }
            else if(!item.complete){
                todoCount++
            }
            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                <div>
                    {Lists}
                </div>
                <div class="countText">
                    <span>{todoCount} tasks {this.props.page === "completed"? "completed": "left"}.</span>
                </div>
            </div>
        )
    }
}

const mapStoreToProps = state => {
    return {data: state}
}

const TodoLists = connect(mapStoreToProps)(ConnectTodoLists)

export default TodoLists;