import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FishingGear } from '../interfaces/fishing-gear';


@Injectable({
  providedIn: 'root'
})
export class FishingGearService {

  private baseUrl = 'http://localhost:8080/api/fishing-gear';

  constructor(private http: HttpClient) { }

  createFishingGear(gear: FishingGear): Observable<FishingGear> {
    return this.http.post<FishingGear>(`${this.baseUrl}/byUser`, gear);
  }

  updateFishingGear(gearId: number, gear: FishingGear): Observable<FishingGear> {
    return this.http.put<FishingGear>(`${this.baseUrl}/${gearId}`, gear);
  }

  getFishingGearById(gearId: number): Observable<FishingGear> {
    return this.http.get<FishingGear>(`${this.baseUrl}/${gearId}`);
  }

  getAllFishingGear(): Observable<FishingGear[]> {
    return this.http.get<FishingGear[]>(this.baseUrl);
  }

  deleteFishingGear(gearId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${gearId}`);
  }


}
