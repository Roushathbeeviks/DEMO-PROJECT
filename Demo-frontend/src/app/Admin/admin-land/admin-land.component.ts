import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-land',
  templateUrl: './admin-land.component.html',
  styleUrls: ['./admin-land.component.css']
})
export class AdminLandComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
