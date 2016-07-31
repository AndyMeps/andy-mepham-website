import CvController from './cv.ctrl';
import CvService from '../services/cv.svc';

// eslint-disable-next-line no-undef
export default angular
    .module('app.controllers', [CvService])
    .controller('CvController', CvController)
    .name;