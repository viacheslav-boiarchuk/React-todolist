
/**
 * Create unique id for new category
 *
 * @returns {String} return unique id for new category
 */
export function createUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 11);
}

/**
 * Depending on categoryData add subcategory or add task  inside the appropriate category
 *
 * @param {Object} categoryData - new category with init data or new task
 * @param {string} id - unique identifier category ID in which we want to add a new category
 * @param {Object} arr - array with all categories, except new ones which we are adding
 *
 * @returns {Object} return modified array with updated list of category
 */
export function addDataToCategory(categoryData, id, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].categories.length > 0) {
            addDataToCategory(categoryData, id, arr[i].categories);
        }
        if (arr[i].uniqueId === id) {
            switch (categoryData.type) {
                case ('activateCategory'):
                    arr[i].activeCategory = !arr[i].activeCategory;
                    break;
                case ('addTask'):
                    arr[i].categoryTasksList.push(categoryData.taskName);
                    break;
                default:
                    let modifiedCategoryData = getCorrectKey(arr[i], categoryData);
                    arr[i].activeCategory = false;
                    arr[i].categories.push(modifiedCategoryData);
                    break;
            }
        }
        else {
            arr[i].activeCategory = false;
        }
    }
    if (!id) {
        let modifiedCategoryData = getCorrectKey(arr, categoryData);
        arr.push(modifiedCategoryData);
    }
    return arr;
}

/**
 * Function which return extended categoryData with added correct item number to category
 *
 * @param {Object} parentItem - root category with current ones
 * @param {Object} data - new category with init data
 *
 * @returns {Object} return modified extended categoryData object
 */

export function getCorrectKey(parentItem, data) {
    let copiedData = Object.assign({}, data);

    if (parentItem.uniqKey) {
        let lastIdFromSiblingCategory = parentItem.categories[parentItem.categories.length-1] ? parentItem.categories[parentItem.categories.length-1].uniqKey : '';
        if (typeof lastIdFromSiblingCategory === 'string' && lastIdFromSiblingCategory !== '') {
            let resultValue = lastIdFromSiblingCategory.split(','),
                valueAfterComma = parseInt(resultValue[resultValue.length-1], 10) + 1,
                resultRow = '';

            resultValue.pop();
            resultValue.push(valueAfterComma);
            resultRow = resultValue.join(',');

            copiedData.uniqKey = resultRow;
        }
        else {
            copiedData.uniqKey = parentItem.uniqKey + lastIdFromSiblingCategory + ',' + 1;
        }
    }
    else {
        copiedData.uniqKey = parentItem[parentItem.length-1] ? parentItem[parentItem.length-1].uniqKey + 1 : 1;
    }
    return copiedData;
}