
const arrayItemObject = {
    isMultipliable: false,
    value: 0,
    isSelected: false,
};

export const getInitialNumbersArray = (maxNumberLimit) => {
    const initialNumArray = [];
    for(let i =1; i <=maxNumberLimit; i++) {
        initialNumArray.push({
            ...arrayItemObject,
            value: i,
        });
    };

    return initialNumArray;
};

export const getNumberList = ({maxNumberLimit, numberList, selectedNumber=null}) => {
    let updatedNumberList = numberList || getInitialNumbersArray(maxNumberLimit);
    numberList && updatedNumberList.forEach((numberObj, index) => {
        if(selectedNumber === numberObj.value) {
            updatedNumberList[index] = {
                ...arrayItemObject,
                value: numberObj.value,
                isSelected: true,
            };
        } else if(selectedNumber && selectedNumber % numberObj.value === 0) {
            updatedNumberList[index] = {
                ...arrayItemObject,
                value: numberObj.value,
                isMultipliable: true,
            }
        } else {
            updatedNumberList[index] = {
                ...arrayItemObject,
                value: numberObj.value,
            };
        }
    });
    return updatedNumberList;
};