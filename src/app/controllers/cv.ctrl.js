'use strict';

export default class CvController {
    constructor(CvService) {

        this.skillQuery = '';
        
        this.foundSkills = [];

        this.topSkills = CvService.getTopSkills();

        CvService.getSkills().then((data) => {
            this.skills = data;
        });

        CvService.getEducation().then((data) => {
            this.education = data;
        });

        CvService.getExperience().then((data) => {
            this.experience = data;
        });

        this.cfg = {
            dateFormat: 'dd MMMM yyyy'
        };
    }

    lookupSkill() {
        this.foundSkills = [];

        let skill = this.skillQuery.toLowerCase();
        for (var s of this.skills) {
            if(s.title.toLowerCase().includes(skill)) {
                this.foundSkills.push(s);
            }
        }
    }
}

CvController.$inject = ['CvService'];