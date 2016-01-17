import {User} from "../models/user";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs";
import {Http} from "angular2/http";

let baseUrl = "api/movies";

@Injectable()
export class UserService{
    private users: Array<User> = [];
    pageTitle: string;
    blurbData: string;

    constructor(private http: Http) {
        this.users.push(new User("mr", "asa", "carrington"));
        this.users.push(new User("mr", "dan", "harry"));
        this.users.push(new User("mr", "tom", "brooks"));
console.log('asdassadasdasaa');
        this.pageTitle = "EPIC TITLE";
        this.blurbData = "epic page text from crm";
    }

    getAll(){
    console.log('return this');
        return this.users;
    }

    getById(id: number) {
        for(let user of this.users) {
            if(user.id == id){
                return user;
            }
        }
        return null;
    }

    deleteUser(id: number){
        for (var _i = 0; _i < this.users.length; _i++) {
            if(this.users[_i].id == id){
                this.users.splice(_i, 1);
            }
        }
    }

    getAllMovies() : Observable<Movie[]> {
        return this.http.get(baseUrl)
            .map(response => response.json())
            .map(json => json.map(m =>
                new Movie(m.id, m.title, m.rating, m.length)));
    }

    getMovieById(id: number) {
        return this.http.get(`${baseUrl}/${id}`)
            .map(response => response.json());
    }

}





