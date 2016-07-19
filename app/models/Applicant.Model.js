// // app/models/nerd.js
// // grab the mongoose module
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// var ApplicantSchema = new Schema({
//   applicant : {
//     BasicInfo: {
//       BirthDate: String,
//       LastName: String,
//       FirstName: String,
//       Address: String,
//       AppSuite: String,
//       City: String,
//       State: String,
//       Zip: String,
//       TimeAddress: String,
//       Phone: String,
//       Email: String
//      },
//     LegalInfo: {
//       eightyes: false,
//       eightno: false,
//       proofyes: false,
//       proofno: false,
//       legalyes: false,
//       legalno: false
//     },
//     PositionInfo: {
//       Referral: String,
//       Position: String,
//       Wage: String,
//       Start: String,
//       Hours: String,
//       Start: String,
//       Hours: String,
//       Fulltime: false,
//       Parttime: false,
//       Resume: String
//     },
//     EducationInfo: {
//       HSinfo: {
//         HSname: String,
//         HSlocation: String,
//         HScomplete: String,
//         HSGrad: String
//       },
//       CLinfo: {
//         CLname: String,
//         CLlocation: String,
//         CLcomplete: String,
//         CLmajor: String
//       },
//       BUinfo: {
//         BUname: String,
//         BUlocation: String,
//         BUcomplete: String,
//         BUmajor: String
//       },
//       Proinfo: {
//         Proname: String,
//         Prolocation: String,
//         Procomplete: String,
//         Promajor: String
//       }
//     },
//     MoreInfo: {
//       CurrMilNo: false,
//       CurrMilYes: false,
//       CrimeYes: false,
//       CrimeNo: false,
//       CrimeInfo: String,
//       drugNo: false,
//       drugYes: false,
//       MilStart: String,
//       MilEnd: String,
//       Speciality: String,
//       PastMilNo: false,
//       PastMilYes: false,
//       CrimeInfo: String
//     },
//     WorkInfo:{
//       Emp1: {
//         EmpName: String,
//         EmpSup: String,
//         EmpAdd: String,
//         EmpSuite: String,
//         EmpCity: String,
//         EmpState: String,
//         EmpZip: String,
//         EmpPhone: String,
//         EmpJobTitle: String,
//         EmpStart: String,
//         EmpEnd: String,
//         EmpStartSal: String,
//         EmpEndSal: String
//       },
//       Emp2: {
//         Emp2Name: String,
//         Emp2Sup: String,
//         Emp2Add: String,
//         Emp2Suite: String,
//         Emp2City: String,
//         Emp2State: String,
//         Emp2Zip: String,
//         Emp2Phone: String,
//         Emp2JobTitle: String,
//         Emp2Start: String,
//         Emp2End: String,
//         Emp2StartSal: String,
//         Emp2EndSal: String
//       },
//       Emp3: {
//         Emp3Name: String,
//         Emp3Sup: String,
//         Emp3Add: String,
//         Emp3Suite: String,
//         Emp3City: String,
//         Emp3State: String,
//         Emp3Zip: String,
//         Emp3Phone: String,
//         Emp3JobTitle: String,
//         Emp3Start: String,
//         Emp3End: String,
//         Emp3StartSal: String,
//         Emp3EndSal: String
//       },
//       EmpContactYes: false,
//       EmpContactNo: false
//     },
//     FinalInfo: {
//       Signature: String,
//       PrintName: String,
//       SignDate: String,
//       extraNotes: String
//     }
//   }
// })
//
// //var ApplicantMod = mongoose.model('ApplicantMod', ApplicantSchema);
//
// module.exports = mongoose.model('ApplicantInfo', ApplicantSchema);
