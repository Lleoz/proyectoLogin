import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { UrlService } from 'src/app/core/helpers/url.service';
import { ApiResponse } from 'src/app/core/models/api-response';
import { tap } from 'rxjs/operators';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private dataService: DataService,
    private urlService: UrlService
  ) { }

  async getAll() {
    const url = this.urlService.composeUrlUsers('users/getall');

    const response = await this.dataService.get<ApiResponse<UserDto[]>>(url).toPromise();

    return response.body;
  }

  get(email: string) {
    const url = this.urlService.composeUrlUsers('users/get/' + email);

    this.dataService.get(url)
      .pipe<UserDto>(tap((response: any) => {
        return response;
      }));
  }

}
