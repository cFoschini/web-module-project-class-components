import React from 'react';

const Todo = ({ data }) => {
    return (<div>
        {data.map(item => {
            return (
                <li>{item.task}</li>
            )
        })}
    </div>)

}

export default Todo;