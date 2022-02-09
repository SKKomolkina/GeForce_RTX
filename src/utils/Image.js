export default class Image {
    constructor({ id, srcOn, srcOff}) {
        this._id = id;
        this._srcOn = srcOn;
        this._srcOff = srcOff;
    }

    checkCheckbox(checkboxStatus) {
        if (checkboxStatus) {
            return this._srcOff;
        } else {
            return this._srcOn;
        }
    }

    returnId() {
        return this._id;
    }
}
