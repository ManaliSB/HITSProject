import React from "react";
import { Table } from "semantic-ui-react";

export const Authors = ({ authors }) => {
  return (
  	<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>FirstName</Table.HeaderCell>
        <Table.HeaderCell>LastName</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
        <Table.HeaderCell>Joining Date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    	{authors.map(author => {
        	return (
        		<Table.Row>
        			<Table.Cell>{author.FName}</Table.Cell>
        			<Table.Cell>{author.LName}</Table.Cell>
        			<Table.Cell>{author.email}</Table.Cell>
        			<Table.Cell>{author.dob}</Table.Cell>
        			<Table.Cell>{author.joinDate}</Table.Cell>
        		</Table.Row>
        	);
        })}	
    </Table.Body>


    </Table>

  	
  )
} 