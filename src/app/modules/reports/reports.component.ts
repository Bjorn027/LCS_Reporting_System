import { Component, OnInit } from '@angular/core';
import axios from "axios";


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

  constructor() {
     //this.getTables();
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

  public async loadData() : Promise<void> {

    var resultElement = document.getElementById('resultsDivForQuery');
    let headers: string[] = [];

    var url = 'https://cors-anywhere.herokuapp.com/http://wellspringuat.lifecyclesystems.com/private/api/api/sql/';

    axios.get(url+'3F61C052-BACB-4C51-B722-B59BAF97CED1?sql='+this.queryStr)
      .then(function (response) {
        console.log(response.data[1].Firstname);
        resultElement.innerHTML = response.data;
      });
    resultElement.style.display="block";

  }

  public async getTables() : Promise<void> {
    alert("called getTables");



  }

}
