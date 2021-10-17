import convert from 'xml-js'

/**
 * 
 * @param {Object} - dataXML 
 * @returns {JSON} - JSON OBJECT
 */
export const converToJson = (dataXML) => {
    const resultJson = convert.xml2json(dataXML, {compact: true, spaces: 2});
    return JSON.parse(resultJson)
}