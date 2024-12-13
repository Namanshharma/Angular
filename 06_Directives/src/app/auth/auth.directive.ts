import { Directive, effect, Input } from '@angular/core';
import { Permission } from './auth.model';

@Directive({
  selector: '[appAuth]',
  standalone: true
})

// in this we will try to make the structural directive instead of attribute directive

export class AuthDirective {
  @Input({ required: true }) userType!: Permission;

  constructor() {
    // in this constructor we need to check if our userType is matches with our Permission or not 
  }
}
