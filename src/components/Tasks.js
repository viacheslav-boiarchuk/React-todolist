import React from 'react';
import _ from 'lodash';

/**
 * Tasks component
 *
 * @param {Object} props
 */

export default function Tasks(props) {
    let {tasksList} = props;
    return (
        <>
            {!(_.isEmpty(tasksList.categoryTasksList)) ?
                <li>
                    <ul className="task-list">
                        {tasksList.categoryTasksList.map((item, index) => {
                            return (
                                <li key={'tasks-' + index} >
                                    {item}
                                </li>
                            )
                        })}
                    </ul>
                </li>
                : null
            }
        </>
    )
};