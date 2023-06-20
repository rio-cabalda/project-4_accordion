import Faq from './Faq';

const FaqList = ({faqs,toggleQuestion,activeId}) => {
   
    
  return (
        <section className='container'>
            <h1>Questions</h1>
                {faqs.map((question)=>{
                  
                    return <Faq {...question} toggleQuestion={toggleQuestion} activeId={activeId} key={question.id}/>
                    
                })}
        </section>
  )
}

export default FaqList