import React from 'react';
import AddTask from './AddTask';

class MyTask extends React.Component {
    render() {
        return (
            <div class="InputTasksForm">
                <AddTask />
            </div>
        )
    }
}

export default MyTask;