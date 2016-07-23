'use strict';

class SkillsService {
    constructor() {

    }

    getSkills() {
        return ['Testing', 'test2', 'intestine', 'detestful', 'unTESTable'];
    }
}

SkillsService.$inject = [];

angular
    .module('app')
    .service('SkillsService', SkillsService);