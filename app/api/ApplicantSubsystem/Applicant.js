import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';


class Applicant {
    #id;
    #fName;
    #lName;
    #dob;
    #location_;
    #studyYear;
    #university;
    #faculty;
    #hardSkill = [];
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

    set LName(lname){
        this.#lName = lname;
    }
    get LName(){
        return this.#lName;
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

    addHardSkill(skill){
        this.#hardSkill.push(skill);
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

    constructor(ID){
        this.#id = ID;
        
        this.setUser();
        // this.#fName = 'Sirawit';
        // this.#lName = 'Chantemduang';
        // this.#dob = '2004-08-19';
        // this.#location_= 'Bangkok';
        // this.#studyYear = '2022-07-01';
        // this.#interestedField = 'IT';
        // this.#faculty = 'IT';
    }

    async setUser(){
        try{
            const user_info = await this.getUserInfo();
            this.#fName = user_info.rows[0].firstname;
            this.#lName = user_info.rows[0].lastname;
            this.#dob = user_info.rows[0].dob;
            this.#location_ = user_info.rows[0].location;
            this.#exp = user_info.rows[0].experience;
            this.#studyYear = user_info.rows[0].studyyear;
            this.#interestedField = user_info.rows[0].interested_field;
            this.#faculty = user_info.rows[0].faculty;
            
        }catch(error){
            console.log(error);
        }
    }

    async getUserInfo() {
        // return user info by use database command
        try{
            const user_info = await sql`select * from Applicant where ID = ${this.#id}`;
            
            // console.log('user-info sql: ',user_info);
            return user_info
        }catch(error){
            console.log(error);
        }

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





export default Applicant