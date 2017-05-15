import { UserListComponent } from './userList.component';
import { UserItemComponent } from './userItem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[CommonModule],
    declarations:[UserItemComponent,UserListComponent],
    exports:[UserListComponent]
})
export class UserModule{}