import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConfigService {

    constructor(private http: HttpClient) {
    }

    getPetrolSettings(): Observable<any> {
        return this.http.get<any>('../../assets/fuel-petrol-settings.json');
    }

}
