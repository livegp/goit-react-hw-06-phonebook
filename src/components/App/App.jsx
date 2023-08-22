import React from 'react';

import { Container, Section, SubTitle, Title } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

function App() {
  return (
    <Container>
      <Section>
        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
