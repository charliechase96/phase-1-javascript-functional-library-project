function myEach(collection, alert) {
    let array = Object.values(collection);
    
    for (let i = 0; i < array.length; i++) {
        alert(array[i])
    }
    
    return collection;
    
}

function myMap(collection, cb) {
    let array = Object.values(collection);
    let newArray = [];

    for (let element of array) {
        newArray.push(cb(element))
    }

    return newArray;
}

function myReduce(collection, cb, ...acc) {
    let array = Object.values(collection);
    let newAcc;
    let i;
    let total = 0;

    if (acc.length > 0) {
        newAcc = acc[0];
        i = 0;
    }
    else {
        newAcc = array[0];
        i = 1;
    }

    for (i; i < array.length; i++) {
        newAcc = cb(newAcc, array[i], collection);
    }

    return newAcc;
}

function myFind(collection, cb) {
    let array = Object.values(collection);
    let result;

    for (let i = 0; i < array.length; i++) {
        let isFound = cb(array[i], i, array);

        if (isFound) {
            result = array[i];
            break;
        }
    }
    return result;
}

function myFilter(collection, cb) {
    let array = Object.values(collection);
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (cb(array[i])) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

function mySize(collection) {
    let array = Object.values(collection);

    for (let i = 0; i < array.length; i++) {
        return array.length;
    }
}

function myFirst(array, n) {
    if (n) {
        return array.slice(0, n);
    }
    else {
        return array[0];
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    }

    else {
        return array.slice(-1)[0];
    }
}

function myKeys(obj) {
    return Object.keys(obj);
}

function myValues(obj) {
    return Object.values(obj);
}