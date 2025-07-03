import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-v3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-v3.component.html',
  styleUrl: './blog-v3.component.scss'
})
export class BlogV3Component {
  categories: { filter: string, label: string }[] = [
    { filter: '*', label: 'All' },
    { filter: '.market', label: 'Marketing' },
    { filter: '.application', label: 'Application' },
    { filter: '.design', label: 'Design' },
    { filter: '.dev', label: 'Development' },
    { filter: '.life', label: 'Lifestyle' },
    { filter: '.other', label: 'Others' }
  ];

  blogs = [
    {
      id: 1,
      categories: ['application', 'life'],
      image: 'assets/images/blog/blog_img_10.jpg',
      date: '17 Apr, 2024',
      title: 'How to become a web designer in 2021',
      tags: ['UI/UX design', 'Design'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 2,
      categories: ['application', 'dev', 'other'],
      image: 'assets/images/blog/blog_img_11.jpg',
      date: '09 Mar, 2024',
      title: 'Make Productive Day with AI app',
      tags: ['AI', 'Application'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 3,
      categories: ['market', 'design', 'dev', 'other'],
      image: 'assets/images/blog/blog_img_12.jpg',
      date: '13 Apr, 2024',
      title: 'Speaking remotely at WordCamp US',
      tags: ['Wordcamp', 'Event'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 4,
      categories: ['application'],
      image: 'assets/images/blog/blog_img_13.jpg',
      date: '09 Mar, 2024',
      title: 'Designer’s Checklist for Every UX Project',
      tags: ['Designer', 'UI/UX'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 5,
      categories: ['market', 'design', 'dev'],
      image: 'assets/images/blog/blog_img_14.jpg',
      date: '13 Apr, 2024',
      title: 'Spending Habits, 13 Tips for Success.',
      tags: ['Tips', 'Lifestyle'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 6,
      categories: ['application', 'other'],
      image: 'assets/images/blog/blog_img_15.jpg',
      date: '09 Mar, 2024',
      title: 'Manage your online business easily',
      tags: ['business', 'Tips'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 7,
      categories: ['market', 'life'],
      image: 'assets/images/blog/blog_img_16.jpg',
      date: '13 Apr, 2024',
      title: 'Our Travel Card Makes you Happy.',
      tags: ['Tips', 'Lifestyle'],
      link: '/digital-agency/blog-details'
    },
    {
      id: 8,
      categories: ['market', 'design', 'life'],
      image: 'assets/images/blog/blog_img_17.jpg',
      date: '09 Mar, 2024',
      title: 'Manage your online business easily',
      tags: ['business', 'Tips'],
      link: '/digital-agency/blog-details'
    }
  ];

  activeCategory = '*';

  setActiveCategory(filter: string) {
    this.activeCategory = filter;
  }

  filterBlogs(blogCategories: string[]): boolean {
    return this.activeCategory === '*' || blogCategories.includes(this.activeCategory.slice(1));
  }
}
