'use strict';

export default class CvController {
    constructor(CvService) {

        this.skillQuery = '';
        this.foundSkills = [];

        this.topSkills = CvService.getTopSkills();

        this.skills = CvService.getSkills();

        this.education = CvService.getEducation();

        this.experience = CvService.getExperience();

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

/*
angular
    .module('app')
    .controller('CvController', CvController);*/