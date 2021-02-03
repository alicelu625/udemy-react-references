//function return updated object
export const updateObject = (oldObject, updatedValues) => {
    return {
        ...oldObject, //distribute properties & values of old object
        ...updatedValues //JS object with all the values to overwrite
    }
}