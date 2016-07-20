'use strict';

class SkillsService {
    constructor() {

    }

    getSkills() {
        return ['Testing'];
    }
}

SkillsService.$inject = [];

angular
    .module('app')
    .service('SkillsService', SkillsService);