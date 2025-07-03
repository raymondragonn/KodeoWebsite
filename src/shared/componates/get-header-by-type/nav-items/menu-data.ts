import { LOGINLINK, REGISTERLINK } from "../../../core";
import { MenuItem, MenuType } from "./menu";

export const MENUITEMS: MenuItem[] = [
    {
      title: 'Home',
      menuType: MenuType.Large,
      items: [
        { label: 'Payment Service', img: 'assets/images/menu/home01.jpg', link: '/' },
        { label: 'AI Writer', img: 'assets/images/menu/home02.jpg', link: '/ai-writer' },
        { label: 'Website Builder', img: 'assets/images/menu/home03.jpg', link: '/website-builder' },
        { label: 'CRM', img: 'assets/images/menu/home04.jpg', link: '/crm' },
        { label: 'Project Management', img: 'assets/images/menu/home05.jpg', link: '/project-management' },
        { label: 'Mobile App Landing', img: 'assets/images/menu/home06.jpg', link: '/mobile-app-landing' },
        { label: 'Digital Agency', img: 'assets/images/menu/home07.jpg', link: '/digital-agency' },
        { label: 'Help Desk', img: 'assets/images/menu/home08.jpg', link: '/help-desk' },
        { label: 'Web Hosting', img: 'assets/images/menu/home09.jpg', link: '/web-hosting' },
        { label: 'Cyber Security', img: 'assets/images/menu/home10.jpg', link: '/cyber-security' },
      ],
    },
    {
      title: 'Pages',
      menuType: MenuType.Sm,
      categories: [
        {
          category: 'Essential',
          links: [
            { label: 'About Us-1', link: '/about-us-v1' },
            { label: 'About Us-2', link: '/ai-writer/about-us-v2' },
            { label: 'About Us-3', link: '/cyber-security/about-us-v3' },
            { label: 'Team-1', link: '/team-v1' },
            { label: 'Team-2', link: '/ai-writer/team-v2' },
          ],
        },
        {
          category: 'Features',
          links: [
            { label: 'Service-1', link: '/service-v1' },
            { label: 'Service-2', link: '/ai-writer/service-v2' },
            { label: 'Service-3', link: '/cyber-security/service-v3' },
            { label: 'Service Details', link: '/cyber-security/service-details' },
            { label: 'Pricing-1', link: '/web-hosting/pricing-v1' },
            { label: 'Pricing-2', link: '/project-management/pricing-v2' },
          ],
        },
        {
          category: 'Others',
          links: [
            { label: 'FAQ-1', link: '/faq-v1' },
            { label: 'FAQ-2', link: '/ai-writer/faq-v2' },
            { label: 'Login', link: LOGINLINK },
            { label: 'Sign Up', link: REGISTERLINK },
            { label: '404 Error', link: '/404' },
          ],
        },
      ],
    },
    {
      title: 'Project',
      links: [
        { label: 'Project-1', link: '/project-v1' },
        { label: 'Project-2', link: '/ai-writer/project-v2' },
        { label: 'Project-3', link: '/digital-agency/project-v3' },
        { label: 'Project-4', link: '/cyber-security/project-v4' },
        { label: 'Project-5', link: '/project-management/project-v5' },
        { label: 'Project-6', link: '/ai-writer/project-v6' },
        { label: 'Project Details', link: '/digital-agency/project-details' },
      ],
    },
    {
      title: 'Blog',
      links: [
        { label: 'Blog Full Width', link: '/digital-agency/blog-v1' },
        { label: 'Blog List', link: '/ai-writer/blog-v2' },
        { label: 'Blog 2 column', link: '/digital-agency/blog-v3' },
        { label: 'Blog Details', link: '/digital-agency/blog-details' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Contact Us-1', link: '/contact-v1' },
        { label: 'Contact Us-2', link: '/ai-writer/contact-v2' },
      ],
    },
  ];
