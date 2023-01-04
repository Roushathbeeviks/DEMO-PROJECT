import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VesselService {
URL=environment.apiUrl
constructor(private http:HttpClient) { }

VesselForm(data:any)
{
  return this.http.post(this.URL + '/admin/vesselform',data)
}
GetVesselById()
{
  return this.http.get(this.URL +'/admin/getvessel/:id')
}
GetAllFlags()
{
  return this.http.get(this.URL +'/admin/getflag')
}
}
