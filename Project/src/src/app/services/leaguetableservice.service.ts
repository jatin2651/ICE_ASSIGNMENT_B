import { Injectable } from '@angular/core';

import { Http, RequestOptions, Headers } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 

@Injectable()
export class LeaguetableserviceService {

  constructor(public http:Http) { }

  getPosts(){
	
	let headers = new Headers();
	headers.append('X-Auth-Token','2037319975b84bb38e22152af675638e');
	let opts = new RequestOptions();
	opts.headers = headers ;  
	return this.http.get('http://api.football-data.org/v1/competitions/398/leagueTable',opts)
	.map(res => res.json());
} 

}
