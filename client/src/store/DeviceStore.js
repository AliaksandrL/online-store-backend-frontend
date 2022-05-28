import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Электро самокаты'},
        ]
        this._brands = [
            {id: 1, name: 'LG'},
            {id: 2, name: 'Apple'},
            {id: 3, name: 'Dell'},
            {id: 4, name: 'Lenovo'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 2, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 3, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 4, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 5, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
            {id: 6, name: 'Iphone 13', price: 3000, rating: 5, img: 'https://c.neh.tw/thumb/f/720/bd6826b2e6d742e39fa1.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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

    setSelectedType(type) {
    this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
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
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}