import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import axios from "axios";
import { map } from 'rxjs/operators';
import { Post } from './post.model';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  queryStr = "";
  apiKey = '';
  isQuery = false;
  isWizard = false;
  option = '';
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  changeSel(selection){
   // alert('called');
    this.option = selection;
    if(this.option === 'query'){
      this.isQuery=true;
      this.isWizard = false;
     // alert('isQuery is '+this.isQuery);
    }
    else if( this.option === 'wizard'){
      this.isWizard=true;
      this.isQuery=false;
    //  alert('isWizard is :'+this.isWizard);
    }
  }

  public async loadData() {

    var url = 'https://cors-anywhere.herokuapp.com/http://wellspringuat.lifecyclesystems.com/private/api/api/sql/';

    this.http.get< {[key: string]: Post}>(url+'3F61C052-BACB-4C51-B722-B59BAF97CED1?sql='+this.queryStr).pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedPosts = posts}
      );
    


  }

  getHeaders() {
    let headers: string[] = [];
    if(this.loadedPosts) {
      this.loadedPosts.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }
  goToTable(key){
    this.queryStr = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS ic Where ic.TABLE_NAME = '"+ key + "'"
    this.loadData()
  }

}
