import flatpickr from "flatpickr";
require('flatpickr/dist/flatpickr.css');

function FlatpickrBundle(selector) {
    let elements = document.querySelectorAll(selector);
    if (undefined === elements)
    {
        return;
    }
    elements.forEach((element, key, parent) => {
        let options = {
            wrap: true,
        };
        flatpickr(element, options);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    new FlatpickrBundle('.flatpickr');
});