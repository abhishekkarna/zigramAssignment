import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {
  // MatIconModule,
  MatInputModule
} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
    // MatIconModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatCardModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatChipsModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: []
})

export class MaterialModule { }


