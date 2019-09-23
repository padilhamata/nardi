import React, { Component } from "react";

import config, { storage } from "./../firebase-config";

class AdminPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      estaGravando: false
    };

    this.gravaPortfolio = this.gravaPortfolio.bind(this);
  }

  gravaPortfolio(e) {
    const itemPortifolio = {
      titulo: this.titulo.value,
      descricao: this.descricao.value,
      imagem: this.imagem
    };
    this.setState({ estaGravando: true });
    const arquivo = itemPortifolio.imagem.files[0];
    const { name, size, type } = arquivo;

    const ref = storage.ref(name);
    ref.put(arquivo).then(img => {
      img.ref.getDownloadURL().then(downloadURL => {
        const novoPortfolio = {
          titulo: itemPortifolio.titulo,
          descricao: itemPortifolio.descricao,
          imagem: downloadURL
        };

        config.push("portfolio", {
          data: novoPortfolio
        });
        this.setState({ estaGravando: false });
      });
    });

    e.preventDefault();
  }

  render() {
    if (this.state.estaGravando) {
      return (
        <div className="container">
          <p>
            <span class="glyphicon glyphicon-refresh"></span> aguarde ...{" "}
          </p>
        </div>
      );
    }
    return (
      <div style={{ padding: "120px" }}>
        <h2>Portfolio - Area Administrativa</h2>

        <form onSubmit={this.gravaPortfolio}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              placeholder="Titulo"
              ref={ref => (this.titulo = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Descrição</label>
            <textarea
              className="form-control"
              id="descrição"
              rows="3"
              ref={ref => (this.descricao = ref)}
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Imagem</label>
            <input
              type="file"
              className="form-control-file"
              id="imagem"
              ref={ref => (this.imagem = ref)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
export default AdminPortfolio;
