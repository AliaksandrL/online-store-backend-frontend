import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Hologilnk'},
            {id: 2, name: 'Smartfon'}
        ]
        this._brands = [
            {id: 1, name: 'LG'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 2, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 3, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 4, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
}