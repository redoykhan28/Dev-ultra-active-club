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

export { addDb, getDb };