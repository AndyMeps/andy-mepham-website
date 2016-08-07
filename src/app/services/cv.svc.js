import { Qualification } from '../models/qualification';
import { Skill } from '../models/skill';
import { Job } from '../models/job';

class CvService {
    constructor() {

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
        let skills = [...this.getTopSkills(),
            new Skill('HTML5', 1),
            new Skill('CSS3', 1),
            new Skill('ES6', 0),
            new Skill('.NET Core', 0),
            new Skill('ASP.NET 5', 1),
            new Skill('NoSQL', 0),
            new Skill('MongoDB', 0),
            new Skill('NodeJS', 1),
            new Skill('Ruby', 0),
            new Skill('Grunt', 1),
            new Skill('Gulp', 0),
            new Skill('Bower', 1),
            new Skill('NPM', 1),
            new Skill('OS X', 1),
            new Skill('Windows', 2),
            new Skill('Office', 2),
            new Skill('Word', 2),
            new Skill('Excel', 2),
            new Skill('Access', 2),
            new Skill('PowerPoint', 2),
            new Skill('Photoshop', 0),
            new Skill('Zendesk Development', 1),
            new Skill('Ruby on Rails', 0),
            new Skill('Express', 0)
        ];

        return skills;
    }

    getEducation() {
        return [
            new Qualification('BSc (Hons) Database Administration and Management', 'Staffordshire University', '2009', '2013'),
            new Qualification('BTEC National Diploma for IT Practitioners', 'Canterbury College', '2007', '2009')
        ];
    }

    getExperience() {
        return [
            new Job('Software Developer', 'Parenta Group', 'Maidstone, Kent', new Date(2015, 0, 1), null, 'Full stack development with .NET technologies and JavaScript frameworks, occasionally filling in as DBA.'),
            new Job('Graduate Software Developer', 'Synectics Solutions', 'Stoke-on-Trent, Staffordshire', new Date(2013, 5, 1), new Date(2014, 11, 31), 'Front end and data services development with .NET technologies, working with ASP.NET forms, Windows Services and SQL Server 2008 databases.')
        ];
    }
}

// eslint-disable-next-line no-undef
export default angular.module('app.services', [])
    .service('CvService', CvService)
    .name;