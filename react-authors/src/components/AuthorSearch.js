import React, {useEffect, useState} from "react";
import { Form, Input, Button } from "semantic-ui-react";
//import { Authors } from "./Authors";

export const AuthorSearch = ({ authors, onNewSearch, onClearSearch}) => {
  const [lName, setLName] = useState("");
  //const [arrAuthors, setLAuthor] = useState({});
  var arrAuthors = []


  return (

  	
    <Form>
      <Form.Field>
        <Input
          placeholder="Enter last name"
          value={lName}
          onChange={e => setLName(e.target.value)}
        />
      </Form.Field>
     

     <Form.Field>
        <Button
          onClick={ () => {
          	console.log(authors);
          	for(var i=0; i<authors.length; i++){
          		if(lName.toLowerCase () === authors[i].LName.toLowerCase ())
          			 arrAuthors.push(authors[i])

          	}
          	
          	onNewSearch(arrAuthors)
            
          }}
        >
          Search
        </Button>
      </Form.Field>

	<Form.Field>
        <Button
          onClick={ () => {
          	setLName("")
            onClearSearch(authors)
          }}
        >
          Clear
        </Button>
      </Form.Field>

     </Form>
      
    
    );

   };