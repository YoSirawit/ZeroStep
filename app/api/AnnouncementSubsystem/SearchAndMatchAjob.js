import ApplicantProxy from "../ApplicantSubsystem/ApplicantProxy"
import Announcement from "./Announcement";




class SearchAndMatchAjob{
    // findMyJob() : Announcement
    static async findMyJob(){
        let appproxy = new ApplicantProxy();
        let user_data = await appproxy.getUserInfo();

        let all_announce = Announcement.getJobList(user_data);
        // console.log(all_announce);
        return all_announce;
        // console.log(user_data);
        


    }
}

export default SearchAndMatchAjob
