import axios from "axios";

export class UserService {

    static getAllMembers() {
        let dataURL = 'http://localhost:3001/members';
        return axios.get(dataURL);
    }

    
    static getMembers(memberId) {
        let dataURL = `http://localhost:3001/members/${memberId}`;
        return axios.get(dataURL);
    }
}