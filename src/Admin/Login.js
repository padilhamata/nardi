import React, { Component } from "react";

import { auth } from "./../firebase-config";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estaAutenticado: false,
      estaLogando: true,
      erro: false
    };
    this.email = null;
    this.senha = null;
    this.autenticaUsuario = this.autenticaUsuario.bind(this);
  }
  autenticaUsuario() {
    this.setState({ estaAutenticado: true, error: false });
    auth
      .signInWithEmailAndPassword(this.email.value, this.senha.value)
      .then(user => {
        console.log("Usuário Logado", user);
        this.setState({ estaLogando: true });
      })
      .catch(err => {
        console.log("erro", err);
        this.setState({ erro: true, estaLogando: false });
      });
  }

  render() {
    return (
      <div className="container">
        <h1>login</h1>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">email</label>
          <input
            type="email"
            name="email"
            ref={ref => (this.email = ref)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="nome@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Senha</label>
          <input
            type="password"
            name="senha"
            ref={ref => (this.senha = ref)}
            className="form-control"
            id="exampleInputPassword1"
          />
          {this.state.erro && (
            <small id="emailHelp" className="form-text text-muted">
              E-mail ou senha invalidos
            </small>
          )}
        </div>
        <div className="form-group form-check"></div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.autenticaUsuario}
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default login;
6:17
