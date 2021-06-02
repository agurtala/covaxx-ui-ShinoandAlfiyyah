/*// ************************** Alfiyyah's Contribution *********************!/*/

import { Component, OnInit } from '@angular/core';
import {ApiService, Certificate, Patient} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public api: ApiService
  ) {
  }

  // @ts-ignore
  currentCertificates: Certificates[];

  // @ts-ignore
  certificate: Certificate;

  // @ts-ignore
  currentPatients: Patients[];

  // @ts-ignore
  patient: Patient;


  async ngOnInit(): Promise<void> {

    this.currentPatients = await this.api.getPatients();
    this.currentCertificates = await this.api.getCertificates();


  }
}

/*// ************************** Alfiyyah's Contribution *********************!/*/
