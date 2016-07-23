'use strict';

class CvController {
    constructor(SkillsService) {
        this.skills = SkillsService.getSkills();
        this.skillQuery = '';

        this.foundSkills = [];
    }

    lookupSkill() {
        this.foundSkills = [];

        let skill = this.skillQuery.toLowerCase();
        for (var value of this.skills) {
            if(value.toLowerCase().includes(skill)) {
                this.foundSkills.push(value);
            }
        }
    }
}

CvController.$inject = ['SkillsService'];

angular
    .module('app')
    .controller('CvController', CvController);