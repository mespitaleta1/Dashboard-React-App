const Card = ({cardData}) => {
    return (
        cardData.map((item, idx)=> {
            return (
            <div key={idx} className='card-body_data'>
               <h4 className="card-body_title">{item.title}</h4>
               <span>{item.data}</span>
            </div>)
         })
    );
}

export default Card; 