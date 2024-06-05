/** @jsx jsx */
import {jsx} from '@emotion/core'

import './bootstrap'
import Tooltip from '@reach/tooltip'
import {FaSearch, FaTimes} from 'react-icons/fa'
import {Input, BookListUL, Spinner} from './components/lib'
import {BookRow} from './components/book-row'
import { useEffect, useState } from 'react'
import { client } from './utils/api-client' 
import * as colors from './styles/colors'
import { useAsync } from 'utils/hooks'

function DiscoverBooksScreen() {
  const [query, setQuery] = useState('');
  const [queried, setQueried] = useState(false);

  const {data, error, run, isLoading, isError, isSuccess} = useAsync();


  useEffect(() => {
    if(!queried){
      return;
    };
    /** For using run, the client function should have a good structure, take care of the error and data,
     * it should return the error and the data to be saved in the states which are created in the hook
     */
    run(client(`books?query=${encodeURIComponent(query)}`));
  }, [queried, query, run]);

  /*** EXERCISE AND EXTRA CREDIT # 1 
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState(null);
  
  useEffect(() => {
    if(!queried){
      return;
    };

    setStatus('loading')
    const getBooks = async() => {
      const response = await client(`books?query=${encodeURIComponent(query)}`, {
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin", 
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      });
      if(response?.message){
        setStatus('error')
      } else if (response?.books) {
        setStatus('success')
      }
      setData(response);
    };
    getBooks();
  }, [query, queried])
  */

  function handleSearchSubmit(event) {
    event.preventDefault();
    setQueried(true)
    const inputElement = event?.target?.elements[0];
    setQuery(inputElement.value);
  }

  return (
    <div
      css={{maxWidth: 800, margin: 'auto', width: '90vw', padding: '40px 0'}}
    >
      <form onSubmit={handleSearchSubmit}>
        <Input
          placeholder="Search books..."
          id="search"
          css={{width: '100%'}}
        />
        <Tooltip label="Search Books">
          <label htmlFor="search">
            <button
              type="submit"
              css={{
                border: '0',
                position: 'relative',
                marginLeft: '-35px',
                background: 'transparent',
              }}
            >
              {isLoading ? <Spinner /> : isError? 
            <FaTimes aria-label="error" css={{color: colors.danger}} /> :
            <FaSearch aria-label="search" />}
            </button>
          </label>
        </Tooltip>
      </form>

      {isError ? (
          <div css={{color: colors.danger}}>
            <p>There was an error:</p>
            <pre>{error.message}</pre>
          </div>
        ) : null
      }

      {isSuccess ? (
        data?.books?.length && (
          <BookListUL css={{marginTop: 20}}>
            {data.books.map(book => (
              <li key={book.id} aria-label={book.title}>
                <BookRow key={book.id} book={book} />
              </li>
            ))}
          </BookListUL>
        )
      ) : null }
    </div>
  )
}

export {DiscoverBooksScreen}
