import CvController from './cv.ctrl';
import CvService from '../services/cv.svc';
import qualification from '../directives/qualification.drtv';

// eslint-disable-next-line no-undef
export default angular
    .module('app.controllers', [CvService, qualification])
    .controller('CvController', CvController)
    .name;