export default class Formatter {

    get params() {
        return this._parms;
    }

    set params(...params) {
        this._params = params;
    }

    addParams(...params) {
        this._params.push(params);
    }

    deleteParams(...params) {
        params.forEach(parameter => {
            this._params.splice(this._params.indexOf(parameter), 1);
        });
    }

    clearParams() {
        this._params = []
    }

    applyStyleForOffsetPixelValues(add) {

    }

    addTwoPixelValues(pixelValueOne, pixelValueTwo) {
        var value = `${parseInt(pixelValueOne.split("px")[0]) + parseInt(pixelValueTwo.split("px")[0])}px`
        return value;
    }

    shrinkPixelsByFactor(pixelValue, factor) {
        return `${parseInt(pixelValue.split("px")[0])/factor}px`;
    }
}