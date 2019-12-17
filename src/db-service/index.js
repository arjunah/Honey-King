export const routes = {
    getProducts: "http://localhost:9000/products",
    getHoney: "http://localhost:9000/honey",
    getPropolis: "http://localhost:9000/propolis",
    getBeeswax: "http://localhost:9000/beeswax",
    getPollen: "http://localhost:9000/pollen",
    registerUser: "http://localhost:9000/users/register",
    loginUser: "http://localhost:9000/users/login"
}

export const db = {
    get: function (url, id) {
        return fetch (url + `${id ? `/id` : ""}`).then(res => res.json());
    },
    post: function (url, data) {
        return fetch (url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data)
        });
    }
}