import React from 'react';
import { Form } from 'react-bootstrap';

const Search = props => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            onChange={event => props.handleSearch(event.target.value)}
            type="text"
            name="search"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
