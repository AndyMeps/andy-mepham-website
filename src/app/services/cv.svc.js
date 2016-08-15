import { Skill } from '../models/skill';

class CvService {
    constructor($http) {
        this.$http = $http;
    }

    getTopSkills() {
        return [
            new Skill('HTML', 2),
            new Skill('CSS', 2),
            new Skill('ASP.NET MVC', 2),
            new Skill('C#', 2),
            new Skill('JavaScript', 2),
            new Skill('T-SQL', 2),
        ];
    }

    getSkills() {
        return this.$http.get('http://localhost:8000/skills').then(
            (success) => {
                return success.data;
            },
            // eslint-disable-next-line no-unused-vars
            (failure) => {
                return null;
            }
        );
    }

    getEducation() {
        return this.$http.get('http://localhost:8000/qualifications').then(
            (success) => {
                return success.data;
            },
            // eslint-disable-next-line no-unused-vars
            (failure) => {
                return null;
            }
        );
    }

    getExperience() {
        return this.$http.get('http://localhost:8000/jobs').then(
            (success) => {
                return success.data;
            },
            // eslint-disable-next-line no-unused-vars
            (failure) => {
                return null;
            }
        );
    }
}

CvService.$inject = ['$http'];

// eslint-disable-next-line no-undef
export default angular.module('app.services', [])
    .service('CvService', CvService)
    .name;