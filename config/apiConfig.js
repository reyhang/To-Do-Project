//Endpoint, baze url'lerini tutacak şablon.

const prefixes = {
    login: "login",
    project: "project/list",
}

const apiConfig ={ 
    prefixes,
    baseUrl: "https://localhost:5000/api"
}

export default apiConfig; 