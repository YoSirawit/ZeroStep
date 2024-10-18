class Applicant {
    #id;
    #fName;
    #lName;
    #dob;
    #location_;
    #studyYear;
    #university;
    #faculty;
    #hardSkill;
    #softSkill;
    #exp;
    #workStatus;
    #contribution;
    #interestedField;
    #jobTitle;
    #companyName;
    #departmentName;
    #applicationDate;
    #history;
    #applyPositionID;

    set Id(id){
        this.#id = id;
    }
    get Id(){
        return this.#id;
    }

    set FName(fname){
        this.#fName = fname;
    }
    get FName(){
        return this.#fName;
    }

    set Dob(dob){
        this.#dob = dob;
    }
    get Dob(){
        return this.#dob;
    }

    set Location_(lo){
        this.#location_ = lo;
    }
    get Location_(){
        return this.#location_;
    }

    set StudyYear(yearNum){
        this.#studyYear = yearNum;
    }
    get StudyYear(){
        return this.#studyYear;
    }

    set University(uni){
        this.#university = uni;
    }
    get University(){
        return this.#university;
    }

    set Faculty(faculty){
        this.#faculty = faculty;
    }
    get Faculty(){
        return this.#faculty;
    }

    set HardSkill(skill){
        this.#hardSkill = skill;
    }
    get HardSkill(){
        return this.#hardSkill;
    }

    set SoftSkill(skill){
        this.#softSkill = skill;
    }
    get SoftSkill(){
        this.#softSkill;
    }

    set Exp(exp){
        this.#exp = exp;
    }
    get Exp(){
        return this.#exp;
    }

    set WorkStatus(status){
        this.#workStatus = status;
    }
    get WorkStatus(){
        return this.#workStatus;
    }

    set Contribution(contribution){
        this.#contribution = contribution;
    }
    get Contribution(){
        return this.#contribution;
    }

    set InterestedField(field){
        this.#interestedField = field;
    }
    get InterestedField(){
        return this.#interestedField;
    }

    set JobTitle(job){
        this.#jobTitle = job;
    }
    get JobTitle(){
        return this.#jobTitle;
    }

    getUserInfo() {
        // return user info by use database command
    }

    updateApplicant(input) {
        if (typeof input === "object" && arg !== null) {
            // for updateApplicant(Applicant applicant)
            // update by database command
        } else if (typeof input === "number") {
            // for updateApplicant(string status)
            // update by database command
        } else {
            console.log("need input!!");
        }
    }
    getApplicationinfo() {}
    getApplicantData(applyPositionID) {}
}
