import { Component, OnInit } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@Component({
  selector: 'app-masks',
  templateUrl: './masks.component.html',
  styleUrls: ['./masks.component.scss']
})


  export class HeaderComponent implements OnInit {

    constructor() { 
      let cpf_cnpj: number;

    }
  
    ngOnInit(): void {
      
    }

  //   isCPF(): boolean{
  //     return this.cpf_cnpj == null ? true : this.cpf_cnpj.length < 12 ? true : false;
  //  }
   
  //  getCpfCnpjMask(): string{
  //     return this.isCPF() ? '000.000.000-009' : '00.000.000/0000-00';
  //  }

  }
