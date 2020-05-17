import React from 'react';
import { connect } from 'react-redux';
import List from './List';

class ConnectTodoLists extends React.Component {

    render() {
        let Lists = this.props.data.map((item) => {
            return <List key={item.id} listData={item} />
        })

        return (
            <div>
                {Lists}
            </div>
        )
    }
}

const mapStoreToProps = state => {
    return {data: state}
}

const TodoLists = connect(mapStoreToProps)(ConnectTodoLists)

export default TodoLists;