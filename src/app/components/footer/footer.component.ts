import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent {
  @Input() res :string= '';
  @Output() rta = new EventEmitter<string>();

  emitir(data:string) {
    this.rta.emit(`Hola ${data}`);
  }
}
