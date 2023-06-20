import { useState } from 'react';
import FaqList from './components/FaqList';
import FAQlist from './data';

function App() {
  const [faqs, setFaqs] = useState(FAQlist);
  const[activeId,setActiveId] =useState(null); // this will control what component content is to show.
                                                // null not showing the content in the component


  
  const toggleQuestion = (id) => { // get the id of data when click in the Faq component.
    const newId = activeId === id ? null : id; //check the id if the same return null, else will show the content of that id.
    setActiveId(newId)
    }

  return (
    <main>
        <FaqList faqs={faqs} toggleQuestion={toggleQuestion} activeId={activeId}/>
    </main>
  )
}

export default App
