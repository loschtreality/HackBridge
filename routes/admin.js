var express = require('express');
var router = express.Router();

var Applicants_Info = [{
  applicant_name:'Susie Que',
  applicant_signed:'Yes',
  applicant_docusign:'Yes'
},
{
  applicant_name:'April Smith',
  applicant_signed:'Yes',
  applicant_docusign:'Yes'
},
{
  applicant_name:'Lucy Belle',
  applicant_signed:'Yes',
  applicant_docusign:'Yes'
},
{
  applicant_name:'Kelly Watson',
  applicant_signed:'Yes',
  applicant_docusign:'Yes'
  }
];

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.render('admin', [{
  applicant_name:'Susie Que',
  applicant_signed:'Yes',
  applicant_docusign:'Yes',
  volunteer_name:'Sarah Connor',
  volunteer_status:'Yes',
  volunteer_doc:'Yes'
},
{
  applicant_name:'April Smith',
  applicant_signed:'Yes',
  applicant_docusign:'Yes',
  volunteer_name:'Kelly Woods',
  volunteer_status:'Yes',
  volunteer_doc:'Yes'
},
{
  applicant_name:'Lucy Belle',
  applicant_signed:'Yes',
  applicant_docusign:'Yes',
  volunteer_name:'Sue Liu',
  volunteer_status:'Yes',
  volunteer_doc:'Yes'
},
{
  applicant_name:'Kelly Watson',
  applicant_signed:'Yes',
  applicant_docusign:'Yes',
  volunteer_name:'Bob Stark',
  volunteer_status:'Yes',
  volunteer_doc:'Yes'
  }
]);
});

module.exports = router;
