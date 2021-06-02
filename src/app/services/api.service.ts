// ************************** Shino and Alfiyyah's Contribution **********************/

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Session {
  sessionId: string ;
  booking: Map<string, string>;
  sessionDate: string ;
  sessionTime: string;
  practiceID: string;
  practitionerID: string ;
  patientID: string;
}

export interface Patient {
  patientId: string ;
  patientName: string;
  patientDOB: string;
  patientState: string;
  patientOccupation: string;
  patientDisability: string;
  patientMedCondition: string;
}

export interface Practitioner {
  practitionerId: string;
  practitionerName: string;
}

export interface Practice {
  practiceId: string;
  practiceName: string;
}

export interface Certificate{
  certID: string;
  files: Map<string, string>;
  certDate: string;
  certTime: string;
  patientID: string;
  vacResult: string;
  facility: string;
  summary: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    public http: HttpClient
  ) { }

 // @ts-ignore
  // @ts-ignore
  // createSession(session: Session): Promise<Session>{
  //   return this.http.post<Session>('http://localhost:8080/sessions', session).toPromise();
  // }
  //
  createPatient(patient: Patient): Promise<Patient>{
    return this.http.post<Patient>('http://localhost:8080/patients', patient).toPromise();
  }
  //
  // createPractice(practice: Practice): Promise<Practice>{
  //   return this.http.post<Practice>('http://localhost:8080/practices', practice).toPromise();
  // }
  //
  // createPractitioner(practitioner: Practitioner): Promise<Practitioner>{
  //   return this.http.post<Practitioner>('http://localhost:8080/practitioner', practitioner).toPromise();
  // }
  //
  // getSession(practiceID: string): Promise<Session>{
  //   return this.http.get<Session>('http://localhost:8080/practices' + practiceID + '/sessions').toPromise();
  // }
  //

  // getPractice(practiceId: string): Promise<Practice>{
  //   return this.http.get<Practice>('http://localhost:8080/practices/' + practiceId).toPromise();
  // }
  getPractices(): Promise<Practice[]>{
    return this.http.get<Practice[]>('http://localhost:8080/practices').toPromise();
  }

  getPractitioners(): Promise<Practitioner[]>{
    return this.http.get<Practitioner[]>('http://localhost:8080/practitioner').toPromise();
  }

 getSessions(): Promise<Session[]>{
    return this.http.get<Session[]>('http://localhost:8080/sessions').toPromise();
 }

 getPatients(): Promise<Patient[]>{
    return this.http.get<Patient[]>('http://localhost:8080/patients').toPromise();
 }

  getCertificates(): Promise<Certificate[]>{
    return this.http.get<Certificate[]>('http://localhost:8080/certificate').toPromise();
  }

  //
  // getPractitioner(practitionerId: string): Promise<Practitioner>{
  //   return this.http.get<Practitioner>('http://localhost:8080/practitioner').toPromise();
  // }

  // getPractice(practiceId: string): Promise<Practice> {
  //   this.http.get<Practice>('http://localhost:8080/practices').subscribe(data => {
  //     this.Practice = data.practiceName;
  //   });
  //
  // }



  //   createPatient (patient: Patient ): Patient{
//     return ;
//   }
}

// ************************** Shino and Alfiyyah's Contribution **********************/
