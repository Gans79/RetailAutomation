const selectorByAttributeValue = (tag, attr, value) => `${tag}[${attr}*='${value}']`; 
// A pseudo-random class suffix gets attached to our React components, this bypasses that by specifiying a prefix class
const selectorByClassPrefix = prefix => `[class*='${prefix}']`; 
const selectorById = id => `#${id}`; 
const selectorByTextContains = (tag,text) => `[${tag}:contains(${text})]`; 
module.exports = { 
    selectorByAttributeValue, 
    selectorByClassPrefix, 
    selectorById, 
    selectorByTextContains 
}; 