import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { OverviewDataSource, OverviewItem } from './overview-datasource';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements AfterViewInit, OnInit {

  // Row Selection
  selection = new SelectionModel<string>(false, null);

  // Data table
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<OverviewItem>;
  dataSource: OverviewDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new OverviewDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  selectRow(row) {
    console.log(row);
}
}
