import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'shards-react'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'shards-ui/dist/css/shards.min.css'

import Chat from 'chat/Chat'

const App = () => (
  <Container>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quo
      libero ducimus, similique illum dolore! Adipisci soluta eum reiciendis
      voluptate odio hic voluptas tenetur pariatur, nobis expedita numquam porro
      impedit.
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste dolor
      iure cupiditate expedita odit quibusdam! Voluptatibus nulla sapiente
      expedita dolorem molestias perspiciatis saepe reiciendis.
    </p>
  </Container>
)

ReactDOM.render(<App />, document.getElementById('app'))
