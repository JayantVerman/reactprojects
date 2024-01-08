import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import Note from './Note'
// import contacts from '../contact'
// import { ContCard } from './Card'
import Entry from './Entry'
import emojiPedia from '../emojiPedia'
// import { CreatEmoji } from './Emoji'

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      description={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiPedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;



// previously used inside app div from different projects
// <Header />
// <Note />
// {contacts.map(ContCard)}
// <Footer />