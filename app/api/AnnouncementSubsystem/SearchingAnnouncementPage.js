import Job  from './Job';
import Announcement from './Announcement';
import SearchAndMatchAjob from './SearchAndMatchAjob';



class SearchingAnnouncementPage{
    // searchJobList(Job job) : Annonucement
    static async searchJobList(job){
        if(job instanceof Job){
            console.log("in searchingPage : ", job.Field, job.worktype, job.location);
            const announcement = await Announcement.getJobList(job);
            // console.log(announcement);
            // const data = announcement.json();
            // console.log(data);
            // console.log(announcement.rows);
            return announcement;
        }
        
    }
    
    static async findMyJob(){
        const data = await SearchAndMatchAjob.findMyJob();
        return data;
        // return 'test';
    }
}

export default SearchingAnnouncementPage