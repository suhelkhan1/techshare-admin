import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  public APIURL = environment.APP.BASE_URL;
  public httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get The list of the items
   * @param master Master Name
   * @param param Param Name
   */
  getList(master, param) {
    const url = this.APIURL + environment.APP.GET_LIST(master, param);
    return this.http.get(url, this.httpOptions);
  }
}
