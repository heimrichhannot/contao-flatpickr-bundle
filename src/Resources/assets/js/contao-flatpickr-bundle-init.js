import { FlatpickrBundle } from './contao-flatpickr-bundle';

document.addEventListener('DOMContentLoaded', FlatpickrBundle.init);

document.addEventListener('formhybrid_ajax_complete', FlatpickrBundle.init);
