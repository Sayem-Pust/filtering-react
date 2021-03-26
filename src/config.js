let API_URL = "";

if (process.env.NODE_ENV === "production") {
    API_URL = "https://filtering-demo.herokuapp.com";
} else {
    API_URL = "http://localhost:8000";
}

export { API_URL };