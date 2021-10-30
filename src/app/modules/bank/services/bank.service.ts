import { Injectable } from '@angular/core';
import { CommunicationService } from '../../core/services/communication.service';

@Injectable()
export class BankService {

  constructor(private communicationService: CommunicationService) { }

  public getBanks() {
    return this.communicationService.get('https://bast.dev/api/banks.php', null, true).toPromise();
  }

  public getAccounts() {
    return this.communicationService.get('bank/accounts').toPromise();
  }

  public createRecipient(body: any) {
    return this.communicationService.post('bank//recipient/create', body).toPromise();
  }

  public getAllRecipients(body?: any) {
    return this.communicationService.get('bank/recipients', body).toPromise();
  }

  public transfer(body?: any) {
    return this.communicationService.post('bank/transfer', body).toPromise();
  }

  public getTransferHistory(body?: any) {
    return this.communicationService.post('bank/transfer-history', body).toPromise();
  }
}
