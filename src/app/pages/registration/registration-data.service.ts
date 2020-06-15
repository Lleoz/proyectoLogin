import { Injectable } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { UrlService } from 'src/app/core/helpers/url.service';
import { ApiRequest } from 'src/app/core/models/api-request';
import { UserRequest } from 'src/app/core/models/user-request.model';
import { UserDto } from 'src/app/core/models/user-dto.model';
import { ApiResponse } from 'src/app/core/models/api-response';
import { UserCreateResponse } from 'src/app/core/models/user-create-response.model';
import { GenreType } from 'src/app/core/models/genre-type';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor(
    private dataService: DataService,
    private urlService: UrlService
  ) { }

  async Register(user: UserDto) {
    try {

      const url = this.urlService.composeUrlUsers('users');
      const apiReq: ApiRequest<UserRequest> = {
        data: {
          name: user.name,
          lastName: user.lastName,
          secondLastName: '',
          birthDate: user.birthDate,
          email: user.email,
          genre: +user.genre,
          phoneNumber: user.phoneNumber
        }
      };

      console.log('Register apiReq', apiReq);

      const response = await this.dataService.post<ApiResponse<UserCreateResponse>>(url, apiReq).toPromise();

      return response;
    } catch (error) {
      console.log('ERROR Register', error);
    }
  }
}
