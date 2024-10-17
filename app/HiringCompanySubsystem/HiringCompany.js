class HiringCompany{
    #companyName
    #companyId
    #companyContact
    #applicantProperty
    //list
    #jobPosition
    #jobDetails

    set CompanyName(name){
        this.#companyName = name;
    }
    get CompanyName(){
        return this.#companyName;
    }

    set CompanyId(id){
        this.#companyId = id;
    }
    get CompanyId(){
        return this.#companyId;
    }

    set CompanyContact(contact){
        this.#companyContact = contact;
    }
    get CompanyContact(){
        return this.#companyContact;
    }

    set ApplicantProperty(property){
        this.#applicantProperty = property;
    }
    get ApplicantProperty(){
        return this.#applicantProperty;
    }

    //jobPosition list
    get JobPosition(){
        return this.#jobPosition;
    }

    //jobDetails list
    get JobDetails(){
        return this.#jobDetails;
    }

    sendResume(resume){}
    getAnnouncement(CompanyId){}
    getPosition(announcementId){}
}
