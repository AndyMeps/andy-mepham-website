'use strict';

class CvController {
    constructor(SkillsService) {
        let skills = SkillsService.getSkills();
    }
}

CvController.$inject = ['SkillsService'];

angular
    .module('app')
    .controller('CvController', CvController);