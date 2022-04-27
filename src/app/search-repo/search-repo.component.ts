import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { GitUser } from '../git-user-template';
import { GitRepo } from '../git-repo-template';
import { UserParserService } from '../userParserService/user-parser.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  @Input()user = new GitUser('','','','');

  repoQuery= new FormControl('')

  userRepo: any;

  getRepo(){
    interface getRepoData
    {
      id: string ,
      node_id: string,
      name: string,
      full_name: string,
    }

  type simpleType = getRepoData[];

    this.userParserService.getRepos(this.user.userLogin).subscribe((response: any) => {
      this.userRepo = response
 });


    alert(this.userRepo.length)


  }

  constructor(private userParserService:UserParserService) {}

  ngOnInit(): void {




  }

}
