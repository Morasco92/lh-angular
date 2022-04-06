import { Component, OnInit } from '@angular/core';
import { vagas } from '../models/vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public  vaga : vagas  =  new  vagas ( 0 , "" , "" , "" , 0 ) ; 
  public  vagas :  vagas [ ]  =  [ ] ; 

  constructor(private _vagasservice: VagasService) { }

  ngOnInit(): void {
  }

  cadastrar ( ) { 
    this . _vagasservice.cadastrarVaga ( this . vaga ) . subscribe ( 
      vaga  =>  { this.vaga  =  new  vagas ( 0 , "" , "" , "" , 0 ) } , 
      err  =>  { console.log ( "erro ao cadastrar" ) } 
    ) ; 

    }
    atualizar(id: number){
      this._vagasservice.atualizarVaga(id,this.vaga).subscribe(
        vaga => {this.vaga = new vagas(0,"","","",0)},
        err => {console.log("erro ao atualizar")}
      );
  
      window.location.href = "/mural";
  
    }
  
    excluir(id: number){
      this._vagasservice.removerVaga(id).subscribe(
        vaga => {this.vaga = new vagas(0,"","","",0)},
        err => {console.log("erro ao Excluir")}
      );
  
      window.location.href = "/mural";
  
    }


}
