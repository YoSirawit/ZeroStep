class Announcement{
    #id;
    #field;
    #position;
    #compensation;
    #location_;
    #hardSkillReq;
    #softSkillReq;

    constructor(field, pos, compensation, location_, hardSkill, softSkill){
        this.#field = field;
        this.#position = pos;
        this.#compensation = compensation;
        this.#location_ = location_;
        this.#hardSkillReq = hardSkill;
        this.#softSkillReq = softSkill;
    }

    set Id(annID){
        this.#id = annID;
    }
    get Id(){
        return this.#id;
    }

    set Field(field){
        this.#field = field;
    }
    get Field(){
        return this.#field;
    }

    set Position(pos){
        this.#position = pos;
    }
    get Position(){
        return this.#position;
    }

    set Compensation(money){
        this.#compensation = money;
    }
    get Compensation(){
        return this.#compensation;
    }

    set Location_(lo){
        this.#location_ = lo;
    }
    get Location_(){
        return this.#location_;
    }

    set HardSkillReq(skill){
        this.#hardSkillReq = skill;
    }
    get HardSkillReq(){
        return this.#hardSkillReq;
    }

    set SoftSkillReq(skill){
        this.#softSkillReq = skill;
    }
    get SoftSkillReq(){
        return this.#softSkillReq;
    }

    static getJobList(user){
        //
    }

    static getJobList(job){
        //
    }
}
