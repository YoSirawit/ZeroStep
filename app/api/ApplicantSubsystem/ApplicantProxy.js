import Applicant from "./Applicant"


class ApplicantProxy{
    getUserInfo(){
        let applicant = new Applicant(1);
        // let data = applicant.getUserInfo();
        // applicant.Id = 1;
        // let data = applicant.getUserInfo();
        // console.log(data);

        return applicant;
    }
    getApplicationinfo(){}
    selectRequiredPosition(id){}
    getConfirmed(status){}
    getCancelled(status){}
}


export default ApplicantProxy