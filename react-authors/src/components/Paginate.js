import React from 'react'
import { Pagination } from 'semantic-ui-react'

export const Paginate = ({authorsPerPage, totalAuthors, showPage}) => {
	
  	return (
  <Pagination
    boundaryRange={5}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={5}
    totalPages={Math.ceil(totalAuthors/authorsPerPage)}
    onPageChange={(event, data) => showPage(data.activePage)}
  />
)

}
