import React, {useEffect, useState} from 'react';
import './App.css';
import { Container } from "semantic-ui-react"; 
import { Authors } from "./components/Authors";
import {AuthorSearch} from "./components/AuthorSearch"
import {Paginate} from "./components/Paginate"

function App() { 
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [authorsPerPage] = useState(10)
  
  useEffect(() => {
    const fetchAuthors = () => {
      fetch("/authors").then(response =>
      response.json().then(data => {
        setAuthors(data.authors);
      })
    );
    }
    fetchAuthors();
  }, []);

//Get current posts
 const indexOfLast = currentPage * authorsPerPage;
  const indexOfFirst = indexOfLast - authorsPerPage;
  const currentSet = authors.slice(indexOfFirst, indexOfLast);

//On Change Page
const changePage = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <Container style={{ marginTop: 40 }} >
        <AuthorSearch authors={authors}
          onNewSearch={arrAuth => {
            setAuthors(arrAuth)
            setCurrentPage(1)
          } }
          onClearSearch={arrAuth2 => 
            fetch("/authors").then(response =>
            response.json().then(data => {
            setAuthors(data.authors);
          })
        )}
       />
        <Authors authors={currentSet}/> 
        <Paginate authorsPerPage = {authorsPerPage} totalAuthors={authors.length} showPage={changePage} />
      </Container >
    </div>  
  )
      
  
}

export default App;
