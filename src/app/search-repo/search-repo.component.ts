import { Component, Input, OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { GitUser } from '../git-user-template';
import { GitRepo } from '../git-repo-template';
import { UserParserService } from '../userParserService/user-parser.service';
//import { ActivatedRoute, ParamMap  } from '@angular/router';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  @Input()user = new GitUser('','','','');

  repoQuery= new FormControl('')

  userRepo= new GitRepo ('','')

  checkRepo(){
    alert(this.userRepo.name)
  }

  constructor(private userParserService:UserParserService) {
    this.userParserService.getRepos(this.user.userLogin, this.repoQuery.value)
    this.userRepo = this.userParserService.repos
    //this.userRepo.description= this.userParserService.repos.description
   }

  ngOnInit(): void {
    alert(this.userRepo)
  }

}
