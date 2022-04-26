import { Component, OnInit } from '@angular/core';
import { UserParserService } from '../userParserService/user-parser.service';
import {GitUser} from '../git-user-template';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {

  userInput= new FormControl('');

  user = new GitUser('','','');
  testUser: any;

  constructor(private userParserService:UserParserService) {
    this.userParserService.getUser().subscribe(data=>{
      this.user.userLogin = data.login;
      alert(this.user.userLogin)
    })
  }

  checkUser(){
    alert(this.user.userLogin)

  }


  ngOnInit(): void {

  }

}
