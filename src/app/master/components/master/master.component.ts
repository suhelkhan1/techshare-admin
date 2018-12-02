import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../shared/services/master/master.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  master;
  param;
  constructor(
    private masterService: MasterService,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUrlParams();
    this.getList(this.master, this.param);
  }

  /**get URL id and params */
  getUrlParams() {
    this.actRoute.params.subscribe((param) => {
      this.master = param['id'];
    });
    this.actRoute.queryParams.subscribe((qParam) => {
      this.param = qParam['param'];
    });
  }

  /**Get the list of the items */
  getList(master, param) {
    this.masterService.getList(master, param).subscribe((res) => {
    });
  }

}
