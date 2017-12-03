import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {Contact} from '../../models/contact';

import {ContatoService} from '../../services/contato.service';
import {LoadingService} from '../../services/loading.service';

@Component({
  selector: 'dv-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent {

  contact: Contact;
  active = true;

  private resetForm() {
    this.contact = new Contact("", "", "", "");
  }

  constructor(private _contatoService: ContatoService, private _loadingService: LoadingService) {
    this.resetForm();
  }

  onSubmit(contact: Contact): void {
    this._loadingService.show();
    this._contatoService.enviarEmail(contact).subscribe(
      res => {
        this.resetForm();
        console.log(res);
      },
      error => {
        console.log(error);
        this._loadingService.hide();
      },
      () => {
        this._loadingService.hide();
        this.active = false;
        setTimeout(() => this.active = true, 0);
      }
    );
  }

}
