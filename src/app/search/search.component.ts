import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { query } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchresults:any =[]

  constructor(private route:ActivatedRoute, private http: HttpClient) {
    this.route.queryParams.subscribe((query:any)=>{
      alert("search for" + query.q + "cakes")
      var url = "https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q
      this.http.get(url).subscribe((response:any)=>{
        console.log("response from search cakes api", response)
        this.searchresults = response.data
      })
    })
  }

  ngOnInit(): void {
  }

}
