import axios from "axios";

const API=axios.create({
    baseURL:"http://localhost:8081/api/v1/auth/registration/Entrepreneur",
});

export default API;