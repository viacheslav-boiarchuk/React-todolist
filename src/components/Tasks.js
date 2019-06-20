import React from 'react';

/**
 * Tasks component
 *
 * @param {Object} props
 */

export default function Tasks(props) {
    let {tasksList} = props;
    return (
        <ul className="task-list">
            {tasksList.categoryTasksList.map((item, index) => {
                return (
                    <li key={'tasks-' + index} >
                        {item}
                    </li>
                )
            })}
        </ul>
    )
};