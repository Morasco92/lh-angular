import { Component, OnInit } from '@angular/core';
import { vagas } from '../models/vagas.model';
import { VagasService } from '../vagas.service';
@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

 public vagas: vagas [] = []; 



  constructor(private _vagasservice: VagasService ) { }

  ngOnInit(): void {
    this.listarVagas();
  }
listarVagas() {
  this._vagasservice.getVagas ()
    .subscribe(
      retornaVaga =>{
        this.vagas = retornaVaga.map (
          item => {
            return new vagas (
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )

      }
     
    )

}
}
