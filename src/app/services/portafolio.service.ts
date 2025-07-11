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
      title: 'Aplicación web para cosmetología',
      description: 'Se desarrolló una página web para una cosmetóloga con el fin de fortalecer su presencia en internet, mostrar sus servicios y permitir agendar citas a través de WhatsApp. También se implementó un panel administrativo exclusivo para la dueña, desde donde puede gestionar sus servicios.',
      descriptionAmplia: 'Con el objetivo de profesionalizar su presencia digital, se creó una página web personalizada para una cosmetóloga interesada en destacar su marca y atraer más clientes. La plataforma permite a los visitantes conocer los servicios ofrecidos, junto con descripciones e imágenes, y facilita la reserva de citas mediante un enlace directo a WhatsApp, optimizando así la comunicación y la conversión de visitantes en clientes. Además, se desarrolló un panel de administración privado al que solo la dueña tiene acceso. Este panel le permite agregar, editar o eliminar servicios de forma sencilla, sin depender de terceros. La solución fue diseñada para ser intuitiva, funcional y completamente alineada con su identidad como profesional de la belleza.',
      fecha: '23 Abril 2024',
      cliente: 'Aixa',
      categoria: 'Web',
      challenge:  'Proceso de desarrollo: Levantamiento de requerimientos: Se analizaron las necesidades de la cosmetóloga en cuanto a visibilidad, servicios y atención al cliente. Diseño visual y experiencia de usuario: Se creó una interfaz limpia y estética, representando su estilo profesional y la confianza en sus servicios. Desarrollo web: Se construyó el sitio con secciones claras de servicios y un botón de contacto que dirige directamente a WhatsApp. Panel administrativo: Se programó un panel seguro y privado para que la dueña pudiera autogestionar sus servicios. Implementación y prueba: Se probaron todas las funcionalidades para asegurar una experiencia fluida tanto para clientes como para la administradora. Desafíos principales: Facilitar la gestión independiente: Lograr que la dueña pudiera manejar su sitio y servicios sin necesidad de conocimientos técnicos. Conexión efectiva con WhatsApp: Asegurar una transición sin fricción entre la web y el sistema de mensajería para agendar citas. Seguridad del panel administrativo: Restringir el acceso solo a la propietaria para proteger la gestión de los servicios. Adaptabilidad móvil: Garantizar una experiencia fluida en celulares, considerando que muchas citas se generan desde dispositivos móviles.',
      sitio: 'aixaver.com',
      link: '/digital-agency/project-details/1',
      tags: ['Web', 'UI/UX', 'BRANDING'],
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
      title: 'Aplicación web para InCup',
      description: 'Se desarrolló una aplicación web para Incup con el objetivo de posicionar su marca en línea, mostrar sus procesos de trabajo y productos, y facilitar las compras mediante una integración directa con WhatsApp. También se implementó un panel administrativo con control de permisos para gestionar el inventario.',
      descriptionAmplia: 'Para fortalecer la presencia digital de Incup, se diseñó y desarrolló una aplicación web integral que les permite mostrar quiénes son, qué hacen y cómo lo hacen, incluyendo sus procesos de producción. La plataforma también funciona como un catálogo digital de productos, donde los usuarios pueden visualizar la oferta disponible y acceder a una compra rápida a través de redirección directa a WhatsApp, haciendo el proceso más ágil y efectivo. Además, se implementó un sistema administrativo privado, accesible únicamente por usuarios con permisos específicos. Este panel permite dar de alta, baja o editar productos en el inventario, brindando a Incup una herramienta eficaz para mantener su catálogo actualizado y organizado.',
      fecha: '23 Abril 2024',
      cliente: 'InCup',
      categoria: 'Web',
      sitio: 'https://incup.com.mx/',
      challenge:  'Proceso de desarrollo: Análisis de requerimientos: Se trabajó junto a Incup para entender su marca, necesidades de visibilidad, productos y procesos internos. Diseño UX/UI: Se creó una interfaz intuitiva, visualmente alineada con la identidad de la marca. Desarrollo web: Se implementó el frontend y backend, incluyendo la visualización de productos y la redirección a WhatsApp. Panel administrativo: Se desarrolló un sistema seguro con control de usuarios y permisos para gestionar el inventario. Pruebas y lanzamiento: Se realizaron pruebas funcionales y de usabilidad antes del despliegue final. Desafíos principales: Seguridad de acceso al panel: Asegurar que solo usuarios autorizados pudieran acceder al sistema administrativo. Flujo de compra simple pero efectivo: Diseñar una experiencia de usuario que conectara sin fricciones con WhatsApp para facilitar la conversión. Actualización dinámica del catálogo: Crear una interfaz amigable y robusta para que el equipo de Incup pueda modificar productos sin conocimientos técnicos. Representar los procesos MOPRA: Traducir los procesos internos en una narrativa clara, visual y comprensible para el usuario final.',
      link: '/digital-agency/project-details/2',
      tags: ['Invantario', 'Web', 'BRANDING'],
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
      title: 'Aplicación web para Banorte',
      description: 'Durante el HackMTY, desarrollamos una aplicación para Banorte con el objetivo de agilizar la apertura de cuentas bancarias. La solución integró una IA generativa que recomendaba tarjetas personalizadas y proponía estrategias de manejo financiero basadas en el perfil del usuario.',
      descriptionAmplia: 'En el marco del HackMTY, asumimos el reto de Banorte que consistía en diseñar una aplicación innovadora para facilitar y acelerar la creación de cuentas bancarias. Nuestra solución se enfocó en optimizar el flujo de registro, reduciendo los pasos tradicionales a través de una experiencia más ágil e intuitiva. Como valor agregado, integramos una inteligencia artificial generativa capaz de analizar ciertos criterios del usuario y sugerir las tarjetas más adecuadas para su perfil. Además, utilizamos la información que el banco puede obtener legalmente del usuario (como ingresos, edad, historial y comportamiento financiero) para generar recomendaciones personalizadas de productos financieros. Esto ayuda a promover una mejor salud financiera mediante el uso inteligente de herramientas ofrecidas por el propio banco.',
      fecha: '23 Abril 2024',
      cliente: 'Banorte',
      categoria: 'Web',
      challenge:  'Proceso de desarrollo: Análisis del reto: Se estudió el desafío propuesto por Banorte, enfocado en reducir los pasos para abrir una cuenta bancaria. Diseño del flujo optimizado: Se diseñó una experiencia simplificada, eliminando formularios redundantes y pasos innecesarios. Integración de IA generativa: Se desarrolló un módulo que, con base en criterios definidos (perfil financiero, objetivos, edad, etc.), recomendaba la tarjeta más adecuada. Propuesta de salud financiera: Se implementó una función que, con la información proporcionada por el usuario, ofrecía sugerencias para el manejo óptimo de su dinero mediante productos del banco. Validación y pitch: Se presentó un prototipo funcional en el evento con pruebas de concepto y lógica validada. Desafíos principales: Reducción del flujo sin comprometer requisitos legales: Simplificar el proceso de apertura sin dejar de cumplir con regulaciones KYC (Know Your Customer). Desarrollo contrarreloj: Completar una solución funcional y atractiva en tiempo limitado dentro del hackathon. Entrenamiento y criterio de la IA generativa: Definir reglas claras para que la IA ofreciera recomendaciones acertadas y personalizadas. Personalización sin invasión de privacidad: Lograr un balance entre recomendaciones útiles y el respeto a la privacidad y ética del uso de datos.',
      sitio: 'https://proyecto-hackthon-mty-zwd8.vercel.app/',
      link: '/digital-agency/project-details/3',
      tags: ['Banco', 'IA', 'WEB'],
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
      title: 'Aplicación de cursos en Linea',
      description: 'Participamos en el desarrollo de una plataforma eCommerce para Learnify, enfocada en la creación y venta de cursos en línea. Se integró inteligencia artificial para facilitar la generación de contenido y recursos educativos, haciendo más accesible la creación de cursos para cualquier usuario.',
      descriptionAmplia: 'Con el objetivo de democratizar la educación en línea, colaboramos en el desarrollo de la plataforma web Learnify, un eCommerce enfocado en la creación, publicación y venta de cursos digitales. Learnify se distingue por su enfoque innovador: utiliza inteligencia artificial para asistir a los creadores de contenido en la generación de materiales educativos, facilitando la estructuración de cursos, la creación de descripciones, módulos y recursos interactivos. La plataforma fue diseñada para que cualquier persona interesada en compartir su conocimiento pueda hacerlo sin enfrentar barreras técnicas o de diseño. Gracias a la integración de IA, se reduce el tiempo y esfuerzo necesario para montar un curso completo, promoviendo así una mayor participación de expertos de distintas áreas.',
      fecha: '23 Abril 2024',
      cliente: 'Learnify',
      categoria: 'Web',
      challenge:  'Proceso de desarrollo: Definición de objetivos con Learnify: Se estableció el enfoque de la plataforma: facilitar la creación de cursos mediante IA, y permitir su venta en línea. Diseño de experiencia para creadores: Se desarrolló una interfaz intuitiva y guiada para que los usuarios puedan subir sus cursos fácilmente. Integración de inteligencia artificial: La IA asiste en la generación automática de textos, estructuras de curso y sugerencias de contenido. Implementación de funciones eCommerce: Se configuraron pasarelas de pago, gestión de cursos comprados, perfiles de usuarios y reseñas. Pruebas de usabilidad y despliegue: Se probaron funcionalidades clave para asegurar una experiencia fluida tanto para creadores como para estudiantes. Desafíos principales: Simplificar la creación de cursos sin limitar la personalización: Diseñar un flujo que ayudara, pero que no restringiera la libertad creativa del instructor. Entrenamiento efectivo de la IA: Asegurar que las sugerencias generadas por la IA fueran relevantes, educativas y adaptables a distintos temas. Balance entre facilidad de uso y potencia: Crear una herramienta poderosa pero accesible para usuarios con distintos niveles de experiencia digital. Escalabilidad del eCommerce: Preparar la plataforma para soportar múltiples cursos, instructores y transacciones simultáneamente.',
      sitio: 'https://www.learnify.com.mx/home',
      link: '/digital-agency/project-details/4',
      tags: ['Vimeo', 'IA', 'WEB'],
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
