class Job{
    #position;
    #field;
    #worktype;
    #location;

    // constructor(position, field, worktype, location){
    //     this.#position = position;
    //     this.#field = field;
    //     this.#worktype = worktype;
    //     this.#location = location;
    // }

    constructor(field, worktype, location){
        this.#field = field;
        this.worktype = worktype;
        this.location = location;
        this.#position = null;
    }

    get Field(){
        return this.#field;
    }

    get Worktype(){
        return this.#worktype;
    }

    get Location(){
        return this.#location;
    }
}

export default Job
