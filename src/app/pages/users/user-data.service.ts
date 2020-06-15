import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { UrlService } from 'src/app/core/helpers/url.service';
import { ApiResponse } from 'src/app/core/models/api-response';
import { tap } from 'rxjs/operators';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { Observable } from 'rxjs';
import { ApiRequest } from 'src/app/core/models/api-request';

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

    return response;
  }

  async get(email: string) {
    const url = this.urlService.composeUrlUsers('users/get/' + email);

    const response = await this.dataService.get<ApiResponse<UserDto>>(url).toPromise();

    return response;
  }

  async put(id: number, user: UserDto) {
    const url = this.urlService.composeUrlUsers('users/put/' + id.toString());

    const apiRequest: ApiRequest<UserDto> = {
      data: user
    };

    const response = await this.dataService.put<ApiRequest<UserDto>>(url, apiRequest).toPromise();

    return response;
  }

}
