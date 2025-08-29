import { Injectable } from '@angular/core';

export interface PortfolioItem {
  id: number;
  num: string;
  title: string;
  description: string;
  descriptionAmplia: string;
  fecha: string;
  cliente: string;
  categoria: string;
  challenge: string;
  sitio: string;
  link: string;
  tags: string[];
  imageUrl: string;
  imageDetail1: string;
  imageDetail2: string;
  imageDetail3: string;
  imageDetail4: string;
  bgColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class   PortafolioService {

  constructor() { }


  private portfolioItems: PortfolioItem[] = [
{
    id: 1,
    num: '01.',
    title: 'Cosmetología Online: Presencia y Citas',
    description: 'Creamos una potente aplicación web para una cosmetóloga, elevando su presencia online. Con ella, puede exhibir sus servicios, agendar citas fácilmente vía WhatsApp y gestionar todo desde un panel administrativo intuitivo.',
    descriptionAmplia: 'Creamos una página web poderosa para una cosmetóloga. Ahora, ella puede mostrar todos sus servicios de forma atractiva. Lo mejor es que sus clientes pueden reservar citas fácilmente por WhatsApp. ¡Así no pierde ninguna oportunidad! Además, ella tiene un panel privado donde puede manejar sus servicios como quiera, sin ayuda de nadie.',
    fecha: '23 Abril 2024',
    cliente: 'AixaCibb',
    categoria: 'Web',
    challenge: `Hacer que lo manejara sola: Fue clave que ella pudiera usar la web sin saber de tecnología.
Conectar con WhatsApp: Logramos que reservar citas por WhatsApp fuera muy sencillo.
Panel seguro: Nos aseguramos de que solo ella pudiera entrar a su panel.
Funciona en el celular: La web se ve y funciona perfecto en cualquier teléfono.`,
    sitio: 'https://aixaver.com/',
    link: '/digital-agency/project-details/1',
    tags: ['UI/UX', 'Gestión de Citas', 'Marketing Digital'],
    imageUrl: 'assets/images/media/img_16.png',
    imageDetail1: 'assets/images/media/img_70.jpg',
    imageDetail2: 'assets/images/media/img_71.jpg',
    imageDetail3: 'assets/images/media/img_72.jpg',
    imageDetail4: 'assets/images/media/img_73.jpg',
    bgColor: '#FFFFFF'
  },
  {
    id: 2,
    num: '02.',
    title: 'InCup: Plataforma Web y Gestión',
    description: 'Desarrollamos una aplicación web integral para InCup, que no solo posiciona su marca en línea, sino que también detalla sus procesos y productos, permitiendo compras directas por WhatsApp y una gestión de inventario eficiente.',
    descriptionAmplia: 'Desarrollamos una web completa para InCup. Esta página no solo explica quiénes son y qué hacen, sino que también funciona como una tienda en línea donde muestran sus productos. Los clientes pueden ver lo que ofrecen y comprar rápido por WhatsApp. También creamos un panel privado donde InCup puede controlar su inventario: agregar, quitar o cambiar productos de forma fácil y rápida.',
    fecha: '23 Abril 2024',
    cliente: 'InCup',
    categoria: 'Web',
    sitio: 'https://incup.com.mx/',
    challenge: `Seguridad de Acceso: Asegurar que solo usuarios autorizados pudieran acceder al sistema administrativo era fundamental.
Flujo de Compra Optimizado: Diseñar una experiencia de usuario que conectara de manera fluida y efectiva con WhatsApp fue clave para maximizar las conversiones.
Actualización Dinámica del Catálogo: El desafío fue crear una interfaz amigable que permitiera al equipo de InCup modificar productos sin necesidad de conocimientos técnicos.
Representación de Procesos: Traducir los complejos procesos internos de InCup en una narrativa clara, visual y comprensible para el usuario final requirió un enfoque estratégico.`,
    link: '/digital-agency/project-details/2',
    tags: ['eCommerce', 'Gestión de Inventario', 'Catálogo Digital'],
    imageUrl: 'assets/images/media/img_17.png',
    imageDetail1: 'assets/images/media/img_70.1.jpg',
    imageDetail2: 'assets/images/media/img_71.1.jpg',
    imageDetail3: 'assets/images/media/img_72.1.jpg',
    imageDetail4: 'assets/images/media/img_73.1.jpg',
    bgColor: '#FFFFFF'
  },
  {
    id: 3,
    num: '03.',
    title: 'Banorte: IA para Apertura de Cuentas',
    description: 'En HackMTY, revolucionamos la apertura de cuentas para Banorte con una aplicación innovadora. Integramos IA para recomendar tarjetas personalizadas y ofrecer estrategias financieras, optimizando la experiencia del usuario.',
    descriptionAmplia: 'En el HackMTY, enfrentamos el desafío de Banorte: revolucionar la apertura de cuentas bancarias. Nuestra aplicación innovadora optimiza radicalmente el flujo de registro, eliminando pasos innecesarios y ofreciendo una experiencia ágil e intuitiva. Como diferenciador clave, integramos una Inteligencia Artificial generativa que analiza el perfil del usuario (ingresos, edad, historial financiero, etc.) para recomendar las tarjetas y productos financieros más adecuados. Esta personalización inteligente no solo simplifica la elección, sino que también promueve una mejor salud financiera al conectar a los usuarios con las herramientas del banco más pertinentes a sus necesidades.',
    fecha: '23 Abril 2024',
    cliente: 'Grupo Financiero Banorte',
    categoria: 'Web',
    challenge: `Simplificación vs. Requisitos Legales: El mayor desafío fue reducir el proceso de apertura sin comprometer el cumplimiento de las regulaciones KYC (Know Your Customer).
Desarrollo Contrarreloj: Completar una solución funcional y atractiva en el limitado tiempo del hackathon exigió eficiencia y agilidad.
Precisión de la IA: Definir los criterios y entrenar la IA para que ofreciera recomendaciones acertadas y verdaderamente personalizadas fue crucial.
Personalización y Privacidad: Lograr un equilibrio entre ofrecer recomendaciones útiles y respetar la privacidad del usuario, así como la ética en el uso de datos, fue una prioridad.`,
    sitio: 'https://proyecto-hackthon-mty-zwd8.vercel.app/',
    link: '/digital-agency/project-details/3',
    tags: ['IA Generativa', 'Finanzas Personales', 'Optimización de Procesos'],
    imageUrl: 'assets/images/media/img_cel.png',
    imageDetail1: 'assets/images/media/img_70.2.jpg',
    imageDetail2: 'assets/images/media/img_71.2.jpg',
    imageDetail3: 'assets/images/media/img_72.2.jpg',
    imageDetail4: 'assets/images/media/img_73.2.jpg',
    bgColor: '#FFFFFF'
  },
  {
    id: 4,
    num: '04.',
    title: 'Learnify: Cursos Online con IA',
    description: 'Colaboramos en Learnify, una plataforma eCommerce que democratiza la educación en línea. Gracias a la IA integrada, cualquier persona puede crear y vender cursos, simplificando la generación de contenido educativo.',
    descriptionAmplia: 'En Learnify, colaboramos en el desarrollo de una plataforma eCommerce revolucionaria que busca democratizar la educación en línea. Esta web permite a cualquier persona crear, publicar y vender cursos digitales de manera sencilla. Lo que distingue a Learnify es su integración de Inteligencia Artificial: la IA asiste activamente a los creadores en la generación de contenido educativo, desde la estructuración de cursos y la creación de descripciones hasta módulos y recursos interactivos. La plataforma fue diseñada para eliminar las barreras técnicas y de diseño, permitiendo que expertos de diversas áreas compartan su conocimiento con menos esfuerzo y en mucho menos tiempo.',
    fecha: '23 Abril 2024',
    cliente: 'Learnify',
    categoria: 'Web',
    challenge: `Simplificar sin Restringir: El desafío fue crear un flujo de creación de cursos que, si bien asistido por IA, no limitara la creatividad y la personalización del instructor.
Eficacia de la IA: Asegurar que las sugerencias generadas por la IA fueran relevantes, educativas y adaptables a una amplia gama de temas fue un reto fundamental.
Balance entre Potencia y Accesibilidad: Desarrollar una herramienta poderosa que fuera al mismo tiempo fácil de usar para usuarios con distintos niveles de experiencia digital.
Escalabilidad del eCommerce: Preparar la plataforma para soportar un gran volumen de cursos, instructores y transacciones simultáneas fue esencial para su crecimiento futuro.`,
    sitio: 'https://www.learnify.com.mx/home',
    link: '/digital-agency/project-details/4',
    tags: ['Plataforma Educativa', 'Contenido con IA', 'eCommerce'],
    imageUrl: 'assets/images/media/img_learn.png',
    imageDetail1: 'assets/images/media/img_70Learning.jpg',
    imageDetail2: 'assets/images/media/img_71Learning.jpg',
    imageDetail3: 'assets/images/media/img_72Learn.jpg',
    imageDetail4: 'assets/images/media/img_73Learn.jpg',
    bgColor: '#FFFFFF'
  }
    // ...más proyectos
  ];


  getAll(): PortfolioItem[] {
    return this.portfolioItems;
  }

  getById(id: number): PortfolioItem | undefined {
    return this.portfolioItems.find(item => item.id === id);
  }
}
