# POC: Correios

Integração com a API Pública dos correios para cálculo de frete.

## Request

Requisição realizada com `axios`.

```js
const URL_BASE = "http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx";
```

Parâmetros da requisição:

```js
params: {
    "nCdEmpresa": "",
    "sDsSenha": "",
    "sCepOrigem": "09060050",
    "sCepDestino": "09290650",
    "nVlPeso": "1",
    "nCdFormato": "1",
    "nVlComprimento": "20",
    "nVlAltura": "20",
    "nVlLargura": "20",
    "sCdMaoPropria": "n",
    "nVlValorDeclarado": "0",
    "sCdAvisoRecebimento": "n",
    "nCdServico": "04014",
    "nVlDiametro": "0",
    "StrRetorno": "xml",
    "nIndicaCalculo": "3"
}
```
