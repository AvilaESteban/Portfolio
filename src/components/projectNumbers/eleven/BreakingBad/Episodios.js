import React from 'react';

const Episodios = (props) => {
    return(
      <>

   <div className=''>
       <div className="container">
	<div className="row">
		<div className="col">
			<div className="rt-profile-card-break"><img class="full-width-break img-fluid-break" src={props.serie.img}/>
				<div className="rt-profile-body-break">
					<div className="rt-profile-name-break"> {props.serie.name}</div>
					<div className="rt-profile-text-break"> occupation: {props.serie.occupation}</div>
          <div className="rt-profile-text-break">nickname: {props.serie.nickname}</div>
          <div className="rt-profile-text-break">category: {props.serie.category}</div>
				</div>

			</div>
		</div>
	</div>
</div>

        
      </div>
        
      </>
    );
}

export default Episodios;