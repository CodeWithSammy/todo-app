import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styles: ''
})
export class HeaderComponent {
  searchControl=new FormControl();
  stateService= inject(StateService);
  ngOnInit(){
    this.searchControl.valueChanges.subscribe((value)=>{
      this.stateService.searchSubject.next(value || "");
    })
  }
}
