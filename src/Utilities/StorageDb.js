let addDb = id => {

    let storeBreak = {}

    storeBreak['duration'] = id;


    localStorage.setItem('break-time', JSON.stringify(storeBreak));
}

let getDb = () => {
    let storeBreak = {}
    let stored = localStorage.getItem('break-time')
    if (stored) {

        storeBreak = JSON.parse(stored)

    }

    return storeBreak;

}


const addToListDb = (id) => {

    // console.log(id)

    let setList = {};


    let existList = localStorage.getItem('shopping-cart')
    if (existList) {

        setList = JSON.parse(existList);
    }


    let value = setList[id];
    if (value) {

        let newQuantity = value + setList[id];
        setList[id] = newQuantity;
    }

    else {

        setList[id] = id;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(setList))

}

// const getListDb = () => {
//     let setList = {};


//     let existList = localStorage.getItem('shopping-cart')
//     if (existList) {

//         setList = JSON.parse(existList);
//     }

//     return setList;

// }

export { addDb, getDb, addToListDb };