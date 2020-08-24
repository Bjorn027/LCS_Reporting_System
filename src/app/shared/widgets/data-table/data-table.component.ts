import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Atharva Chandarana', weight: 1.0079, symbol: 'A'},
  {position: 2, name: 'Hiral Thakkar', weight: 4.0026, symbol: 'A+'},
  {position: 3, name: 'Sakina Katherawala', weight: 6.941, symbol: 'B'},
  {position: 4, name: 'Jalaj Tyagi', weight: 9.0122, symbol: 'B-'},
  {position: 5, name: 'Girish Shah', weight: 10.811, symbol: 'A'},
  {position: 6, name: 'Antonio Grudge', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Janice Smith', weight: 14.0067, symbol: 'D'},
  {position: 8, name: 'John Doe', weight: 15.9994, symbol: 'A'},
  {position: 9, name: 'Catherine', weight: 18.9984, symbol: 'B-'},
  {position: 10, name: 'Nicolas Doe', weight: 20.1797, symbol: 'D'},
  {position: 11, name: 'Jane Smith', weight: 22.9897, symbol: 'C'},
  {position: 12, name: 'Alex Taylor', weight: 24.305, symbol: 'A-'},
  {position: 13, name: 'John Taylor', weight: 26.9815, symbol: 'A+'},
  {position: 14, name: 'Veeral Gokal', weight: 28.0855, symbol: 'C-'},
  {position: 15, name: 'Hardik Thakkar', weight: 30.9738, symbol: 'D'},
  {position: 16, name: 'Smita Tiwari', weight: 32.065, symbol: 'C'},
  {position: 17, name: 'Ritesh Prajapati', weight: 35.453, symbol: 'B-'},
  {position: 18, name: 'Seema Gupta', weight: 39.948, symbol: 'B+'},
  {position: 19, name: 'Biren Soni', weight: 39.0983, symbol: 'B-'},
  {position: 20, name: 'Teya Shah', weight: 40.078, symbol: 'C-'},
];

@Component({
  selector: 'app-widget-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
