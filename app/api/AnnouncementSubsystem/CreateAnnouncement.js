import '../app/HiringCompany/HiringCompany.js';
class CreateAnnouncement{
    hcompany = new HiringCompany();
    createAnnouncement(field, company, position, compensation, location, hardSkill, softSkill){
        company = this.hcompany.CompanyName;
        return new Announcement(
            field,
            company,
            position,
            compensation,
            location,
            hardSkill,
            softSkill);
    }
}
