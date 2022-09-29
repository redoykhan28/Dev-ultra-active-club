let addDb = id => {

    let storeBreak = {}

    storeBreak['duration'] = id;


    localStorage.setItem('break-time', JSON.stringify(storeBreak));
}

export { addDb };