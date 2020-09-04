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
  apiKey = '3F61C052-BACB-4C51-B722-B59BAF97CED1';
  isQuery = false;
  isWizard = false;
  option = '';
  url = 'https://cors-anywhere.herokuapp.com/http://wellspringuat.lifecyclesystems.com/private/api/api/sql/';
  loadedPosts: Post[] = [];
  loadedPosts2: Post[] = [];
  loadedPosts3: Post[] = [];
  loadedPosts4: Post[] = [];
  loadedTables: Post[] = [];
  tableID1 = "";
  tableID2 = "";
  columnID1 = "";
  columnID2 = "";
  joinID = "";
  isTable = false;
  isColumn = false;
  isColumn2 = false;
  isColumn3 = false;
  isColumn4 = false;
  showTable2 = true;
  showTable3 = true;
  showTable4 = true;
  showColumn = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.tableSource()

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

  private fetchTables(){
    this.http.get< {[key: string]: Post}>("https://cors-anywhere.herokuapp.com/http://wellspringuat.lifecyclesystems.com/private/api/api/sql/"+ this.apiKey + "?sql=SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'").pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedPosts = posts}
      );
      this.isTable = true;
      this.isColumn = false;
  }



  public async loadData() {

    this.http.get< {[key: string]: Post}>(this.url+ this.apiKey + '?sql='+this.queryStr).pipe(map(responseData =>{
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

  loadData2(){
    this.http.get< {[key: string]: Post}>(this.url+ this.apiKey + '?sql='+this.queryStr).pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedPosts2 = posts}
      );
  }

  loadData3(){
    this.http.get< {[key: string]: Post}>(this.url+ this.apiKey + '?sql='+this.queryStr).pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedPosts3 = posts}
      );
  }

  loadData4(){
    this.http.get< {[key: string]: Post}>(this.url+ this.apiKey + '?sql='+this.queryStr).pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedPosts4 = posts}
      );
  }

  joinTables(){

    this.http.get< {[key: string]: Post}>(this.url+"3F61C052-BACB-4C51-B722-B59BAF97CED1?sql=SELECT" + this.tableID1 + "." + this.columnID1 + "," + this.tableID2 + "." + this.columnID2 + "FROM" + this.tableID1 + "INNER JOIN" + this.tableID2 + "ON" + this.tableID1 + "." + this.joinID + "=" + this.tableID2 + "." + this.joinID ).pipe(map(responseData =>{
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
    this.isTable = false;
    this.isColumn = true;
  }

  goToTable2(key){
    this.queryStr = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS ic Where ic.TABLE_NAME = '"+ key + "'"
    this.loadData2()
    this.isTable = false;
    this.isColumn2 = true;
  }

  goToTable3(key){
    this.queryStr = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS ic Where ic.TABLE_NAME = '"+ key + "'"
    this.loadData3()
    this.isTable = false;
    this.isColumn3 = true;
  }

  goToTable4(key){
    this.queryStr = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS ic Where ic.TABLE_NAME = '"+ key + "'"
    this.loadData4()
    this.isTable = false;
    this.isColumn4 = true;
  }



  tableSource(){
    this.http.get< {[key: string]: Post}>("https://cors-anywhere.herokuapp.com/http://wellspringuat.lifecyclesystems.com/private/api/api/sql/"+ this.apiKey + "?sql=SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'").pipe(map(responseData =>{
      const postArray: Post[] = [];
      for (const key in responseData){
        if (responseData.hasOwnProperty(key)){
        postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    })).subscribe(posts => {this.loadedTables = posts}
      );
  }

}
