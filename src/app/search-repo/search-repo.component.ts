import { Component, Input, OnInit } from '@angular/core';
import { GitUser } from '../git-user-template';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  @Input()user = new GitUser('','','','');

  constructor() { }

  ngOnInit(): void {
    //alert(this.user.userLogin)
  }

}
