import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VesselMappingService {
  URL=environment.apiUrl
  private VesselMappingId = new BehaviorSubject('');
  currentApprovalStageMessage = this.VesselMappingId.asObservable();

  constructor(private http: HttpClient) {}

  updateApprovalMessage(message: string) {
    this.VesselMappingId.next(message)
    }

  // VesselMappingId=new EventEmitter<string>();
  PostVesselMapping(data:any)
  {
    return this.http.post(this.URL + '/admin/vesselmapping',data)
  }
  GetVesselMappingById(id:any)
  {
    return this.http.get(this.URL + '/admin/getvesselmapping/:id')
  }
}
