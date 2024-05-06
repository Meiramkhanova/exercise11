import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "45px",
        }}
      >
        <header>
          <h1>Form</h1>
        </header>
        <main>
          <RegistrationForm />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
