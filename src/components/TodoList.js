import React from 'react';
import CategoriesTasks from './CategoriesTasks';

/**
 * List component
 *
 * @param {Object} props
 */

export default function TodoList(props) {
    return (
        <div className="todolist-container">
            <button onClick={props.addTask}>Add Task</button>

            <div className="todolist-inner-container">
                <CategoriesTasks categoryData={props} />
            </div>
        </div>
    )
}
