export const routes = {
    getProducts: `http://localhost:9000/products`,
    getHoney: `http://localhost:9000/honey`,
    getPropolis: `http://localhost:9000/propolis`,
    getBeeswax: `http://localhost:9000/beeswax`,
    getPollen: `http://localhost:9000/pollen`
}

export const db = {
    get: function (url, id) {
        return fetch (url + `${id ? `/id` : ""}`).then(res => res.json());
    }
}