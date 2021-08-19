import React from 'react';
import ReactPlayer  from 'react-player';

const InicioBreaking = () => {
    return(
        <>
   <svg className='figura' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,32L0,288L288,288L288,192L576,192L576,224L864,224L864,192L1152,192L1152,96L1440,96L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
</svg>
    <section class="header-break text-center bg-light ">
        <div class="container-break  ">
            <p className='p-5'>La Serie</p>
            <h1 className=''>Con mayor exito de los ultimos años.!!</h1>
          
        </div>
        <svg className='figura' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#273036" fill-opacity="1" d="M0,0L0,32L288,32L288,160L576,160L576,224L864,224L864,256L1152,256L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
</svg>
    </section>

    <section class="text-center ">
        <div class="container">
            <h2 className=' text-light p-5'>¿Por qué Breaking Bad es la mejor serie de la historia?</h2>
            <div class="split ">
                <div>
                    <p className=' p-5 text-light' >Cinematográficamente Breaking Bad lo tiene todo, incluso buenas actuaciones e imágenes panorámicas impresionantes. Drama, humor negro, acción, tragedia y mucho bromo. 
                    </p>
                </div>

                <div>
                    <p className=' p-5 text-light'> En esta serie se puede esperar de todo, menos decepciones. Las actuaciones han sido dignas de Emmys, Golden Globes y muchos otros premios.
                    </p>
                </div>
            </div>
        </div>
    </section>
       <svg className='figura' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,32L0,192L288,192L288,64L576,64L576,256L864,256L864,32L1152,32L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
</svg>
    <section class="container-fluid ">
            <div class="row p-5 my-2 ">
                <div className='  col-xl-6  col-md-12 col-sm-12 my-2'>
                    <h2 className=' text-light p-3' >El mejor episodio de Breaking Bad</h2>
                    <p className=' text-light'>
                        Un repaso por el que, para mi, es el mejor episodio de la serie: Ozymandias (Temporada 5 Capitulo 14)
                    </p>
                </div>
                <div className='  col-xl-6  col-md-12 col-sm-12 my-2'>
                    <ReactPlayer
                        url='https://youtu.be/lTA3svxiNMM'
                        className=' w-100'
                    /> 
                </div>
            </div>
    </section>
    <section class="container-fluid ">
            <div class=" row p-5 my-2">
                <div className='col-xl-6 col-md-12 col-sm-12 my-2'>
                    <ReactPlayer
                        url='https://youtu.be/aa_Y1YGUteY '
                        className=' w-100 '
                    /> 
                </div>
                <div className='col-xl-6 col-md-12 col-sm-12 my-2 '>
                    <h2 className='text-light p-3' >El final perfecto: BREAKING BAD</h2>
                    <p className=' text-light '>
                       Sin duda, una gran serie, de las mejores que he visto. EXCELENTE VÍDEO, GRAN EXPLICACIÓN.
                    </p>
                </div>
            </div>
    </section>
      <svg className='figura' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#f3f4f5" fill-opacity="1" d="M0,256L0,160L288,160L288,96L576,96L576,128L864,128L864,192L1152,192L1152,32L1440,32L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path>
</svg>
<br></br>
<br></br>
        </>
    )
}

export default InicioBreaking ; 