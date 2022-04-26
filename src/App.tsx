import React from "react";
import GlobalStyle from "./global/global";
import { Header, Search, Card } from "./App.style";
import map from "./assets/images/backgroundImage.png";
import { MdSearch } from "react-icons/md";
import api from "./services/api";

interface cepDetails {
  cep?: "";
  logradouro?: "";
  complemento?: "";
  bairro?: "";
  localidade?: "";
  uf?: "";
  ibge?: "";
  ddd?: "";
}

export const App: React.FC<cepDetails> = (cepDetails) => {
  const [cepInput, setCepInput] = React.useState("");
  const [cepData, setCepData] = React.useState(cepDetails);
  const search = async () => {
    try {
      const response = await api.get(`${cepInput}/json`);
      setCepData(response.data);
    } catch (error: any) {
      alert(error.message);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Header>
        <h1>CEP Search</h1>
        <img src={map} alt="" />
        <p>Busque por um CEP de forma fácil, rápida e intuitiva</p>
        <Search>
          <input
            type="numeric"
            maxLength={8}
            placeholder="Digite aqui seu cepData..."
            value={cepInput}
            onChange={(e) => setCepInput(e.target.value)}
          />
          <button onClick={search}>
            <MdSearch size="25" color="282a36" />
          </button>
        </Search>
      </Header>
      {cepData.cep && (
        <Card>
          <h3>CEP {cepData.cep}</h3>
          <span>logradouro - {cepData.logradouro}</span>
          <span>complemento - {cepData.complemento}</span>
          <span>bairro - {cepData.bairro}</span>
          <span>localidade - {cepData.localidade}</span>
          <span>uf - {cepData.uf}</span>
          <span>ibge - {cepData.ibge}</span>
          <span>ddd - {cepData.ddd}</span>
        </Card>
      )}
    </>
  );
};

export default App;
