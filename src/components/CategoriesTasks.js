import React from 'react';
import renderChildrenHOC from "../hoc/renderChild";
import Tasks from "./Tasks";

/**
 * CategoriesTasks component
 */

class CategoriesTasks extends React.Component {
    render() {
        let {categoryData} = this.props,
            {props} = this,
            RenderChildren = renderChildrenHOC(CategoriesTasks, "todolist-inner-container");
        return (
            <ul>
                {categoryData.categories.map((item, index) => {
                    if (item.activeCategory) {
                        return (
                            <li key={item.name + index}>
                                <div>
                                    <Tasks tasksList={item} />
                                </div>
                                <RenderChildren item={item} tempProps={props} />
                            </li>
                        )
                    }
                })}
            </ul>
        );
    }
};

export default CategoriesTasks;
