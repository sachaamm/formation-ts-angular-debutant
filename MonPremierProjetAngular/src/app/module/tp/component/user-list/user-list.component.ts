import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserDto } from 'src/app/dto/user.dto';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  dataSource = new MatTableDataSource<UserDto>();

  displayedColumns: string[] = ['email', 'role'];

  constructor(public authService: AuthenticationService, private utilisateurService: UtilisateurService) {

  }

  ngOnInit(): void {
    this.utilisateurService.getUserList().subscribe((users: UserDto[]) => {
      this.dataSource.data = users;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
