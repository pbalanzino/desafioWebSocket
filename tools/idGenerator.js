function* idGenerator(){
    let counter = 0;
    while(true){
        yield counter++;
    }
}

let idGen = idGenerator();

export default idGen;