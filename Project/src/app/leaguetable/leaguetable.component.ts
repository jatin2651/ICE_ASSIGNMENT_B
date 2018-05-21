import { Component, OnInit } from '@angular/core';

import { LeaguetableserviceService } from '../services/leaguetableservice.service';
import {Leaguetable} from '../classes/leaguetable';


@Component({
  selector: 'app-leaguetable',
  templateUrl: './leaguetable.component.html',
  styleUrls: ['./leaguetable.component.css']
})
export class LeaguetableComponent implements OnInit {

data:Post;

  constructor(private leaguetableservice: LeaguetableserviceService) { }

  ngOnInit() {

  	this.leaguetableservice.getPosts().subscribe((posts) =>{ 
		console.log(posts);
		this.data = posts;
		console.log("second fuck");
		console.log(this.data.matchday);
		console.log(this.data.standing);
		
		}); 
  }

}

interface Post{
	
	leagueCaption: string;
	matchday: number;
	standing: Leaguetable[];
	

	
	}