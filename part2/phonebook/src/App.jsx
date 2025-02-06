import React, { useState, useEffect } from 'react';
import Search from './components/search';
import AddPersonForm from './components/AddPersonForm';
import Persons from './components/Persons';
import bookService from './services/book';
import ErrMessage from './components/ErrMessage';
import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    bookService.getAll()
      .then(response => {
        setPersons(response.data);
      })
  })

  const changeNum = (id) => {
    const person = persons.find(person => person.id === id);
    if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
      setErrorMessage(`Information of ${person.name} has been changed`);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      const changedPerson = { ...person, number: newNumber };
      bookService
        .update(id, changedPerson)
        .then(response => {
          setPersons(persons.map(person => person.id !== id ? person : response.data));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      changeNum(existingPerson.id);
    } else {
      setErrorMessage(`Added ${newName}`);
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      bookService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const deletePerson = (id) => {
    const person = persons.find(person => person.id === id);
    if (window.confirm('Delete ' + person.name + '?')) {
      bookService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const personToShow = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrMessage message={errorMessage} className="error-message" />
      <Search search={search} handleSearchChange={handleSearchChange} />
      <h2>Add a new</h2>
      <AddPersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personToShow} deletePerson={deletePerson}/>
    </div>
  );
};

export default App;