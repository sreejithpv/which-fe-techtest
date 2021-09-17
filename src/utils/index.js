
export const getInitialNumbersArray = (maxNumberLimit=0) => {
    const initialNumArray = [];
    for(let i =1; i <=maxNumberLimit; i++) {
        initialNumArray.push(i);
    };
    return initialNumArray;
};
