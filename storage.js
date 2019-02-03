class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Delhi';
    }

    getLocationData() {
        if (localStorage.getItem('city') === "") {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return {city: this.city};
    }

    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}