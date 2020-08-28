import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService } from '../../services/dog.service';
import { DogDetails } from '../../models/dog-details';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.scss']
})
export class DogDetailsComponent implements OnInit {
  id: any;
  dogDetails : DogDetails;
  
  constructor(
    private route: ActivatedRoute,
    private service: DogService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
  });
  this.getDog();
}
getDog() {
  this.dogDetails = new DogDetails();
  this.service.getDogUser(this.id).subscribe(
    x => {
      this.dogDetails = x;
      //console.log(x);
    }
  );
}

upisiPsa(x) {
  this.router.navigate(['charts', 'upisiPsa', x]);
}

}
