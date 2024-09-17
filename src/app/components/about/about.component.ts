import { Component, OnInit } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { NgFor, NgIf } from '@angular/common';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TimelineModule, CardModule, NgIf, NgFor, ChipModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  events!: any[];
  chips!: any[];

  ngOnInit(): void {
    this.events = [
      { status: 'University', date: '1/9/2017', icon: 'pi pi-graduation-cap', color: '#9C27B0', dscr: 'Entered the International University of Information Technologies, majoring in Information Systems. Graduated from the university in 21. Graduated with a GPA of 3.33. At the university, I became familiar with languages ​​such as Python, Java, JavaScript, PHP. I also learned the basics of working with databases and layout of varying complexity.' },
      { status: 'First Job', date: '15/8/2019', icon: 'pi pi-money-bill', color: '#673AB7', dscr: "My first job was offered to me by our teacher at the university, who also had his own programming school. At first, I tried to teach lessons on html/css/js. Later, I started creating and developing a blog on our school's website. There I got acquainted with the React framework and Node JS."},
      { status: 'Another offer', date: '1/12/2020 16:15', icon: 'pi pi-money-bill', color: '#FF9800', dscr: 'I got a job as an intern at the next company, but I was able to justify their trust quickly and got a full-time position after just 2 weeks. There I was developing and setting up a CRM system built on Go and Angular. Later we migrated the front end of our portal to the new Angular (version 2.0). Here I also improved my database skills and got acquainted with the Lua language.' },
      { status: 'Current job', date: '1/7/2022 10:00', icon: 'pi pi-check', color: '#607D8B', dscr: 'My current job is related to my previous job, as I moved to the company that came up with that CRM system. Here I have already delved into the development, debugging and improvement of the portal and pumped up my skills in front-end development. At the moment I am studying and writing my pet projects to get a job in large domestic companies or in foreign ones.' }
    ];

    this.chips = [
      { label: 'Java', color: 'green' },
      { label: 'JavaScript', color:'red' },
      { label: 'React', color: 'purple' },
      { label: 'Node JS', color: 'pink' },
      { label: 'Go', color: 'yellow' },
      { label: 'Lua', color: 'brown' },
      { label: 'AngularJs', color: 'teal' },
      { label: 'HTML/CSS', color: 'gray' },
      { label: 'Database', color: 'magenta' },
      { label: 'CRM DAMU', color: 'lime' },
      // { label: 'Microservices', color:'silver' },
      // { label: 'Docker', color: 'darkblue' },
      // { label: 'Kubernetes', color: 'darkgreen' },
      // { label: 'AWS', color: 'darkred' },
      // { label: 'DevOps', color: 'darkorange' },
      { label: 'Angular (2.0)', color: 'darkpurple' },
      { label: 'TypeScript', color: 'darkmagenta' },
      { label: 'PrimeNG', color: 'darkgray' },
      { label: 'Bootstrap', color: 'darkgray' },
      // { label: 'Ionic', color: 'darklime' },
    ]
  }
}
