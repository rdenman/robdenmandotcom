import { Component } from '@angular/core';
import { WorkDetailModel } from '../models/work-detail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public workDetails: WorkDetailModel[] = [
    {
      employer: 'Infinite Campus',
      position: 'Software Engineer II & Team Lead',
      startDate: new Date('05/15/2019'),
      responsibilities: [
        {
          text:
            'Managed, developed, and delivered a variety of projects, including integrated applications ' +
            'in the main SIS and a standalone website'
        },
        { text: 'Created automated pipelines for each project' },
        {
          text:
            'Maintained team’s agile scrum board, ensuring tasks were prioritized for maximum visibility into ' +
            'the team’s current work and priorities'
        },
        {
          text:
            "Presented sprint work at bi-weekly meetings to the department's key stakeholders"
        },
        {
          text:
            'Collaborated with other verticals and contributed to several repositories outside projects the team worked on'
        }
      ]
    },
    {
      employer: 'Infinite Campus',
      position: 'Software Engineer I',
      startDate: new Date('05/15/2017'),
      endDate: new Date('05/15/2019'),
      responsibilities: [
        {
          text:
            'Prototyped several applications, many of which were promoted to production'
        },
        {
          text:
            'Created applications spanning many technology stacks, including: ',
          subtext: [
            'Angular (2+) & Jersey/Hibernate-based REST API',
            'AngularJS & Custom REST API Framework',
            'XSLT/Vanilla JS & Custom Non-RESTFUL API Framework'
          ]
        },
        {
          text:
            'Developed highly-performant SQL queries for a number of data-intensive operations & batch jobs'
        }
      ]
    }
  ];
}
