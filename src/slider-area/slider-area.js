import Template from "./slider-area.html";
import Helpers from "../helpers.js"

export default class SliderArea {
    constructor(ID) {
        this._container = $('#' + ID)
        if (!this._container.length) {
            console.log(`No element with the ID ${ID} can be found. check usage at https://github.com/Nigelli/LittleGalleryJS`);
            return;
        }
        this._templateBaseID = "LGS";
        this._ID = ID;
        
        this._container[0].innerHTML = Helpers.prependTemplateIds(Template, this._ID, this._templateBaseID);
    }

    attachImage(image) {
        this._container.find("#" + this._ID + "-" + this._templateBaseID + "Slider").append(image);
    }
}