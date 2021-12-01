const { default: axios } = require('axios')
const parseString = require('xml2js').parseString
const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const getCorreios = async () => {
    const res = await axios.get('http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx', {
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
    })

    const data = await res.data
    const xml = parseString(res.data, (err, result) => {
        //let data = JSON.stringify(result)
        console.log(result.Servicos.cServico)
    })

    // const res = await axios.post("https://api.correios.com.br/token/v1/autentica", {}, {
    //     headers: {
    //         'Accept': 'application/json',
    //         'Authorization': 'Basic Mzc4NjExNjYwMDAxMDI6QmVrb3IwNDA5MTIh'
    //     }
    // }).then((res) => { console.log(res.data) })
}
getCorreios()

app.listen(port, console.log('Server Running'))