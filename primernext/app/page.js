import Presentacion from "@/components/Presentacion";
import Informacion from "@/components/Informacion";
import Servicios from "@/components/Servicios";
import Trabajos from "@/components/Trabajos";
import Footer from "@/components/Footer";
export default function Home() {
  const compoIm = [
  
    { id:'1', url:'https://i.postimg.cc/7ZSnNR99/hector.jpg', alt:'img', width:'300',height:'300'  },

  ];
  const infor =[
    {titulo:'Nombre :',subtitulo:'Hector Isaac Orantes Hernandez'},
    {titulo:'Edad :',subtitulo:'19 Años'},
    {titulo:'Vive en :',subtitulo:'Tuxtla Gutiérrez'},
    {titulo:'Ocupacion :',subtitulo:'Estudiante a Tiempo Completo'},
    {titulo:'Estudios:',subtitulo:'Universidad Politecnica de Chiapas'},
    
  ]
  const titInfo ='Informacion sobre hector:';
  const titulo = 'Hector Isaac Orantes Hernandez';
  const infoServe = 'Servicios';
  const serCont =[
    {titulo:'Desarrollador backend',url:'https://cdn-icons-png.flaticon.com/128/274/274439.png', alt:'img', width:'100',height:'100'},
    {titulo:'Document Mannager',url:'https://cdn-icons-png.flaticon.com/128/2029/2029250.png', alt:'img', width:'100',height:'100'},
    {titulo:'Gestor de Proyectos',url:'https://cdn-icons-png.flaticon.com/128/6488/6488206.png', alt:'img', width:'100',height:'100'},
   
  ];
  const traCont =[
    {titulo:'IS Movies',subtitulo:'Explora un vasto catálogo de películas de todos los géneros, desde emocionantes películas de acción hasta conmovedores dramas y divertidas comedias. ',url:'https://i.postimg.cc/y8hRPYWp/image.png', alt:'img', width:'1300',height:'600'},
    {titulo:'Farmacia Darwin',subtitulo:'Encontrarás una amplia gama de medicamentos genéricos de alta calidad a precios asequibles. Navega fácilmente por nuestro catálogo, consulta información detallada sobre productos y realiza tus pedidos de forma segura y discreta desde la comodidad de tu hogar. ',url:'https://i.postimg.cc/9QHTZqXq/IMG-20230925-WA0150.jpg', alt:'img', width:'1300',height:'600'},
   
  ];
  const infoTra ='Trabajos';
  const infoFoo ='Hector Orantes';
  const fooCont =[
    {subtitulo:'Facebook',url:'https://cdn-icons-png.flaticon.com/128/747/747374.png', alt:'img', width:'30',height:'30' ,href:'/'},
    {subtitulo:'Git Hub',url:'https://cdn-icons-png.flaticon.com/128/1051/1051377.png', alt:'img', width:'30',height:'30' ,href:'/'},
    {subtitulo:'Linkedin',url:'https://cdn-icons-png.flaticon.com/128/1419/1419518.png', alt:'img', width:'30',height:'30' ,href:'/'},
   
  ];

  return (
   <main>
    <Presentacion compoIm={compoIm} titulo={titulo}/>
    <Informacion infor={infor} titInfo={titInfo}/>
    <Servicios inforServe={infoServe} serCont={serCont} />
    <Trabajos traCont={traCont} infoTra={infoTra}/>
    <Footer infoFoo={infoFoo} fooCont={fooCont}/>
   </main>
  );
}
