import React from 'react'

export const Pagination = ({productsPerPage, totalProducts, currentPage, setCurrentPage}) => {

  const pageNumbers = [];

  for (let i=1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
  }

  const onPreviouspage = () => {
    if (currentPage === 1)
      { setCurrentPage(currentPage)}
    else  
      {setCurrentPage(currentPage - 1)}
  }

  const onNextpage = () => {
    if (currentPage <= Math.ceil(totalProducts / productsPerPage))
      {setCurrentPage(Math.ceil(totalProducts / productsPerPage))}
    else 
      { setCurrentPage(currentPage + 1)}
  }

  const onSpecificPage = (n) => {
    setCurrentPage(n)
  }
  return (
    <nav className='pagination is-centered mb-6'
          role='navigation'
          aria-label='pagination'
          >
      <a className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviouspage}>Anterior</a>
      <a className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextpage}>Siguiente</a>
      <ul className='pagination-list'>
        {pageNumbers.map(noPage => (
          <li key={noPage}>
            <a className={`pagination-link ${
              noPage === currentPage ? 'is-current' : ''
            }`}
            onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}

      </ul>
        
    </nav>
  );
};

export default Pagination