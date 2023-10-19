const inlineStylesForAuthor={
    color: '#617d98', 
    fontSize: '0.75rem', 
    marginTop: '0.5rem'
}

const Book=(props)=>{
        // Always start with Capital letters for function/component Name
        //always return something
        const {src,title,author,price,number} =props;
        return (
            <article className='book'>
                <span className="number">{number}</span>
                <img src={src} alt={title}/>
                <h2>{title}</h2>
                <h3 style={inlineStylesForAuthor}>{author}</h3>
                <p>{price}</p>
                <button>Does Nothing</button>
            </article>
        );
    }

export default Book;