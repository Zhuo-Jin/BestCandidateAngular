import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ICandidate } from '../app.interface';

@Component({
  selector: 'app-display-skills-dialog',
  templateUrl: './display-skills-dialog.component.html',
  styleUrls: ['./display-skills-dialog.component.scss']
})


export class DisplaySkillsDialogComponent implements OnInit {
  jobSkills: string[];
  candidateMatched: string[];
  candidateSkills:string[];

  constructor(public dialogref : MatDialogRef<DisplaySkillsDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,) { 
    this.jobSkills = data.jobskills;
    this.candidateMatched = data.candidate.matched;       
    this.candidateSkills = data.candidate.skillTags.split(","); 
  }

  ngOnInit() {
  }

  onClose(){
    this.dialogref.close();
  }

  
  isJobSkillMatch(skill:string) : boolean{
    return this.candidateMatched.indexOf(skill.trim()) != -1 ? true : false
  }

  
  
}
