import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FornecService } from '../fornec.service';
import { Fornec } from '../fornecedores';

@Component({
  selector: 'app-fornec',
  templateUrl: './fornec.component.html',
  styleUrls: ['./fornec.component.css']
})
export class FornecComponent implements OnInit{

  fornecedores: Fornec[] = [];
  formGroupForncedores: FormGroup;
  isEditing: boolean = false;

  constructor(private fornecService: FornecService, private formBuilder: FormBuilder){
    this.formGroupForncedores = formBuilder.group({
      id: [''],
      name: [''],
      active: [false],
      category: [''],
      contact: ['']
    })
  }

  ngOnInit(): void {
    this.LoadFornec();
  }

  LoadFornec(){
    this.fornecService.getFornec().subscribe(
      {
        next: data => this.fornecedores = data,
        error: msg => console.log("Erro ao chamar o endpont " + msg)
      });
  }

  save(){
    if(this.isEditing){
      this.fornecService.updateFornec(this.formGroupForncedores.value).subscribe({
        next: () => {
          this.LoadFornec();
          this.formGroupForncedores.reset();
          this.isEditing = false;
        }
      })
    } else{
      this.fornecService.saveFornec(this.formGroupForncedores.value).subscribe({
        next: data => {
          this.fornecedores.push(data);
          this.formGroupForncedores.reset();
        }
      })
    }
  }

  remove(fornec: Fornec): void{
    this.fornecService.delFornec(fornec).subscribe({
      next: () => this.LoadFornec()
    })
  }

  edit(fornec: Fornec): void{
    this.formGroupForncedores.setValue(fornec);
    this.isEditing = true;
  }

}
