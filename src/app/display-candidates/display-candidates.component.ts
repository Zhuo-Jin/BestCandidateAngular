import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { BestCandidateApiService } from '../shared/best-candidate-api.service';
import { JobAdderApiService } from '../shared/job-adder-api.service';
import { ICandidate, IJob } from '../app.interface';
import { DisplaySkillsDialogComponent } from '../display-skills-dialog/display-skills-dialog.component';


@Component({
  selector: 'app-display-candidates',
  templateUrl: './display-candidates.component.html',
  styleUrls: ['./display-candidates.component.scss']
})
export class DisplayCandidatesComponent implements OnInit {

  jobIdSelected: number;
  displayedColumns = ['candidateId', 'name', 'score', 'skill'];

  jobDataSource: IJob[];
  rawCandidates:ICandidate[];
  candidateDataSource: MatTableDataSource<ICandidate>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private _bestCanService: BestCandidateApiService, 
              private _jobService: JobAdderApiService,
              public _dialog:MatDialog)
  {
    this._jobService.getAllJobs()
      .subscribe(jobs => {
        this.jobDataSource = jobs;
      },
      error => {
        console.log(error)
      });
 
  }

  ngOnInit(){
    this.updateList();
    
  }
  
  popupDialog(row:ICandidate){
    var dialog = this._dialog
        .open(DisplaySkillsDialogComponent, 
              {data: {candidate: row, jobskills: this.jobDataSource.find(j => j.jobId == this.jobIdSelected).skills.split(",")}});
  }

  updateList(){

    if (this.jobIdSelected != null){
      this._bestCanService.getCandidatesFromJobId(this.jobIdSelected)
      .subscribe(
        candidates => {
          this.rawCandidates = candidates;
          this.candidateDataSource = new MatTableDataSource(this.rawCandidates);
          this.candidateDataSource.paginator = this.paginator;
          this.candidateDataSource.sort = this.sort;
        },
        error => {
          console.log(error);
        }
      );
    }

  }

  ngAfterViewInit() {
    // this.candidateDataSource.paginator = this.paginator;
    // this.candidateDataSource.sort = this.sort;
  }

}

