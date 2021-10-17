import convert from 'xml-js'

export const converToJson = (dataXML) => {
    const resultJson = convert.xml2json(dataXML, {compact: true, spaces: 2});
    return JSON.parse(resultJson)
}